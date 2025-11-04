import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import ServiceDetailsArea from "./service-details-area";
import FooterContact from "@/src/layout/footers/footer-contact";
import Footer from "@/src/layout/footers/footer";

const ServiceDetails = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="Machine Learning" page_title="Service Details" />
        <ServiceDetailsArea />
        <FooterContact bg_style={true} />
      </main>
      <Footer />
    </>
  );
};

export default ServiceDetails;
