import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import VideoPopup from '@/src/modals/video-popup';
import ServiceContactForm from '@/src/forms/service-contact-form';
import service_details_thumb from  "@assets/img/services/service-details/img-1.jpg";
import service_video_thumb from  "@assets/img/services/service-details/img-2.jpg";
import RightSymbol from '@/src/svg/right-symbol';
import { sidebar_services } from '@/src/data/service-details-data';

const ServiceDetailsArea = ({ serviceData }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isActive, setIsActive] = useState(1);

  // Use serviceData if provided, otherwise use default content
  const title = serviceData?.title || "Human‑Centered Product Delivery";
  const intro = serviceData?.intro || "Naasmind connects technology and people—turning ideas into usable products with clear strategy, accessible design, and reliable engineering. The result: faster releases, lower risk, and measurable business impact.";
  const benefitSubheading = serviceData?.benefitSubheading || "Why it matters";
  const benefitSummary = serviceData?.benefitSummary || "Teams ship confidently when strategy, UX, and engineering move in one track—guided by data and focused on outcomes.";
  const features = serviceData?.features || [
    "Discovery to launch: one plan, one team.",
    "Performance budgets and speed optimization baked in.",
    "Dashboards and KPIs for data‑driven decisions."
  ];
  const faqs = serviceData?.faqs || [];

    return (
        <>
            <section className="tp-service-details-area pt-120 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-lg-4">
                     <div className="tp-service-widget">

                        <div className="tp-service-widget-item mb-40">
                           <div className="tp-service-widget-tab">
                              <ul>
                                   {sidebar_services.map((item, i)  => 
                                    <li key={i}>
                                        <Link 
                                          className={serviceData?.slug === item.slug ? "active" : ""} 
                                          href={`/service-details/${item.slug}`}>
                                        {item.title} <i className="fa-regular fa-arrow-right-long"></i>
                                        </Link>
                                    </li>
                                    )}
                              </ul>
                           </div>
                        </div>

                        <div className="tp-service-widget-item mb-40">
                           <div className="tp-service-contact">
                              <div className="tp-service-contact-form">
                                <h4 className="tp-service-widget-title mb-20">Contact an Expert</h4>
                                <ServiceContactForm />
                                 <p className="ajax-response"></p>
                              </div>
                           </div>
                        </div>

                     </div>
                  </div>
                  <div className="col-lg-8">
                     <div className="tp-service-details-wrapper">
                        <div className="tp-service-details-thumb">
                           <Image src={service_details_thumb} alt="theme-pure" />
                        </div>
                        <h3 className="tp-service-details-title">{title}</h3>
                        <p>{intro}</p>
                        <div className="row">
                           <div className="col-lg-6">
                              <div className="tp-service-details-thumb p-relative">
                                 <Image src={service_video_thumb} alt="theme-pure" />
                                 <div className="tp-video-play text-center">
                                    <a className="popup-video effect-1 effect-2" 
                                        onClick={() => setIsVideoOpen(true)}  
                                        ><i className="fa-sharp fa-solid fa-play"></i>
                                    </a>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-6">
                              <div className="tp-service-details-list">
                                 <h3 className="tp-service-details-title">{benefitSubheading}</h3>
                                 <p>{benefitSummary}</p>
                                 <ul>
                                    {features.map((item, i) => 
                                    <li key={i}><span> <RightSymbol /></span>{item}</li> 
                                    )} 
                                 </ul>
                              </div>
                           </div>
                        </div>

                        <div className="tp-service-details-faq faq-style-1 mt-50">
                           <h3 className="tp-service-details-title mb-30">Frequently Asked Questions</h3>
                           <div className="tp-faq-tab-content tp-accordion">
                              <div className="accordion" id="general_accordion">
                                {faqs.map((item, i) => 
                                <div key={i} onClick={() => setIsActive(i + 1)} className={`accordion-item ${isActive === (i + 1) && "tp-faq-active"}`}>
                                    <h2 className="accordion-header" id={`heading${i}`}>
                                    <button 
                                        className={`accordion-button ${i !== 0 ? "collapsed" : ""}`} 
                                        type="button" 
                                        data-bs-toggle="collapse" 
                                        data-bs-target={`#collapse${i}`} 
                                        aria-expanded={i === 0}
                                        aria-controls={`collapse${i}`}>
                                        {item.question}
                                    </button>
                                    </h2>
                                    <div id={`collapse${i}`} 
                                        className={`accordion-collapse collapse ${i === 0 ? "show" : ""}`} 
                                        aria-labelledby={`heading${i}`} 
                                        data-bs-parent="#general_accordion">
                                        <div className="accordion-body">
                                            <p>{item.answer}</p>
                                        </div>
                                    </div>
                                </div> 
                                )} 
                               </div>
                           </div>
                        </div>

                     </div>
                  </div>
               </div>
            </div>
         </section>

            {/* video modal start */}
            <VideoPopup 
                isVideoOpen={isVideoOpen}
                setIsVideoOpen={setIsVideoOpen}
                videoId={"csnD5EVL5z8"}
            />
            {/* video modal end */}
        </>
    );
};

export default ServiceDetailsArea;