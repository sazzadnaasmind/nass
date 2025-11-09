import React from 'react';  
import Link from 'next/link';
import Image from 'next/image';

import AngleArrow from '@/src/svg/angle-arrow'; 
import LineArrowFive from '@/src/svg/line-arrow-5';

import feature_img_1 from "@assets/img/feature/img-1.jpg";
// import feature_img_1 from "@assets/img/feature/mission.png";
import feature_img_2 from "@assets/img/feature/img-2.jpg";
import feature_img_3 from "@assets/img/feature/img-3.jpg";
import shape_1 from "@assets/img/feature/shape-1.png"; 
import shape_2 from "@assets/img/feature/shape-2.png"; 
import shape_3 from "@assets/img/feature/img-shape.png"; 


const feature_content = {
  feature_data: [
    {
      id: 1,
      img: feature_img_1 ,
      title: "Proactive Partnership, Not Reactive Service",
      description: <>We don't wait for your systems to fail. Our philosophy is built on 24/7 proactive monitoring and management to identify and solve potential issues before they can impact your operations. We act as an extension of your team, constantly working to optimize your performance and security.</>,
    },
    {
      id: 2,
      img: feature_img_2,
      title: "Deep Local Expertise",
      description: <>We aren't a faceless global corporation. We are a team of Bangladeshi engineers and strategists who understand the unique challenges and opportunities of this market. Our solutions are practical, designed for local infrastructure, and supported by experts who are always just a phone call away.</>,
    },
    {
      id: 3,
      img: feature_img_3,
      title: "Transparent & Measurable Value",
      description: <>We believe your IT investment should deliver a clear return. With our predictable, flat-rate pricing, you can budget effectively without fear of hidden costs. We provide regular reports and strategic reviews to show you exactly how our services are reducing your risks, cutting costs, and driving your business forward.</>,
    },
  ],
};

const {feature_data} =  feature_content


const FeatureArea = ({about}) => {
    return (
        <> 
           <section className={`tp-feature-area ${about ? "feature-breadcrumb pb-100" : ""}`}>
            {about ? null : 
            <div className="tp-feature-shape">
               <Image src={shape_1} alt="theme-pure" />
            </div> 
            }
            <div className="container container-large">
               <div className="row align-items-center">
                  <div className="col-lg-6">
                     <div className="tp-feature-title-wrapper">
                        <span className="tp-section-title__pre">
                           Our <span className="title-pre-color">Philosophy</span>
                           <AngleArrow />
                        </span>
                        <h3 className="tp-section-title">The Naasmind <span className="title-color">Approach</span>
                           <span className="title-right-shape"> 
                              <LineArrowFive />
                           </span>
                        </h3>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="tp-feature-wrapper p-relative">
                        <p>We built Naasmind to be different. Our approach is rooted in proactive partnership, deep local understanding, and delivering transparent, measurable value to every business we serve.</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                {feature_data.map((item, i)  => 
                    <div key={i} className="col-lg-4 col-md-6">
                        <div className="tp-feature-item-box p-relative wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                        <div className="tp-feature-item p-relative mb-30">
                            <div className="tp-feature-item-shape">
                                <Image src={shape_2} alt="theme-pure" />
                            </div>
                            <div className="tp-feature-item-wrapper">
                                <div className="tp-feature-item-thumb">
                                    <div className="shape">
                                    <Image src={shape_3} alt="theme-pure" />
                                    </div>
                                    <Image src={item.img} className="thumb" alt="theme-pure" />
                                </div>
                                <div className="tp-feature-item-content">
                                    <h3 className="feature-title">
                                        <Link href="/about">{item.title}</Link>
                                    <span> 
                                        <AngleArrow />                                
                                    </span>
                                    </h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="tp-feature-item-btn">
                            <Link href="/about"><i className="fa-regular fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div> 
                )} 
               </div>
            </div>
         </section> 
        </>
    );
};

export default FeatureArea;