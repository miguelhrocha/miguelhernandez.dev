import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Miguel Hernández",
  DESCRIPTION: "Software Engineer based in Munich, Germany. Coding is the only skill I have.",
  EMAIL: "iam@miguelhernandez.dev"
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Micro is an accessible theme for Astro.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const ABOUT: Metadata = {
  TITLE: "About",
  DESCRIPTION: "Learn more about me.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Places where they were exchanging money for code.",
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/miguelhrocha",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/miguelhrocha",
  },
];
