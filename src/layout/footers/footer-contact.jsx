import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import headphone from "@assets/img/cta/home-3/headphone.png";
import conversation from "@assets/img/cta/home-3/conversation.png";
import footer_contact_shape_1 from "@assets/img/cta/home-3/shape-2.png";
import footer_contact_shape_2 from "@assets/img/cta/home-3/shape-3.png";

const FooterContact = ({bg_style, contact_style, about_page}) => {
    return (
        <>
            <div className={`${bg_style ? "" : contact_style ? "tp-contact-cta-area" : "tp-cta-4-area"} p-relative`}>
                <div className="tp-cta-4-shape">
                    <Image src={footer_contact_shape_1} alt="theme-pure" />
                </div>
                <div className="container">
                    <div className="row gx-0">
                        <div className="col-xl-12">
                            <div className="tp-cta-4-wrapper-center text-center">
                                <h2 className="tp-section-title text-white mb-30">
                                    {about_page ? "Let's Build Your Future Together" : "Ready to See What Proactive IT Can Do for Your Business?"}
                                </h2>
                                {about_page && (
                                    <p className="text-white mb-30" style={{fontSize: '18px'}}>
                                        Discover how a strategic technology partnership can transform your business. Let's start the conversation.
                                    </p>
                                )}
                                <div className="d-flex gap-3 justify-content-center">
                                    <Link href="/contact" className="tp-btn-orange">
                                        {about_page ? "Get a Free Consultation" : "Get Your Free Consultation Now"}
                                    </Link>
                                    {about_page && (
                                        <Link href="/service" className="tp-btn" style={{background: '#fff', color: '#0057FF'}}>
                                            Explore Our Services
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterContact;