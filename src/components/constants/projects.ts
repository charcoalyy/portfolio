import { InfoboxProps } from "@molecules/Infobox"

export const internships: InfoboxProps[] = [
  {
    title: "MongoDB",
    type: "internship",
    tag: "Software Engineer Intern 2025",
    points: {
      used: "React, Typescript, Storybook",
      to: "Maintain an open-source component library to accelerate developer productivity",
      shipped:
        "v1 of the LeafyGreen ProgressBar (plus side quests to improve CI performance)",
    },
  },
  {
    title: "Wealthsimple",
    type: "internship",
    tag: "Software Engineer Intern 2024",
    points: {
      used: "Ruby, Rails, Typescript, GraphQL",
      to: "Develop performant, scalable API gateways to help developers scale and iterate quicker",
      shipped:
        "Schema observability across 10+ microservices to prevent incidents via instant schema validation",
    },
  },
  {
    title: "FYELABS",
    type: "internship",
    tag: "Software Developer Intern 2023",
    points: {
      used: "Next.js, Typescript, Rust, PostgreSQL",
      to: "Build user-friendly web applications and digital products for startup and SME clients",
      shipped:
        "MVPs for real-time analytics dashboards, CRM software, and more",
    },
  },
]

export const projects: InfoboxProps[] = [
  {
    title: "LLM ↗",
    type: "project",
    tag: "UofTHacks 2024",
    points: {
      used: "React, Flask, PostgreSQL, OpenAI, DALL-E 3, Cohere, Instagram Graph API",
      to: "Develop an AI-based marketing tool that generates editable ads directly postable to social media",
      won: "Best use of AI/ML in business",
    },
    link: "https://devpost.com/software/llm-large-language-marketing",
  },
  {
    title: "DirectU ↗",
    type: "project",
    tag: "Hack the North 2023",
    points: {
      used: "React, Flask, Cohere, MongoDB, Selenium",
      to: "Develop an interactive, AI-based degree planner with personalized pro/con analysis",
      won: "Best use of Cohere",
    },
    link: "https://devpost.com/software/untitled-project-84yezbhn7asu",
  },
]
