import { InfoboxProps } from "@molecules/Infobox"

export const internships: InfoboxProps[] = [
  {
    title: "Wealthsimple",
    type: "internship",
    tag: "Software engineer intern",
    points: {
      used: "Ruby, Rails, Typescript, GraphQL",
      to: "develop and maintain performant, scalable API gateways between microservices with high observability",
      shipped: "coming soon!!!!!",
    },
  },
  {
    title: "FYELABS",
    type: "internship",
    tag: "Software developer intern",
    points: {
      used: "Next.js, Typescript, Rust, PostgreSQL",
      to: "build user-friendly frontend applications and REST APIs for enterprise clients",
      shipped:
        "MVPs for real-time analytics dashboards, customer web portals, and more",
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
      to: "develop a marketing tool that uses AI to generate editable ad campaigns directly postable to social media",
      won: "best use of AI/ML in business",
    },
    link: "https://devpost.com/software/llm-large-language-marketing",
  },
  {
    title: "DirectU ↗",
    type: "project",
    tag: "Hack the North 2023",
    points: {
      used: "React, Flask, Cohere, MongoDB, Selenium",
      to: "develop an interactive, AI-based degree planner with personalized pro/con descriptions",
      won: "best use of Cohere",
    },
    link: "https://devpost.com/software/untitled-project-84yezbhn7asu",
  },
]
