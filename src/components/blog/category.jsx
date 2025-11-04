import Link from 'next/link';
import React from 'react';

const category_data = [
  { id: 1, category: "Technology", items: "08" },
  { id: 2, category: "Business",   items: "06" },
  { id: 3, category: "Innovation", items: "05" },
  { id: 4, category: "Strategy",   items: "04" },
  { id: 5, category: "People & Culture", items: "03" },
];

const Category = () => {
    return (
        <>
            <div className="sidebar__widget mb-30">
                <h3 className="sidebar__widget-title">Category</h3>
                <div className="sidebar__widget-content">
                    <ul>
                        {category_data.map((item, i)  => <li key={i}><Link href="/blog">{item.category}<span>{item.items}</span></Link></li>)}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Category;