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

export interface ProjectType {
  title: string;
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

export const thinkRF: ProjectType = {
  title: "thinkRF",
  links: [],
  stats: {
    time: "1 month",
    tech: "Next.js, Typescript, Rust, Docker, PostgreSQL",
    team: "1 senior frontend developer, 2 backend developers",
  },
  desc: {
    premise:
      "A spectrum analysis company was seeking to bring to their clients a user dashboard that would visualize wireless network data from 25+ countries in real time with interactive maps, configurable tables, and complex, dynamic filtering.",
    work: [
      "defined the database schema for user configurations",
      "developed 10+ key features of the dashboard, including interactive map markers with popups, visualization of connections between map markers, insightful data tables incorporating graphs, and filtering functionalities necessitating global state management",
      "developed RESTful API endpoints with backend-for-frontend patterns to enable the dashboard to retrieve, save, and reset configurations by interacting with a PostgreSQL database",
    ],
    delivery:
      "With my senior developer leaving for vacation during the last week, I took full ownership of the product. I developed and tested all features required for the successful deployment of a minimum viable product to be presented to demo users.",
  },
};
