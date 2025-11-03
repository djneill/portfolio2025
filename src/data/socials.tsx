import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import { PiButterflyFill } from "react-icons/pi";
import type { Socials } from "../types";

export const socials: Socials[] = [
  {
    id: 1,
    link: "https://github.com/djneill",
    icon: <FaGithub />,
    iconClass: "text-[#6cc644]",
    label: "GitHub",
  },
  {
    id: 2,
    link: "https://www.linkedin.com/in/dj-neill/",
    icon: <FaLinkedinIn />,
    iconClass: "text-[#0072b1]",
    label: "LinkedIn",
  },
  {
    id: 3,
    link: "https://x.com/devsixstrings",
    icon: <FaTwitter />,
    iconClass: "text-[#1C9CEA]",
    label: "Twitter",
  },
  {
    id: 4,
    link: "https://bsky.app/profile/devsixstrings.bsky.social",
    icon: <PiButterflyFill />,
    iconClass: "text-[#87CEEB]",
    label: "Bluesky",
  },
];
