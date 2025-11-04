import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Tags from '../blog/tags';
import Category from '../blog/category';
import SearchArea from '../blog/search-area';
import RecentPost from '../blog/recent-post';
import UserProfile from '../blog/user-profile';
import CommentForm from '@/src/forms/comment-form';


import thumb_1 from "@assets/img/blog/details/blog-1.jpg";
import thumb_2 from "@assets/img/blog/details/blog-2.jpg";
import thumb_3 from "@assets/img/blog/details/blog-3.jpg";

import person_1 from "@assets/img/blog/details/comment-1.jpg";
import person_2 from "@assets/img/blog/details/comment-2.jpg";

import quate from "@assets/img/blog/details/quate.jpg"; 
import RightSymbol from '@/src/svg/right-symbol';
import VideoPopup from '@/src/modals/video-popup';
import ReplyIcon from '@/src/svg/reply-icon';

const single_post_details = {
  thumb: thumb_1,
  date: "Oct 29, 2025",
  comments: "Comments (03)",
  upload_time: "4 min Read",
  title_1: <>Connecting Tech & People: A Human‑Centered Approach</>,
  des_1: <>Naasmind builds functional, intuitive products by aligning modern technology with real human needs. From discovery to launch, the focus stays on clarity, usefulness, and measurable outcomes that teams can adopt with confidence.</>,
  des_2: <>Our work spans strategy, UX, and engineering—modernizing legacy systems, automating workflows, and simplifying complex journeys so people can get more done with less effort.</>,
  des_3: <>By pairing research with rapid delivery, we reduce risk and improve quality. Data‑informed decisions, accessible design, and clean implementation translate into faster releases and better business results.</>,

  quate_icon: quate,
  blockquote: <>Design with empathy. Build with discipline. Measure what matters.</>,

  writer: "Jamil",
  title_2: <>Let our product team guide your next release</>,

  postbox_list: [
    { id: 1, active: "",       title: "Discovery to launch: a clear, repeatable delivery path.",        icon: <RightSymbol /> },
    { id: 2, active: "active", title: "Modernize safely: iterate, integrate, and de-risk change.",      icon: <RightSymbol /> },
    { id: 3, active: "",       title: "Automation that cuts toil and speeds release cycles.",            icon: <RightSymbol /> },
    { id: 4, active: "",       title: "Human centered UX that teams actually adopt.",                   icon: <RightSymbol /> },
    { id: 5, active: "",       title: "Decisions driven by data, not assumptions.",                     icon: <RightSymbol /> },
  ],

  thumb_list: thumb_2,
  video_thumb: thumb_3,
  title_3: <>Behind the Build: From Idea to Impact</>,
  des_4: <>See how a legacy platform became a modern, scalable experience—improved reliability, faster onboarding, and a cleaner workflow for everyday users.</>,

  tags: ["Technology", "Design", "Apps", "Data" , "Web Development"],

  comment_reply: [
    {
      id: 1,
      img: person_1,
      children_cls: "",
      name: "Eleanor Fant",
      date: "July 14, 2025",
      comment: <>Clear, outcome‑focused process. The modernization steps and UX rationale made the impact easy to understand.</>,
      reply_icon: <ReplyIcon />
    },
    {
      id: 2,
      img: person_2,
      children_cls: "children",
      name: "Arif Hasan",
      date: "July 16, 2025",
      comment: <>Loved the emphasis on accessibility and automation—exactly what our team needs for the next release.</>,
    }
  ]
};

const {thumb, date, comments, upload_time, title_1, des_1, des_2, des_3, quate_icon, blockquote, writer, title_2, postbox_list, thumb_list, video_thumb, title_3, des_4, tags, comment_reply}  =  single_post_details
const BlogDetailsPostbox = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <>
            <section className="postbox__area pt-120 pb-100">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-8 col-xl-8 col-lg-8">
                     <div className="postbox__wrapper">
                        <article className="postbox__item format-image mb-50 transition-3">
                           <div className="postbox__thumb m-img">
                              <Image src={thumb} alt="theme-pure" />
                           </div>
                           <div className="postbox__content">
                              <div className="postbox__meta">
                                 <span><i className="fa-light fa-calendar-days"></i>{date}</span>
                                 <span><Link href="#"><i className="fal fa-comments"></i>{comments}</Link></span>
                                 <span><Link href="#"><i className="fa-regular fa-clock"></i>{upload_time}</Link></span>
                              </div>
                              <h3 className="postbox__title">{title_1}</h3>
                              <div className="postbox__text">
                                 <p>{des_1}</p> 
                                    <p>{des_2}</p>
                                    <p>{des_3}</p>
                                 <div className="postbox__blockquote p-relative">
                                    <div className="postbox__blockquote-shape">
                                       <Image src={quate_icon} alt="theme-pure" />
                                    </div>
                                    <blockquote>
                                       <p>{blockquote}</p>
                                       <cite>{writer}</cite>
                                    </blockquote>
                                 </div>
   
                                 <div className="postbox__list">
                                    <h3 className="postbox__list-title">{title_2}</h3>
                                    <div className="row">
                                       <div className="col-xl-7 col-lg-12">
                                          <div className="postbox__list-content">
                                             <ul>
                                                {postbox_list.map((item, i) => 
                                                   <li key={i}><span className={item.active}>{item.icon}
                                                   </span>{item.title}
                                                   </li>
                                                   
                                                )} 
                                             </ul>
                                          </div>
                                       </div>
                                       <div className="col-xl-5 col-lg-12">
                                          <div className="posbox__list-img">
                                             <Image src={thumb_list} alt="theme-pure" />
                                          </div>
                                       </div>
                                    </div>
                                 </div>
   
                                 <div className="postbox__thumb m-img p-relative">
                                    <Image src={video_thumb} alt="theme-pure" />
                                    <div className="tp-video-play play-btn text-center">
                                       <a className="popup-video" 
                                       onClick={() => setIsVideoOpen(true)} 
                                       ><i className="fa-sharp fa-solid fa-play"></i></a>
                                    </div>
                                    <span className="postbox-details-desc-thumb-caption">{title_3} </span>
                                 </div>
                                 <p>{des_4}</p> 

                                 <div className="postbox__details-share-wrapper">
                                    <div className="row">
                                       <div className="col-lg-7">
                                          <div className="postbox__details-tag tagcloud">
                                             <span>Tag:</span>
                                             {tags.map((tag, i) => <Link href="#" key={i}>{tag}</Link>)} 
                                          </div>
                                       </div>
                                       <div className="col-lg-5">
                                          <div className="postbox__details-share text-lg-end">
                                             <span>Share:</span> 
                                             <a href="#"><i className="fa-brands fa-youtube"></i></a>
                                             <a href="#"><i className="fab fa-facebook-f"></i></a>
                                             <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                             <a href="#"><i className="fab fa-twitter"></i></a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>

                              </div>
                           </div>
                        </article>
                        <div className="postbox__comment mb-50">
                           <h3 className="postbox__comment-title">(04) Comment</h3>
                           <ul>
                              {comment_reply.map((comment_reply, index) =>
                                 <li key={index} className={comment_reply?.children_cls}>
                                    <div className="postbox__comment-box p-relative">
                                       <div className="postbox__comment-info d-flex">
                                             <div className="postbox__comment-avater mr-20">
                                                <Image src={comment_reply.img} alt="theme-pure" />
                                             </div>
                                             <div className="postbox__comment-name">
                                                <h5>{comment_reply.name}</h5>
                                                <span className="post-meta">{comment_reply.date}</span>
                                             </div>
                                       </div>
                                       <div className="postbox__comment-text ml-65">
                                          <p>{comment_reply.comment}</p>
                                          {comment_reply.reply_icon &&
                                          <div className="postbox__comment-reply">
                                             <span>
                                                <ReplyIcon /> 
                                                </span>
                                          </div> 
                                          }
                                       </div>
                                    </div>
                                 </li>
                              )} 
                           </ul>
                        </div>
                        <div className="postbox__comment-form">
                           <h3 className="postbox__comment-form-title">Write a comment</h3> 
                           <CommentForm />
                           <p className="ajax-response"></p>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4">
                     <div className="sidebar__wrapper">
                        <UserProfile />
                        <SearchArea />
                        <RecentPost />
                        <Category />
                        <Tags /> 
                     </div>
                  </div>
               </div>
            </div>
         </section>


         <VideoPopup
         isVideoOpen={isVideoOpen}
         setIsVideoOpen={setIsVideoOpen}
         videoId={"EW4ZYb3mCZk"} 
         />
        </>
    );
};

export default BlogDetailsPostbox;