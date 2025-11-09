import React from 'react';
import Wrapper from '@/src/layout/wrapper';
import SEO from '@/src/common/seo';
import About from '@/src/components/about';

const AboutPage = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'About Us'} />
            <About />
        </Wrapper>
    );
};

export default AboutPage;
