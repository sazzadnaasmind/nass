import React from 'react';
import { useRouter } from 'next/router';
import SEO from '@/src/common/seo';
import ServiceDetailsContent from '@/src/components/service-details';
import service_details_data from '@/src/data/service-details-data';

const DynamicServiceDetails = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Find the service based on slug
  const serviceData = service_details_data.find(service => service.slug === slug);

  // If service not found, show 404 or redirect
  if (!serviceData && router.isReady) {
    return (
      <>
        <SEO pageTitle="Service Not Found" />
        <div style={{ padding: '100px', textAlign: 'center' }}>
          <h1>Service Not Found</h1>
          <p>The service you're looking for doesn't exist.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO pageTitle={serviceData?.title || 'Service Details'} />
      <ServiceDetailsContent serviceData={serviceData} />
    </>
  );
};

export default DynamicServiceDetails;

// This function gets called at build time for static generation
export async function getStaticPaths() {
  const paths = service_details_data.map((service) => ({
    params: { slug: service.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

// This function gets called at build time for each path
export async function getStaticProps({ params }) {
  return {
    props: {
      slug: params.slug,
    },
  };
}
