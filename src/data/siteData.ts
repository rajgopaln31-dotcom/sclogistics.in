export interface NavItem {
  label: string;
  path: string;
}

export const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Solutions", path: "/solutions" },
  { label: "Services", path: "/services" },
  { label: "Infrastructure", path: "/infrastructure" },
  { label: "Contact Us", path: "/contact" },
];

export const contactInfo = {
  phoneTop: "+91-9000202828",
  phoneTopLink: "tel:+91-9000202828",
  email: "adinarayana@sclogistics.in",
  checkpost: "Yousufguda Checkpost, Hyderabad 500045",
  officeAddress:
    "Road Number 49, Plot No 961, Swamy Ayyappa Society, Mega Hills, Madhapur, Hyderabad, Telangana-500081",
  officePhones: ["+91 40-45166065", "+91-94412 02828"],
};

export interface InfoCard {
  title: string;
  text: string;
}

export const homeCards: InfoCard[] = [
  {
    title: "Our Vision",
    text: "At SRI CHINIMILLI LOGISTICS PVT LTD is to become a leader in the Employees Transport Solution industry. We will achieve this by prioritizing our customers, people, growth, innovation, and efficiency, which are all key drivers of our bottom line success.",
  },
  {
    title: "Our Values",
    text: "At SRI CHINIMILLI LOGISTICS PVT LTD, are a cornerstone of our organization. Our employees are dedicated to upholding these values in order to fulfil our vision of becoming a leader in the Employees Transport Solutions industry.",
  },
  {
    title: "Our Commitment",
    text: "At this company is to provide value to our corporate clients, customers, and anyone who looks to us for leadership or support. We are highly knowledgeable and passionate about what makes each of our brands unique and powerful.",
  },
  {
    title: "Our Integrity",
    text: "At the heart of our business decisions and professional relationships. We uphold this value by fostering a culture of open communication and teamwork, which supports our commitment to doing what is right. In addition, we recognize the crucial role that diversity among our employees, suppliers, and partners plays in our ongoing success.",
  },
  {
    title: "Our Responsibility",
    text: "At SRI CHINIMILLI LOGISTICS PVT LTD is to become a leader in the Employees Transport Solution industry. We will achieve this by prioritizing our customers, people, growth, innovation, and efficiency, which are all key drivers of our bottom line success.",
  },
];

export const safetyText =
  "To ensure the safety of female employees, our drivers and supervisors are not allowed to pick them up first or drop them off last between 20:00 Hrs & 06:00 Hrs IST. If it is necessary for a female employee to be picked up or dropped off during this time, a co-male employee or company security personnel must accompany her in the cab and provide an escort until she reaches her destination. We at SCL ensure to inform the Transportation User about any changes in vehicle details, including the driver or the vehicle, beyond the information shared via SMS. Our drivers and staff are trained to maintain professionalism, efficiency, and respect towards our associates. Additionally, we have instructed them not to engage in any personal discussions with our Transportation Users.";

export const safetyFeatures: string[] = [
  "Online Tracking",
  "Efficient Transportation",
  "Support 24/7",
  "Consistency",
];

export const homeGalleryImages: string[] = [
  "one.jpg",
  "four.jpg",
  "gallery22.jpg",
  "two.jpg",
  "six.jpg",
  "gallery3.jpg",
  "three.jpg",
  "five.jpg",
];

export const footerGalleryImages: string[] = [
  "IMG_8782-copy-scaled.jpg",
  "shuttle.jpg",
  "emp-e1725525792611.jpg",
  "IMG_8844-copy-scaled.jpg",
  "emp1.jpg",
  "carss.jpg",
  "six.jpg",
  "four.jpg",
  "2.jpg",
  "one.jpg",
  "five.jpg",
  "three.jpg",
];

export const clientLogos: string[] = [
  "gep2.jpg",
  "fpl.jpg",
  "adp.jpg",
  "micro.jpg",
  "llyod.jpg",
  "ilen.jpg",
  "ryan.png",
  "dsv.png",
  "thermo.png",
  "npci2.png",
  "zoe.png",
  "citra.png",
];

export interface BlogPost {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    category: "Uncategorized",
    title: "Hello world!",
    excerpt: "Welcome to WordPress. This is your first post. Edit or delete it,",
    date: "August 10, 2023",
    author: "sclogistics",
  },
  {
    category: "Logistics",
    title: "Be Smart About Packaging, Product Design",
    excerpt:
      "We have a proven record of best result of building and reputable",
    date: "February 26, 2022",
    author: "sclogistics",
  },
  {
    category: "Transport",
    title: "Drivers Deliver Much More Than Products",
    excerpt:
      "We have a proven record of best result of building and reputable",
    date: "February 26, 2022",
    author: "sclogistics",
  },
];
