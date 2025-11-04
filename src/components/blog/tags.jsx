import Link from 'next/link';
import React from 'react';

const tags_data = [
  { id: 1, tag: "digital-transformation", Link: "#" },
  { id: 2, tag: "automation",             Link: "#" },
  { id: 3, tag: "cloud",                  Link: "#" },
  { id: 4, tag: "ai-ml",                  Link: "#" },
  { id: 5, tag: "data-analytics",         Link: "#" },
  { id: 6, tag: "productivity",           Link: "#" },
  { id: 7, tag: "human-centered-design",  Link: "#" },
  { id: 8, tag: "devops",                 Link: "#" },
  { id: 9, tag: "integration",            Link: "#" },
  { id:10, tag: "security",               Link: "#" },
];


const Tags = () => {
    return (
        <>
            <div className="sidebar__widget mb-30">
                <h3 className="sidebar__widget-title">Tags</h3>
                <div className="sidebar__widget-content">
                    <div className="tagcloud">
                        {tags_data.map((item, i) =>  <Link href="#" key={i}>{item.tag}</Link>)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tags;