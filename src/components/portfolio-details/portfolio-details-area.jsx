import React from 'react';
import Image from 'next/image';


import portfolio_thumb from "@assets/img/portfolio/portfolio-details/img-1.jpg";
import portfolio_icon_1 from "@assets/img/portfolio/portfolio-details/icon-1.png";
import portfolio_icon_2 from "@assets/img/portfolio/portfolio-details/icon-2.png";
import portfolio_icon_3 from "@assets/img/portfolio/portfolio-details/icon-3.png";
import Link from 'next/link';
import RightSymbol from '@/src/svg/right-symbol';
import ContactIcon from '@/src/svg/contact-icon';
import EmailIconTwo from '@/src/svg/email-icon-2';
import ClockIcon from '@/src/svg/clock-icon';
import SocialLinks from '@/src/common/social-links';


const portfolio_detaisl_contact = {
  meta_content: [
    {
      id: 1,
      icon: portfolio_icon_1,
      meta_title: "Client name",
      title: "Leslie Alexander"
    },
    {
      id: 2,
      icon: portfolio_icon_2,
      meta_title: "Catagories",
      title: "Technology , Design"
    },
    {
      id: 3,
      icon: portfolio_icon_3,
      meta_title: "Project Name",
      title: "Product Design , Development"
    },
  ],
  title_1: "HUMAN‑CENTERED DIGITAL EXPERIENCE",

  description_1: <>Naasmind partnered with the client to simplify a legacy workflow into a clear, usable product. We delivered strategy, UX, and engineering to reduce friction, improve reliability, and accelerate releases.</>,

  description_2: <>Scope included discovery, research, IA, responsive UI, and system integrations. We automated manual steps, added analytics for data‑driven decisions, and introduced a design system to speed future iterations and keep quality consistent.</>,

  title_2: <>This engagement enabled participants to:</>,

  list_title: [
    <>Ship faster with reusable components and CI/CD.</>,
    <>Prioritize with data—dashboards, events, and KPIs.</>,
    <>Cut support noise through clearer flows and accessibility.</>,
  ]
};

const {meta_content, title_1, description_1, description_2, title_2, list_title }  = portfolio_detaisl_contact

const PortfolioDetailsArea = () => {
    return (
        <>
            <section className="tp-portfolio-details-area pt-120 pb-120">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-portfolio-details-wrapper">
                            <div className="tp-portfolio-details-thumb">
                            <Image src={portfolio_thumb} alt="theme-pure" />
                            </div>
                            <div className="tp-portfolio-details-meta d-flex flex-wrap justify-content-between">
                            <div className="tp-portfolio-details-meta-left d-flex flex-wrap">
                                {meta_content.map((item, i) => 
                                    <div key={i} className="tp-portfolio-details-meta-item d-flex align-items-center">
                                        <div className="tp-portfolio-details-meta-icon">
                                            <Image src={item.icon} alt="theme-pure" />
                                        </div>
                                        <div className="tp-portfolio-details-meta-content">
                                            <h4 className="tp-portfolio-details-meta-title">{item.meta_title}</h4>
                                            <p>{item.title}</p>
                                        </div>
                                    </div> 
                                )} 
                            </div>
                            <div className="tp-portfolio-details-right">
                                <div className="tp-portfolio-details-btn">
                                    <Link href="/portfolio">Need This Project?</Link>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="tp-portfolio-details-wrapper">
                            <h3 className="tp-portfolio-details-title">{title_1}</h3>
                            <p>{description_1}</p>
                            <p>{description_2}</p>
                            <div className="tp-portfolio-details-list mb-30">
                            <h4 className="tp-portfolio-details-list-title">{title_2}</h4>
                            <ul>
                                {list_title.map((list, index) => 
                                    <li key={index}><span><RightSymbol /></span>{list}</li>
                                )}
                            </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="tp-portfolio-details-info-box">
                            <div className="tp-portfolio-details-info-address">
                            <h4 className="tp-portfolio-details-info-title">
                                <span>
                                    <ContactIcon />
                                </span>our address</h4>
                                <p>Level 13, 2 Elizabeth St, Melbourne Victoria 3000, Australia</p>
                            </div>
                            <div className="tp-portfolio-details-info-mail">
                            <h4 className="tp-portfolio-details-info-title">
                                <span>
                                    <ContactIcon />
                                </span>Contact way</h4>
                            <div className="tp-portfolio-details-info-mail-content d-flex">
                                <span>
                                    <EmailIconTwo />
                                </span>
                                <div className="tp-portfolio-details-info-mail-text">
                                    <p>deanna.curtis@example.com</p>
                                    <p>(406) 555-0120</p>
                                </div>
                            </div>
                            </div>
                            <div className="tp-portfolio-details-info-open d-flex">
                            <div className="tp-portfolio-details-info-open-icon">
                                <span>
                                    <ClockIcon />
                                </span>
                            </div>
                            <div className="tp-portfolio-details-info-open-content">
                                <h4 className="tp-portfolio-details-info-title">Opening Houres</h4>
                                <p>Mon - Sat(8.00am - 6.00pm)</p>
                                <p>Sunday - Closed</p>
                            </div>
                            </div>
                            <div className="tp-portfolio-details-info-social">
                                <SocialLinks />
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    );
};

export default PortfolioDetailsArea;