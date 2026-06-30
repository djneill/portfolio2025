import {
    HiUsers,
    HiGlobeAlt,
    HiCodeBracket,
    HiLightBulb,
} from "react-icons/hi2";

export const globalScopeHighlights = [
    {
        id: "community-catalyst",
        title: "Community Catalyst",
        description:
            "Contributing to meetups and workshops to bring developers together. Because the best social infrastructure is human connection.",
        Icon: HiUsers,
        image: "/images/conferences/lunchmeet.webp",
        accent: "from-cyan-500 to-blue-500",
    },
    {
        id: "social-impact",
        title: "Social Impact Architect",
        description:
            "Collaborating with local non-profits like Code for America's chapters in Austin & Dallas to build tech that makes a real difference in our community.",
        Icon: HiGlobeAlt,
        image: "/images/conferences/truckyard.webp",
        accent: "from-emerald-500 to-teal-500",
    },
    {
        id: "open-source",
        title: "Open Source Stewardship",
        description:
            "Contributing to the digital commons. Helping maintain and improve the open-source tools that power the web for everyone.",
        Icon: HiCodeBracket,
        image: "/images/conferences/jerseySourced.webp",
        accent: "from-purple-500 to-pink-500",
    },
    {
        id: "peer-growth",
        title: "Peer Growth Ally",
        description:
            "Championing the 'lift as you climb' mentality. Actively participating in knowledge sharing and connecting with fellow developers to build each other up.",
        Icon: HiLightBulb,
        image: "/images/conferences/group.webp",
        accent: "from-orange-500 to-amber-500",
    },
];
