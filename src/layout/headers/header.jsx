import Link from 'next/link';
import Image from 'next/image';
import NavMenu from './nav-menu';
import MobileMenus from './mobile-menus';
import LangLogo from "@assets/img/logo/logo-lang.png";
import useSticky from '@/src/hooks/use-sticky';
import HamburgerBtn from '@/src/svg/hamburger-btn';
import React, { useEffect, useRef, useState } from 'react'; 
import HomeIcon from '@/src/svg/home-icon';
import Sidebar from '@/src/modals/sidebar';
import Logo from "@assets/img/logo/logo.png";
import Logo2 from "@assets/img/logo/footer_logo2.png";

const HeaderOne = () => {
   const {sticky}  =  useSticky()
   const langToggleRef = useRef(null);
   const [sidebarOpen, setSidebarOpen] = useState(false)
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

   const [isLangListOpen, setIsLangListOpen] = useState(false);
   useEffect(() => {
     if (langToggleRef.current) {
       const handleClickOutside = (e) => {
         if (langToggleRef.current.contains(e.target)) {
           setIsLangListOpen(!isLangListOpen);
         } else {
           setIsLangListOpen(false);
         }
       };
       window.addEventListener('click', handleClickOutside);
       return () => {
         window.removeEventListener('click', handleClickOutside);
       };
     }
   }, [isLangListOpen, langToggleRef]);


    return (
        <>
            <header className="tp-header-area tp-header-height p-relative">
               <div className="tp-header-top tp-header-space d-none d-xl-block">
                  <div className="container-fluid">
                     <div className="row align-items-center">
                        <div className="col-xxl-6 col-xl-8">
                           <div className="tp-header-top-info">
                              <ul>
                                 <li>
                                    <a href="https://www.google.com/maps/@36.0758266,-79.4558848,17z" 
                                    target="_blank"><span>
                                       <i className="fa-sharp fa-solid fa-location-dot"></i>
                                       </span>Metro Pillar 267, 1281 Begum Rokeya Avenue, Mirpur, Dhaka</a>
                                 </li>
                                 <li>
                                    <a href="mailto:info@naasmind.com"><span>
                                       <i className="fa-solid fa-envelope"></i></span>info@naasmind.com
                                    </a>
                                 </li>
                                
                              </ul>
                           </div>
                        </div>
                        <div className="col-xxl-6 col-xl-4">
                           <div className="tp-header-top-right d-flex justify-content-end align-items-center">
                              <div className="header-call">
                                 <a href="tel:01310-069824"><i className="fa-solid fa-phone"></i>+8801772337656</a>
                              </div>
                              
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div id="header-sticky" 
               className={`tp-header-bottom header__sticky p-relative ${sticky && "tp-header-sticky"}`}>
                  <div className="tp-header-bottom-space p-relative">
                     <div className="container-fluid gx-0">
                        <div className="row gx-0 align-items-center">
                           <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-6">
                           <div className="tp-header-main-left d-flex align-items-center justify-content-start p-relative">
                                 <div className="tp-header-logo ms-5">
                                    <Link href="/">
                                       <Image src={Logo2} alt="theme-pure" height={50} width={160} />
                                    </Link>
                                 </div>
                              </div>
                              </div>
                           <div className="col-xxl-7 col-xl-7 col-lg-7 d-none d-lg-block">
                              <div className="tp-main-menu-area d-flex align-items-center justify-content-center">
                                 <div className="tp-main-menu menu-icon">
                                 <span className="header-icon"><HomeIcon /></span>
                                  <nav id="tp-mobile-menu">
                                       <NavMenu /> 
                                    </nav>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-8 col-6">
                           <div className="tp-header-main-right d-flex align-items-center justify-content-end">
                                 <div className="tp-header-btn d-none d-lg-block">
                                    <Link className="tp-btn" href="https://tidycal.com/sazzadnaasmind/naasmind" target="_blank" rel="noopener noreferrer">Get Started Today</Link>
                                 </div>
                                 
                                 {/* Mobile Menu Toggle */}
                                 <div className="tp-header-hamburger-btn d-lg-none" 
                                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                                    <button className="hamburger-btn">
                                       <span><i className="fa-solid fa-bars"></i></span>
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </header>
            
            {/* Mobile Menu Offcanvas */}
            <div className={`tp-offcanvas-area ${mobileMenuOpen ? 'offcanvas-opened' : ''}`}>
               <div className="tp-offcanvas-wrapper">
                  <div className="tp-offcanvas-close-btn" onClick={() => setMobileMenuOpen(false)}>
                     <button><i className="fa-solid fa-xmark"></i></button>
                  </div>
                  <div className="tp-offcanvas-content">
                     <div className="tp-offcanvas-logo mb-40">
                        <Link href="/">
                           <Image src={Logo2} alt="theme-pure" height={50} width={160} />
                        </Link>
                     </div>
                     <div className="tp-offcanvas-menu">
                        <MobileMenus />
                     </div>
                     <div className="tp-offcanvas-btn mt-40">
                        <Link className="tp-btn w-100 text-center" href="https://tidycal.com/sazzadnaasmind/naasmind" target="_blank" rel="noopener noreferrer">Get Started Today</Link>
                     </div>
                     <div className="tp-offcanvas-contact mt-40">
                        <h4 className="tp-offcanvas-title mb-20">Contact Info</h4>
                        <ul>
                           <li>
                              <i className="fa-solid fa-location-dot"></i>
                              <span>Metro Pillar 267, 1281 Begum Rokeya Avenue, Mirpur, Dhaka</span>
                           </li>
                           <li>
                              <i className="fa-solid fa-envelope"></i>
                              <a href="mailto:info@naasmind.com">info@naasmind.com</a>
                           </li>
                           <li>
                              <i className="fa-solid fa-phone"></i>
                              <a href="tel:+8801772337656">+8801772337656</a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
            <div className={`body-overlay ${mobileMenuOpen ? 'opened' : ''}`} onClick={() => setMobileMenuOpen(false)}></div>
            
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </>
    );
};

export default HeaderOne;