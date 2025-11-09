import React from "react";
import AngleArrow from "@/src/svg/angle-arrow";
import LineArrowFive from "@/src/svg/line-arrow-5";

const TestimonialFeature = () => {
  return (
    <>
      <section className="tp-feature-3-area pt-100 pb-100">
        <div className="container">
          <div className="row align-items-center mb-50">
            <div className="col-lg-6">
              <div className="tp-feature-title-wrapper">
                <span className="tp-section-title__pre">
                  Why Choose <span className="title-pre-color">Us</span>
                  <AngleArrow />
                </span>
                <h3 className="tp-section-title">
                  The Naasmind Difference, <span className="title-color">Delivered</span>
                  <span className="title-right-shape">
                    <LineArrowFive />
                  </span>
                </h3>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tp-feature-wrapper p-relative">
                <p>
                  Choosing an IT partner is a decision built on trust and results. Our clients consistently experience a dramatic improvement in their operational stability and security. We are proud to be the trusted technology partner for hundreds of businesses, from the factory floors of Gazipur to the fintech startups of Dhaka.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="tp-fun-fact-item mb-40 text-center p-5" style={{background: '#f8f9fa', borderRadius: '10px'}}>
                <h2 className="fun-fact-title mb-3" style={{fontSize: '48px', color: '#0057FF', fontWeight: 'bold'}}>40%</h2>
                <p style={{fontSize: '18px', color: '#333'}}>Average Reduction in IT Incidents</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="tp-fun-fact-item mb-40 text-center p-5" style={{background: '#f8f9fa', borderRadius: '10px'}}>
                <h2 className="fun-fact-title mb-3" style={{fontSize: '48px', color: '#0057FF', fontWeight: 'bold'}}>24/7</h2>
                <p style={{fontSize: '18px', color: '#333'}}>Proactive System Monitoring & Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialFeature;
