export interface ProjectType {
  title: string;
  img: string;
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
    desc: "allowing businesses to visually interface with large datasets",
    image: "monke",
    tags: ["frontend", "backend"],
    path: "/dev/thinkRF",
  },
  {
    title: "FYELABS Express",
    desc: "streamlining client management",
    image: "monke",
    tags: ["frontend"],
    path: "/dev/fyelabs-express",
  },
  {
    title: "LLIF",
    desc: "bringing actionable data to the medical field",
    image: "monke",
    tags: ["frontend"],
    path: "/dev/llif",
  },
  {
    title: "DirectU",
    desc: "your degree without the hassle",
    image: "monke",
    tags: ["hackathon", "frontend", "backend"],
    path: "/dev/directu",
  },
  {
    title: "Stride",
    desc: "local delivery, optimized",
    image: "monke",
    tags: ["hackathon", "frontend"],
    path: "/dev/stride",
  },
];

export const thinkRF: ProjectType = {
  title: "thinkRF",
  img: "monke",
  links: [],
  stats: {
    tech: "Next.js, Typescript, Rust, Docker, PostgreSQL",
    team: "1 senior frontend developer, 2 backend developers",
    time: "1 month",
  },
  desc: {
    premise:
      "As an enterprise client of my primary company, a spectrum analysis business wanted to bring to their clients a user dashboard that would visualize wireless network data from 25+ countries in real time with interactive maps, configurable tables, and complex, dynamic filtering.",
    work: [
      "Defined the database schema for user configurations",
      "Developed 10+ key features of the dashboard, including interactive map markers with popups, visualization of connections between map markers, insightful data tables incorporating graphs, and filtering functionalities necessitating global state management",
      "Developed RESTful API endpoints with backend-for-frontend patterns to enable the dashboard to retrieve, save, and reset configurations by interacting with a PostgreSQL database",
    ],
    delivery:
      "With my senior developer leaving for vacation during the last week, I took full ownership of the product. I developed and tested all features required for the successful deployment of a minimum viable product to be presented to demo users.",
  },
};

export const fyelabsExpress: ProjectType = {
  title: "FYELABS Express",
  img: "monke",
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
      "Developed organizations within the portal for enterprise clients to share project requests",
    ],
    delivery:
      "I took full ownership over the product and developed 90% of its features. After demoing the project to the company CEO and all senior software developers, the portal was launched at the 2023 Collision Conference in Toronto!",
  },
};
