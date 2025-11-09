const service_details_data = [
  {
    id: 1,
    slug: "managed-it-services",
    title: "Managed IT Services",
    breadcrumb: "Managed IT Services",
    intro: "Focus on your business, not your technology. Our Managed IT Services provide comprehensive, proactive management of your entire IT infrastructure for a predictable flat monthly fee, allowing businesses in Bangladesh to operate with maximum efficiency and minimal downtime.",
    benefitSubheading: "From Reactive Fixes to Proactive Growth",
    benefitSummary: "Stop waiting for things to break. Our proactive approach means we monitor your systems 24/7, resolving issues before they impact your operations, turning your technology from a liability into a strategic asset for growth.",
    features: [
      "24/7 Proactive Monitoring: We watch your systems around the clock to prevent problems.",
      "Unlimited IT Support: Get help from our expert local engineers whenever you need it.",
      "Predictable Monthly Cost: One flat fee covers everything, making budgeting simple.",
      "Strategic IT Planning: We provide regular reviews to ensure your tech supports your goals."
    ],
    faqs: [
      {
        question: "What is included in your Managed IT Service?",
        answer: "Our service is all-inclusive, covering 24/7 monitoring, unlimited remote and on-site support, cybersecurity management, data backup oversight, and strategic IT consulting to help you plan for the future."
      },
      {
        question: "Is this more cost-effective than hiring an IT person?",
        answer: "For most small to medium-sized businesses, yes. You gain access to an entire team of certified experts with diverse skills for less than the salary of one senior in-house IT employee, without the overhead."
      },
      {
        question: "How do you get started with a new client?",
        answer: "We begin with a thorough audit of your current IT infrastructure. This allows us to identify immediate risks and create a seamless, customized onboarding plan that minimizes any disruption to your business."
      }
    ]
  },
  {
    id: 2,
    slug: "cybersecurity-solutions",
    title: "Cybersecurity Solutions",
    breadcrumb: "Cybersecurity Solutions",
    intro: "In today's digital landscape, a single breach can be devastating. Our Cybersecurity Solutions provide multi-layered protection for your business, defending your critical data, financial information, and reputation from the growing number of sophisticated cyber threats.",
    benefitSubheading: "Building Your Digital Fortress",
    benefitSummary: "Don't leave your business exposed. We implement a proactive, defense-in-depth strategy that goes beyond basic antivirus, actively monitoring for threats and ensuring you meet compliance standards.",
    features: [
      "24/7 Threat Monitoring: We actively hunt for and neutralize threats around the clock.",
      "Advanced Firewalls: We manage and configure enterprise-grade firewalls for robust protection.",
      "Employee Security Training: We empower your team to be the first line of defense.",
      "Compliance Management: We help ensure your security meets industry and regulatory standards."
    ],
    faqs: [
      {
        question: "We're a small business. Are we really a target?",
        answer: "Yes. Hackers often target SMEs because they typically have fewer security measures in place. A successful attack on a small business can be incredibly damaging, making proactive protection essential for everyone."
      },
      {
        question: "Isn't our standard antivirus software enough?",
        answer: "Unfortunately, no. Standard antivirus can't protect against modern threats like phishing, ransomware, and zero-day exploits. A comprehensive cybersecurity strategy layers multiple tools and protocols for true protection."
      },
      {
        question: "What happens if we do experience a breach?",
        answer: "Our service includes an incident response plan. We act immediately to isolate the threat, mitigate damage, remove the malicious actor from your network, and restore your systems as quickly as possible."
      }
    ]
  },
  {
    id: 3,
    slug: "cloud-backup-recovery",
    title: "Cloud Backup & Recovery",
    breadcrumb: "Cloud Backup & Recovery",
    intro: "Your data is your most valuable asset; protecting it is not optional. Our Cloud Backup & Recovery service automates the protection of your critical files, ensuring they are securely stored and can be restored in minutes from any disaster.",
    benefitSubheading: "Automated, Secure, and Instant Peace of Mind",
    benefitSummary: "Manual backups are prone to failure and human error. Our automated solution works silently in the background, encrypting and backing up your data to a secure, off-site cloud server for guaranteed protection.",
    features: [
      "Automated Backups: 'Set it and forget it' protection for your critical data.",
      "Military-Grade Encryption: Your data is encrypted both in transit and at rest.",
      "Rapid Data Restoration: Recover single files or entire systems in just a few clicks.",
      "Disaster-Proof Storage: Your data is safe from local disasters like fire, flood, or theft."
    ],
    faqs: [
      {
        question: "How is this different from Dropbox or Google Drive?",
        answer: "Those are file-syncing services, not true backup solutions. Our service is designed for business continuity, capable of backing up entire systems, databases, and complex applications, with robust version history for recovery."
      },
      {
        question: "How secure is our data in the cloud?",
        answer: "Extremely secure. We use data centers that meet the highest international security standards (SOC 2, ISO 27001). Your data is encrypted with a key that only you have access to."
      },
      {
        question: "How quickly can we get our data back after a failure?",
        answer: "Recovery times are incredibly fast. For individual files, it can take seconds. For a full server or system recovery, the time depends on the data volume but is significantly faster than traditional recovery methods."
      }
    ]
  },
  {
    id: 4,
    slug: "data-backup-restoration",
    title: "Data Backup & Restoration",
    breadcrumb: "Data Backup & Restoration",
    intro: "A proper backup is only useful if it's part of a comprehensive strategy. We design and implement robust Data Backup & Restoration plans that ensure your business can survive any unforeseen event, from hardware failure to a major disaster.",
    benefitSubheading: "A Complete Business Continuity Strategy",
    benefitSummary: "This service is more than just technology; it's a strategic plan. We work with you to define recovery objectives (RTO/RPO) and create a tailored plan that ensures operational continuity.",
    features: [
      "Hybrid Backup Solutions: We combine the speed of on-site backups with the security of the cloud.",
      "Business Continuity Planning: We help you create a roadmap to navigate any disaster.",
      "Regular Backup Testing: We regularly test your backups to guarantee they are recoverable.",
      "Server Virtualization: We can spin up a virtual copy of your server in minutes to avoid downtime."
    ],
    faqs: [
      {
        question: "We already have cloud backup. Why do we need this?",
        answer: "Cloud backup protects your data. This service protects your operations. We build the strategic plan and implement the technology (like on-site backups) that allows you to use that data to get back to business immediately."
      },
      {
        question: "What are RTO and RPO?",
        answer: "Recovery Time Objective (RTO) is how quickly you need to be back up and running. Recovery Point Objective (RPO) is how much data you can afford to lose. We help you define these and build a plan to meet them."
      },
      {
        question: "How often are backups tested?",
        answer: "This is determined by your business continuity plan. For most clients, we perform automated verification daily and conduct full restoration drills on a quarterly or semi-annual basis to ensure 100% readiness."
      }
    ]
  },
  {
    id: 5,
    slug: "voip-business-phones",
    title: "VoIP Business Phones",
    breadcrumb: "VoIP Business Phones",
    intro: "Upgrade your communication with a modern, flexible, and cost-effective VoIP Business Phone system. Our solution delivers crystal-clear call quality and powerful features that connect your team and serve your customers, whether in the office or working remotely.",
    benefitSubheading: "Communication Without Limits",
    benefitSummary: "Break free from the limitations and high costs of traditional landlines. Our VoIP system runs over your internet connection, providing greater flexibility, enterprise-level features, and significant monthly savings.",
    features: [
      "Work From Anywhere: Take your office extension with you on your laptop or mobile phone.",
      "Enterprise Features: Get auto-attendants, call recording, and voicemail-to-email standard.",
      "Lower Communication Costs: Drastically reduce your monthly phone bill and eliminate line rental fees.",
      "Seamless Scalability: Add or remove users in minutes without needing a technician."
    ],
    faqs: [
      {
        question: "Is the call quality as good as a landline?",
        answer: "Yes. With a stable internet connection, the call quality of modern VoIP systems is indistinguishable from a traditional landline, and in many cases, it is even clearer due to HD Voice technology."
      },
      {
        question: "Is it difficult to switch to a VoIP system?",
        answer: "Not with us. We manage the entire process, including porting your existing phone numbers, setting up the new phones, and training your staff, ensuring a smooth and seamless transition."
      },
      {
        question: "Can we keep our existing business phone numbers?",
        answer: "Absolutely. We handle the number porting process for you, so you can transition to our modern VoIP system without having to change the phone numbers your customers already know."
      }
    ]
  },
  {
    id: 6,
    slug: "it-consulting",
    title: "Strategic IT Consulting",
    breadcrumb: "IT Consulting",
    intro: "Make technology your competitive advantage, not just an expense. Our IT Consulting services provide the strategic guidance you need to make smart, cost-effective technology decisions that align perfectly with your long-term business goals.",
    benefitSubheading: "A Technology Roadmap for Your Future",
    benefitSummary: "We help you see the bigger picture. Our experts assess your current infrastructure and business objectives to create a clear, actionable technology roadmap that drives efficiency, manages risk, and maximizes your ROI.",
    features: [
      "Technology Roadmapping: We create a long-term plan for your IT investments and upgrades.",
      "Budgeting & Cost Control: We help you optimize your IT spending for maximum value.",
      "Digital Transformation: We guide you in leveraging new tech like cloud and automation.",
      "Vendor Management: We act as your expert liaison with your other technology vendors."
    ],
    faqs: [
      {
        question: "Is IT consulting only for large enterprises?",
        answer: "Not at all. Strategic guidance is even more critical for SMEs where every investment counts. We provide scalable consulting that helps businesses of all sizes make smarter decisions and avoid costly mistakes."
      },
      {
        question: "What is the main deliverable of a consulting project?",
        answer: "The primary deliverable is a comprehensive Technology Roadmap. This document typically includes a full audit of your current state, a list of prioritized recommendations, budget forecasts, and a clear timeline for implementation."
      },
      {
        question: "How does the consulting process work?",
        answer: "We start with a deep-dive discovery session to understand your business, pain points, and goals. We then perform a technical assessment, analyze our findings, and present you with a strategic roadmap for discussion and approval."
      }
    ]
  },
  {
    id: 7,
    slug: "product-development",
    title: "Custom Product Development",
    breadcrumb: "Product Development",
    intro: "Off-the-shelf solutions can't solve unique business challenges. Our Product Development service turns your vision into a reality, creating custom software and mobile apps that streamline operations and give you a powerful competitive advantage.",
    benefitSubheading: "Building Your Competitive Edge",
    benefitSummary: "Gain a powerful market advantage with technology built specifically for you. We manage the entire lifecycle, from strategy and design to engineering and launch, ensuring the final product delivers measurable business impact.",
    features: [
      "Custom Software Development: We build robust software tailored to your exact workflows.",
      "Mobile App Development: We create intuitive and powerful iOS and Android apps for your team or customers.",
      "UI/UX Design: We focus on creating a human-centered design that is easy to use and adopt.",
      "Full Lifecycle Management: We partner with you from the initial idea to post-launch support."
    ],
    faqs: [
      {
        question: "How much does it cost to build a custom application?",
        answer: "The cost varies widely based on complexity, features, and platforms. We begin with a detailed discovery phase to define the scope and can then provide a transparent and accurate project proposal."
      },
      {
        question: "How long does the development process take?",
        answer: "A simple application might take 2-3 months, while a more complex software platform could take a year or more. We use an agile development methodology, delivering functional pieces in 'sprints' so you see progress early and often."
      },
      {
        question: "Do we own the intellectual property and source code?",
        answer: "Yes, absolutely. Upon final payment, you own 100% of the intellectual property and the complete source code for the product we build for you. Our partnership is built on trust and transparency."
      }
    ]
  },
  {
    id: 8,
    slug: "cloud-migration-services",
    title: "Cloud Migration Services",
    breadcrumb: "Cloud Migration Services",
    intro: "Seamlessly move your servers and applications to the cloud for enhanced scalability and efficiency. Our Cloud Migration Services ensure a smooth transition with minimal downtime.",
    benefitSubheading: "Unlock the Power of Cloud Computing",
    benefitSummary: "Transform your infrastructure with secure, scalable cloud solutions that reduce costs and improve performance.",
    features: [
      "Zero-Downtime Migration: We plan and execute migrations to minimize business disruption.",
      "Cloud Architecture Design: We build scalable and secure cloud infrastructure tailored to your needs.",
      "Cost Optimization: We help you choose the right cloud services to maximize ROI.",
      "Ongoing Cloud Management: We provide continuous monitoring and optimization post-migration."
    ],
    faqs: [
      {
        question: "How long does a cloud migration take?",
        answer: "Migration timelines vary based on the complexity of your infrastructure. A simple migration might take a few weeks, while larger enterprise migrations can take several months. We provide a detailed timeline during our assessment phase."
      },
      {
        question: "Will our data be secure in the cloud?",
        answer: "Yes. We implement enterprise-grade security measures including encryption, access controls, and compliance with international standards to ensure your data remains protected."
      },
      {
        question: "What if we need to scale up or down?",
        answer: "That's the beauty of cloud services. You can easily scale resources up or down based on demand, paying only for what you use. We help you set up auto-scaling and monitor usage to optimize costs."
      }
    ]
  }
];

// Sidebar service menu data
export const sidebar_services = [
  { id: 1, title: "Managed IT Services", slug: "managed-it-services" },
  { id: 2, title: "Cybersecurity Solutions", slug: "cybersecurity-solutions" },
  { id: 3, title: "Cloud Backup & Recovery", slug: "cloud-backup-recovery" },
  { id: 4, title: "Data Backup & Restoration", slug: "data-backup-restoration" },
  { id: 5, title: "VoIP Business Phones", slug: "voip-business-phones" },
  { id: 6, title: "IT Consulting", slug: "it-consulting" },
  { id: 7, title: "Product Development", slug: "product-development" },
  { id: 8, title: "Cloud Migration Services", slug: "cloud-migration-services" }
];

export default service_details_data;
