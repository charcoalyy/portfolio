export interface ProjectType {
  title: string;
  bg: string;
  imgDir: string;
  imgs: string[];
  links: {
    label: string;
    link: string;
  }[];
  stats: {
    time: string;
    tech: string;
    team: string;
  };
  desc: { [key: string]: string | string[] };
}

export const thumbnails = [
  {
    title: "thinkRF",
    desc: "Allowing businesses to visually interface with large datasets",
    image: "dev/thinkrf/home",
    tags: ["frontend", "backend"],
    path: "/dev/thinkRF",
  },
  {
    title: "FYELABS Express",
    desc: "Streamlining client management",
    image: "dev/fyelabs-express/landing",
    tags: ["frontend"],
    path: "/dev/fyelabs-express",
  },
  {
    title: "LLIF",
    desc: "Bringing actionable data to the medical field",
    image: "dev/llif/data",
    tags: ["frontend"],
    path: "/dev/llif",
  },
  {
    title: "DirectU",
    desc: "Your degree without the hassle",
    image: "dev/directu/start",
    tags: ["hackathon", "frontend", "backend"],
    path: "/dev/directu",
  },
  {
    title: "Stride",
    desc: "Local delivery, optimized",
    image: "dev/stride/ui1",
    tags: ["hackathon", "frontend"],
    path: "/dev/stride",
  },
];

export const thinkRF: ProjectType = {
  title: "thinkRF",
  bg: "https://www.grupoelecnor.com/storage/media/files/shares/noticias/32-sistema-de-transmision-cantareira-brasil.jpg",
  imgDir: "thinkrf",
  imgs: ["home", "filter", "login"],
  links: [{ label: "Client", link: "https://thinkrf.com/" }],
  stats: {
    tech: "Next.js, Typescript, Rust, Docker, PostgreSQL",
    team: "1 senior frontend developer, 2 backend developers",
    time: "1 month",
  },
  desc: {
    premise:
      "As an enterprise client of my primary company, a spectrum analysis business wanted to bring to their clients a user dashboard that would visualize wireless network data  in real time with interactive maps, configurable tables, and complex, dynamic filtering.",
    work: [
      "Defined the database schema for user configurations",
      "Developed 10+ key features of the dashboard, including interactive map markers with popups, visualization of connections between map markers, insightful data tables incorporating graphs, and filtering functionalities necessitating global state management",
      "Integrated the MapTiler API to enable real-time visualization of RF spectrum network data from 25+ countries",
      "Developed RESTful API endpoints with backend-for-frontend patterns to enable the dashboard to retrieve, save, and reset configurations by interacting with a PostgreSQL database",
    ],
    delivery:
      "With my senior developer leaving for vacation during the last week, I took full ownership of the product. I developed and tested all features required for the successful deployment of a minimum viable product to be presented to demo users.",
  },
};

export const fyelabsExpress: ProjectType = {
  title: "FYELABS Express",
  bg: "https://farm2.staticflickr.com/1973/30837851047_48ccb6d576_b.jpg",
  imgDir: "fyelabs-express",
  imgs: ["landing", "form1", "form2", "create", "pay", "project"],
  links: [{ label: "Live", link: "https://express.fyelabs.com/" }],
  stats: {
    tech: "Next.js, Typescript",
    team: "3 backend developers",
    time: "1 month",
  },
  desc: {
    premise:
      "The product development company I was interning at wanted a web portal to streamline project requests to cut down the administrative labour required from project managers, reduce inconsistency in project requirement definition, and cut down meeting time.",
    work: [
      "Consulted with company CEO to devise and develop a multi-page, user-friendly form that would cover all necessary parameters for minimum project definition",
      "Developed a real time chat function for clients and project managers",
      "Integrated the Stripe API to securely store and manage client payment information",
      "Developed organizations within the portal for enterprise clients to share project requests",
    ],
    delivery:
      "I took full ownership over the product and developed 90% of its features. After demoing the project to the company CEO and all senior software developers, the portal was launched at the 2023 Collision Conference in Toronto!",
  },
};

export const llif: ProjectType = {
  title: "LLIF Healthcare",
  bg: "https://impeccabuild.com.au/wp-content/uploads/2020/07/Medical-Clinic-Interior-Design-Ideas-ImpeccaBuild-1200x675.jpg",
  imgDir: "llif",
  imgs: ["data", "insights"],
  links: [{ label: "Client", link: "https://www.llifhealthcare.com/" }],
  stats: {
    tech: "Next.js, Typescript",
    team: "1 senior frontend developer",
    time: "3 weeks",
  },
  desc: {
    premise:
      "As an enterprise client of my primary company, a healthcare startup wanted to develop a user dashboard consolidating aggregated physician/hospital data and displaying insights and analytics to better inform high-level physician decisions.",
    work: "I conceptualized and development all features of the frontend product, including a custom UI component library and data visualization tools.",
    delivery:
      "After demoing the project to the startup founders, we were able to successfully ship the minimum viable product in a shorter timeframe than originally anticipated!",
  },
};

export const directu: ProjectType = {
  title: "DirectU",
  bg: "https://static.designboom.com/wp-content/uploads/2020/08/kazuyo-sejima-japan-women-university-library-tokyo-designboom-1800b.jpg",
  imgDir: "directu",
  imgs: ["start", "form1", "form2", "form3", "dashboard", "side1", "side2"],
  links: [
    { label: "Demo", link: "https://directu.onrender.com/" },
    {
      label: "Devpost",
      link: "https://devpost.com/software/untitled-project-84yezbhn7asu",
    },
  ],
  stats: {
    tech: "React, Typescript, Flask, Python, MongoDB, Cohere",
    team: "2 backend developers, 1 frontend developer & UX designer",
    time: "36 hours",
  },
  desc: {
    premise:
      "As part of Hack the North 2023, we tackled postsecondary course selection. Comparing past student course reviews scraped from the internet against a user's personalized profile, we assigned scores to each course to determine the ones best fit into the user's 4-year degree, optimized to their goals and learning preferences.",
    work: [
      "Took on a leadership role to define project scope, user flow, requirements, and architecture",
      "Spearheaded visual design and frontend development of the user interface with Figma and React, including delegating tasks to another frontend developer and implementing all key product features",
      "Developed all API endpoints with Flask, enabling communication between our frontend, backend, and database",
      "Deployed the frontend and backend server to a staging environment for live demos alongside defining CI/CD practices for future work on the project",
    ],
    delivery:
      "After demoing to two pairs of judges, our team took home the number one Best Use of Cohere out of 248 participating teams at the hackathon!",
  },
};

export const stride: ProjectType = {
  title: "Stride",
  bg: "https://www.fedex.com/content/dam/fedex/us-united-states/NNC/images/2018/Q4/NNC_Hero_06434201_V2_1142389920.jpg",
  imgDir: "stride",
  imgs: [
    "ui1",
    "ui2",
    "ui3",
    "slide1",
    "slide2",
    "slide3",
    "slide4",
    "slide5",
    "slide6",
  ],
  links: [
    {
      label: "Devpost",
      link: "https://devpost.com/software/placeholder-hatmfc",
    },
  ],
  stats: {
    tech: "React, Typescript, Node.js",
    team: "2 backend developers, 1 UX/UI designer",
    time: "36 hours",
  },
  desc: {
    premise:
      "As part of Hack the 6ix 2023, we tackled inefficient delivery. Due to packages being indiscriminately sent to packaging centres regardless of distance to the customer, local deliveries take longer than necessary. We built an API for e-commerce platforms to (a) calculate viability of local delivery and (b) assign local drivers to the task, UberEats-style. We also built a web app to allow buyers to track their packages in real time and interface with drivers.",
    work: [
      "Took a leadership role to define project scope, requirements, and architecture",
      "Developed the user interface independently with React, translating all wireframes with full faith in under 36 hours",
      "Leveraged the Google Maps API and managed backend APIs to pinpoint driver location and driving path in real time",
    ],
    delivery:
      "After we deployed our project with Google Cloud, I led the project presentation to 6 industry professional judges to showcase our results!",
  },
};
