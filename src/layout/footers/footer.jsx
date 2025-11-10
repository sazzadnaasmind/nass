import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import headphone from "@assets/img/footer/headphone.png";
// import footer_logo from "@assets/img/logo/footer-logo.png";
import footerlogo2 from "@assets/img/logo/footer_logo1.png";
import user from "@assets/img/footer/user.png";
import EmailAeroplan from '@/src/svg/email-aeroplan';
import SocialLinks, { CopyRight } from '@/src/common/social-links';


const footer_content = { 
    contact_us: <> Contact us at <span>info@naasmind.com</span></>,
    mail: "info@naasmind.com",
    contact_text: "Ready to See What Proactive IT Can Do for Your Business?",
    phone: "+8801772337656",
    info: <>Proactive IT solutions that drive business growth. We handle your technology, so you can focus on what matters.</>,
    map: "https://www.google.com/maps/search/7th+Floor,+Flat+7/A+(South),+Metro+Pillar+267,+1281+Begum+Rokeya+Avenue,+Mirpur+Dhaka,+Bangladesh/@23.8103,90.4125,12z",
    address: <>7th Floor, Flat 7/A (South), Metro Pillar 267, 1281 Begum Rokeya Avenue, Mirpur Dhaka, Bangladesh</>,
    mail_2: "info@naasmind.com",
    mail_phone: <>info@naasmind.com <br /> +8801772337656</>,

    service_links: [
        "Managed IT Services",
        "Cybersecurity Solutions",
        "Cloud Backup & Recovery",
        "Data Backup & Restoration",
        "VoIP Business Phones",
        "IT Consulting",
        "Product Development",
    ],

    quick_links: [
        { name: "About Us", link: "/about" },
        { name: "Industries We Serve", link: "/service" },
        { name: "Our Blog (Resources)", link: "/blog" },
        { name: "Contact Us", link: "/contact" },
        { name: "FAQ", link: "#" },
        { name: "Privacy Policy", link: "#" },
    ],

    newsletter_text: "Get exclusive IT tips, security alerts, and strategies that give your business a competitive edge.",
    newsletter_disclaimer: "You can unsubscribe at any time. We respect your privacy."
}
const {contact_us, mail, contact_text, phone, info, map, address, mail_2, mail_phone, service_links, quick_links, newsletter_text, newsletter_disclaimer} = footer_content


const Footer = () => {
    return (
        <>
            <footer className="tp-footer-area p-relative">
                <div className="tp-footer-bg" style={{backgroundImage: `url(/assets/img/footer/footer-bg.jpg)`}}></div>
                <div className="tp-footer-top-shape" style={{backgroundImage: `url(/assets/img/footer/footer-top-bg.png)`}}></div>
                
                <div className="container container-large">

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tp-footer-top-area">
                                <div className="row align-items-center">
                                <div className="col-lg-6">  
                                    <div className="tp-footer-top-contact">
                                        <a href={`mailto:${mail}`}>{contact_us}</a>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="tp-footer-top-right d-flex justify-content-start justify-content-lg-end">
                                        <div className="tp-footer-top-right-headphone">
                                            <Image src={headphone} alt="theme-pure" />
                                        </div>
                                        <div className="tp-footer-top-right-content">
                                            <p>{contact_text}</p>
                                            <a href={`tel:${phone}`}>+8801772337656</a>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tp-footer-main-area">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="tp-footer-widget tp-footer-col-1">
                                <div className="tp-footer-logo">
                                <a href="index.html"> <Image src={footerlogo2} alt="theme-pure"  width={160} /></a>
                                </div>
                                <div className="tp-footer-widget-content">
                                    <div className="tp-footer-info">
                                        <p>{info}</p>
                                        <div className="tp-footer-main-location">
                                            <a target='_blank' href={map}> <i className="fa-sharp fa-light fa-location-dot"></i> 
                                            {address}</a>
                                        </div>
                                        <div className="tp-footer-main-mail">
                                            <a href={`mailto:${mail_2}`}>
                                                <i className="fa-light fa-message-dots"></i>{mail_phone}</a>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="tp-footer-widget tp-footer-col-2">
                                <h3 className="tp-footer-widget-title">Services</h3>
                                <div className="tp-footer-widget-content">
                                    <ul>
                                        {service_links.map((link, i) => <li key={i}><Link href="/service">{link}</Link></li>)} 
                                    </ul>
                                </div>
                                </div> 
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="tp-footer-widget tp-footer-col-3">
                                <h3 className="tp-footer-widget-title">Company</h3>
                                <div className="tp-footer-widget-content">
                                    <ul>
                                        {quick_links.map((item, i) => <li key={i}><Link href={item.link}>{item.name}</Link></li>)} 
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-5 col-md-6">
                                <div className="tp-footer-widget tp-footer-col-4">
                                <h3 className="tp-footer-widget-title">Newsletter</h3>
                                <div className="tp-footer-widget-content">
                                    <p className="mb-20">{newsletter_text}</p>
                                </div>
                                <div className="tp-footer-from">
                                    <div className="tp-footer-text-email p-relative">
                                        <input type="text" placeholder="Enter Email Address" />
                                        <span> 
                                            <EmailAeroplan />
                                        </span>
                                    </div>
                                    <p className="tp-footer-disclaimer mt-15" style={{fontSize: '12px', opacity: '0.8'}}>{newsletter_disclaimer}</p>
                                <div className="tp-footer-widget-social">
                                    <SocialLinks /> 

                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="tp-footer-copyright-area p-relative">
                        <div className="row">
                            <div className="col-md-12 col-lg-6">
                                <div className="tp-footer-copyright-inner">
                                <p><CopyRight /> </p>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-6">
                                <div className="tp-footer-copyright-inner text-lg-end">
                                <Link href="#">Terms and conditions</Link>
                                <Link className="ml-50" href="#"> Privacy policy</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;