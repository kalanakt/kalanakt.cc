import type { BadgeObjects, Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://www.kalanakt.cc",
  author: "kalana kithmina",
  profile: "https://www.kalanakt.cc",
  desc: "Explore the portfolio of Kalana, a frontend developer with expertise in TypeScript, Rust, and full-stack programming. Discover projects, skills, and professional experience.",
  siteTitle: "Kalana Kithmina (kalanakt) | Developer & Innovator",
  title: "Kalana.Kt",
  keywords: [
    "kalana",
    "kithmina",
    "developer",
    "innovator",
    "typescript",
    "rust",
    "full-stack",
    "programming",
    "portfolio",
    "projects",
    "skills",
    "experience",
  ],
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/kalanakt",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "/",
    linkTitle: `${SITE.title} on Facebook`,
    active: false,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/kalana.kt",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/kalanakt",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:contact@kalanakt.cc",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/DevVibeX",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "Twitch",
    href: "/",
    linkTitle: `${SITE.title} on Twitch`,
    active: false,
  },
  {
    name: "YouTube",
    href: "/",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: "/",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: "/",
    linkTitle: `${SITE.title} on Snapchat`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "/",
    linkTitle: `${SITE.title} on Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: "/",
    linkTitle: `${SITE.title} on TikTok`,
    active: false,
  },
  {
    name: "CodePen",
    href: "/",
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "/",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "/",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "/",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "/",
    linkTitle: `${SITE.title} on Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "/",
    linkTitle: `${SITE.title} on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "/",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "/",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
  },
];

export const BADGES: BadgeObjects = [
  {
    name: "Bentley Accredited Developer: iTwin Platform - Associate",
    href: "https://www.credly.com/badges/07b756f5-88ae-4b46-8df1-8dfc421bd24b/public_url",
    src: "/assets/badge/bentley-accredited-developer-itwin-platform-associate.png",
  },
  {
    name: "ISC2 Candidate",
    href: "https://www.credly.com/badges/ea7cf249-dc3c-41bf-b8b4-b60b433cdf55/public_url",
    src: "/assets/badge/isc2-candidate.png",
  },
];
