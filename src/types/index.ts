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
  icon: string;
  iconClass: string;
}
