import type { Metadata, PlaybookCategory, Site, Socials } from "@types";

export const SITE: Site = {
  NAME: "Sealgair",
  EMAIL: "",
  NUM_PLAYBOOKS_ON_HOMEPAGE: 1,
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Technical blog to share projects and thoughts.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Work history.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "Collection of my personal and professional projects.",
};

export const PLAYBOOKS: Metadata = {
  TITLE: "Playbooks",
  DESCRIPTION: "Technical guides and documented procedures.",
};

export const PLAYBOOK_CATEGORIES: PlaybookCategory = [
  {
    NAME: "Blue Team",
    HREF: "/playbooks/blue-team",
    ICON: "server",
  },
  {
    NAME: "DevOps",
    HREF: "/playbooks/devops",
    ICON: "server",
  },
  {
    NAME: "Electronics",
    HREF: "/playbooks/electronics",
    ICON: "cpu",
  },
  {
    NAME: "Red Team",
    HREF: "/playbooks/red-team",
    ICON: "shield",
  },
  {
    NAME: "Software Development",
    HREF: "/playbooks/software-development",
    ICON: "code",
  },
];

export const SOCIALS: Socials = [
  {
    NAME: "twitter-x",
    HREF: "https://twitter.com/Sealgair",
  },
  {
    NAME: "github",
    HREF: "https://github.com/thatsealgair",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/jay-k-hunter",
  },
];
