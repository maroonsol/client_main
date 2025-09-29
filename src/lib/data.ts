export interface Client {
  id: string;
  name: string;
  logo: string;
  category: string;
  website: string;
  description: string;
  projects: Project[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  icon: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  sdescription: string;
  contact: {
    phone: string;
    email: string;
    address: string;
  };
}

export const companyInfo: CompanyInfo = {
  name: "MaroonSol",
  tagline: "Digital Technology Solutions",
  description: "We are a leading digital technology company specializing in custom software development, web applications, and comprehensive digital solutions. Our team of expert developers and designers work tirelessly to deliver innovative, scalable, and user-friendly solutions that drive business growth and success.",
  sdescription: "A leading digital technology company specializing in custom software development and web applications. We deliver innovative, scalable solutions that drive business growth.",
  contact: {
    phone: "+91 9305166411",
    email: "work@maroonsol.com",
    address: "Khairatali, Mittan Chak, Patna, Patna Sadar, Bihar, India, 804453"
  }
};

export const services: Service[] = [
  {
    id: "website-development",
    title: "Website Development",
    description: "Custom websites built with modern technologies and responsive design",
    features: [
      "Responsive Design",
      "SEO Optimization",
      "Fast Loading",
      "Mobile Friendly",
      "Admin Panel",
      "Content Management"
    ],
    icon: "Globe"
  },
  {
    id: "custom-software",
    title: "Custom Software",
    description: "Tailored software solutions designed to meet your specific business needs",
    features: [
      "Custom Development",
      "Scalable Architecture",
      "Database Design",
      "API Integration",
      "Security Features",
      "Maintenance Support"
    ],
    icon: "Code"
  },
  {
    id: "online-software",
    title: "Online Software",
    description: "Cloud-based software solutions accessible from anywhere, anytime",
    features: [
      "Cloud Hosting",
      "Real-time Collaboration",
      "Data Backup",
      "Multi-user Access",
      "API Integration",
      "24/7 Availability"
    ],
    icon: "Cloud"
  },
  {
    id: "prebuilt-software",
    title: "Prebuilt Software",
    description: "Ready-to-use software solutions for common business requirements",
    features: [
      "Quick Deployment",
      "Cost Effective",
      "Proven Solutions",
      "Easy Customization",
      "Training Support",
      "Regular Updates"
    ],
    icon: "Package"
  }
];

export const clients: Client[] = [
  {
    id: "aoac",
    name: "Allahabad Organic Agricultural Cooperative Society Ltd",
    logo: "/client/logo/aoac.png",
    category: "Agriculture",
    website: "https://aoac.in/",
    description: "A leading organic agriculture cooperative promoting sustainable farming practices and rural development in Prayagraj, U.P.",
    projects: [
      {
        id: "ecommerce-platform",
        title: "E-commerce Web Application",
        description: "A comprehensive e-commerce platform with dynamic payment and shipping options",
        features: [
          "Dynamic Payment Gateway Integration",
          "Flexible Shipping Options",
          "Product Catalog Management",
          "Order Tracking System",
          "Customer Account Management",
          "Inventory Management"
        ],
        technologies: ["React", "Node.js", "MongoDB", "Payment Gateway", "Admin Panel"],
        icon: "ShoppingCart"
      },
      {
        id: "admin-panel",
        title: "Role-based Admin Panel",
        description: "A fully self-controllable admin panel with comprehensive role-based features",
        features: [
          "User Role Management",
          "Content Management System",
          "Analytics Dashboard",
          "Order Management",
          "Customer Support Tools",
          "Report Generation"
        ],
        technologies: ["React", "Node.js", "JWT Authentication", "Role-based Access"],
        icon: "Settings"
      },
      {
        id: "accounting-software",
        title: "Integrated Accounting Software",
        description: "Complete accounting solution integrated within the admin panel",
        features: [
          "Financial Reporting",
          "Invoice Management",
          "Expense Tracking",
          "Tax Calculations",
          "Profit/Loss Analysis",
          "Bank Reconciliation"
        ],
        technologies: ["Node.js", "Financial APIs", "Database Integration"],
        icon: "Calculator"
      }
    ]
  },
  {
    id: "tarumitra",
    name: "Tarumitra",
    logo: "/client/logo/tarummitra.png",
    category: "Environment",
    website: "https://footprint.org.in/",
    description: "An environmental organization with UN Special Consultative Status, dedicated to environmental protection and youth engagement.",
    projects: [
      {
        id: "dynamic-website",
        title: "Dynamic Secure Website",
        description: "A secure, dynamic website with comprehensive admin panel for content management",
        features: [
          "Secure Content Management",
          "Blog Management System",
          "Newsletter Integration",
          "Resource Library",
          "Event Management",
          "Contact Forms"
        ],
        technologies: ["React", "Node.js", "Security Features", "CMS"],
        icon: "Shield"
      },
      {
        id: "intern-management",
        title: "Intern Management System",
        description: "Comprehensive system for managing, assigning, and tracking intern work progress",
        features: [
          "Project Assignment",
          "Progress Tracking",
          "Collaboration Tools",
          "Meeting Scheduler",
          "Document Sharing",
          "Performance Analytics"
        ],
        technologies: ["React", "Real-time Updates", "File Management", "Calendar Integration"],
        icon: "Users"
      }
    ]
  },
  {
    id: "rewalk-clinic",
    name: "Rewalk Clinic",
    logo: "/client/logo/rewalk.png",
    category: "Health",
    website: "https://www.rewalkclinic.com/",
    description: "Specialized clinic providing state-of-the-art orthotics and prosthetics solutions for enhanced mobility and quality of life.",
    projects: [
      {
        id: "business-website",
        title: "Dynamic Business Website",
        description: "Comprehensive website for all business operations including appointment booking",
        features: [
          "Appointment Booking System",
          "Patient Portal",
          "Service Catalog",
          "Online Payments",
          "Patient Records",
          "Communication Tools"
        ],
        technologies: ["React", "Booking System", "Payment Integration", "Patient Management"],
        icon: "Calendar"
      },
      {
        id: "admin-operations",
        title: "Admin Operations Panel",
        description: "Simplified admin panel for managing all website operations and appointments",
        features: [
          "Appointment Management",
          "Patient Database",
          "Service Management",
          "Staff Scheduling",
          "Report Generation",
          "Communication Center"
        ],
        technologies: ["Admin Panel", "Database Management", "Scheduling System"],
        icon: "Clipboard"
      },
      {
        id: "accounting-system",
        title: "Integrated Accounting System",
        description: "Complete accounting solution integrated with the admin panel",
        features: [
          "Financial Management",
          "Invoice Generation",
          "Payment Tracking",
          "Expense Management",
          "Financial Reports",
          "Tax Management"
        ],
        technologies: ["Accounting Software", "Financial APIs", "Report Generation"],
        icon: "DollarSign"
      },
      {
        id: "pressure-analysis",
        title: "Foot Pressure Analysis Software",
        description: "Specialized software for foot pressure analysis integrated with admin panel",
        features: [
          "Pressure Mapping",
          "Analysis Reports",
          "Patient History",
          "Comparison Tools",
          "Export Functionality",
          "Integration with Records"
        ],
        technologies: ["Data Analysis", "Medical Software", "Integration APIs"],
        icon: "Activity"
      }
    ]
  },
  {
    id: "hilsa-pictures",
    name: "Hilsa Pictures",
    logo: "/client/logo/hilsa.png",
    category: "Photography",
    website: "https://hilsapictures.com/",
    description: "Professional photography services specializing in capturing life's precious moments with artistic excellence.",
    projects: [
      {
        id: "animated-website",
        title: "Animated Dynamic Website",
        description: "Beautiful animated website with dynamic content and comprehensive admin panel",
        features: [
          "Smooth Animations",
          "Dynamic Content",
          "Gallery Management",
          "Portfolio Showcase",
          "Contact Forms",
          "SEO Optimization"
        ],
        technologies: ["React", "Animation Libraries", "Dynamic CMS", "SEO Tools"],
        icon: "Camera"
      },
      {
        id: "customer-profiling",
        title: "Customer Profiling System",
        description: "Comprehensive customer profiling and photo sharing system",
        features: [
          "Customer Profiles",
          "Photo Sharing",
          "Download Management",
          "Client Galleries",
          "Order Tracking",
          "Communication Tools"
        ],
        technologies: ["Customer Management", "File Sharing", "Gallery System"],
        icon: "User"
      },
      {
        id: "photo-sharing",
        title: "Photo Sharing Platform",
        description: "Integrated platform for sharing videos, images, and data with customers",
        features: [
          "Secure File Sharing",
          "Download Options",
          "Preview Functionality",
          "Bulk Operations",
          "Access Control",
          "Mobile Responsive"
        ],
        technologies: ["File Management", "Security", "Mobile Optimization"],
        icon: "Share"
      }
    ]
  }
];

export const categories = [
  "All",
  "Agriculture",
  "Environment",
  "Health",
  "Photography"
];

export const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Clients", href: "/clients" },
  { name: "Contact", href: "/contact" }
];

export const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Our Clients", href: "/clients" },
  { name: "Contact Us", href: "/contact" }
];

export const socialLinks = [
  { name: "LinkedIn", href: "#", icon: "Linkedin" },
  { name: "Twitter", href: "#", icon: "Twitter" },
  { name: "Facebook", href: "#", icon: "Facebook" },
  { name: "Instagram", href: "#", icon: "Instagram" }
];
