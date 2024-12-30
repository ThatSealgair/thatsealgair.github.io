import type { CollectionEntry } from "astro:content";

export type Site = {
  NAME: string;
  EMAIL: string;
  NUM_PLAYBOOKS_ON_HOMEPAGE: number;
  NUM_POSTS_ON_HOMEPAGE: number;
  NUM_PROJECTS_ON_HOMEPAGE: number;
  NUM_WORKS_ON_HOMEPAGE: number;
};

export type Metadata = {
  TITLE: string;
  DESCRIPTION: string;
};

export type Socials = {
  NAME: string;
  HREF: string;
}[];

export type PlaybookCategory = {
  NAME: string;
  HREF: string;
  ICON: string;
}[];

export type PlaybookEntry = CollectionEntry<"playbooks">;

export type ArrowCardEntry =
  | CollectionEntry<"blog">
  | CollectionEntry<"projects">
  | PlaybookEntry;

export type NavItem = {
  name: string;
  href: string;
};

export interface ContentFrontmatter {
  title: string;
  description: string;
  date: Date;
  draft?: boolean;
  [key: string]: unknown;
}
