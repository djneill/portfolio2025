export interface DeepDiveStep {
  title: string;
  description: string;
  icon?: string;
}

export interface ProjectDeepDive {
  challenge: string;
  tradeOff: string;
  decision: string;
  why: string;
}

export interface Project {
  id: string;
  tag: string;
  title: string;
  img: string;
  languages: string;
  link: string;
  repoLink: string;
  linkText: string;
  description: string;
  deepDive?: ProjectDeepDive;
}

export interface Client {
  id: string;
  name: string;
  logo: string;
  website?: string;
}

export interface ConferencePhoto {
  id: string;
  image: string;
  caption: string;
  event: string;
}

export interface Socials {
  id: number;
  link: string;
  icon: React.ReactNode;
  iconClass: string;
  label: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags?: string[];
  readTime?: string;
}
