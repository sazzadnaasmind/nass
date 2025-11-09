import Count from '@/src/common/count';
import React from 'react';


// support data  
const support_content = [
    {
        id: 1, 
        count: "", 
        symbol: "",
        cls: "fadeLeft",
        title: "Cybersecurity Shield",
        info: <>Proactive Threat Protection: Defending your <br /> business from evolving digital threats.</>
    },
    {
        id: 2, 
        count: "", 
        symbol: "",
        cls: "",
        title: "Cloud Migration",
        info: <>Seamless Cloud Transition: Unlocking scalability <br /> and efficiency with expert cloud services.</>
    },
    {
        id: 3, 
        count: "", 
        symbol: "",
        cls: "fadeRight",
        title: "IT Consulting",
        info: <>Strategic Tech Roadmap: Aligning your technology <br /> investments with your future business goals.</>
    },
]

const SupportArea = () => {
    return (
        <>
            <section className="tp-support-feature-area pb-100">
            <div className="container container-large">
               <div className="row">
                {support_content.map((item, i) =>
                    <div key={i} className="col-lg-4">
                        <div className="tp-support-feature-item d-flex p-relative fadeRight">
                      
                        <div className="tp-support-feature-content">
                            <h4 className="tp-support-feature-content-title">{item.title}</h4>
                            <p>{item.info}</p>
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

export default SupportArea;