// Copyright Valentyn Proshkyn 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export const METADATA = {
  title: "Portfolio | Valentyn Proshkyn",
  description:
    "I bridge the gap between design and development. I take responsibility to craft an aesthetic user experience using modern frontend architecture.",
  siteUrl: "https://ayushsingh.net/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I design and develop things",
  "I develop modern frontend apps",
  "I design dynamic user experience",
  "I design and develop motion",
];

export const EMAIL = "ayush.singh.xda@gmail.com";

export const SOCIAL_LINKS = {
  // linkedin: "https://www.linkedin.com/in/alphaayush/",
  github: "https://github.com/sasuke914",
  // medium: "https://alphaayush.medium.com/",
  // instagram: "https://www.instagram.com/alphaayush/",
  // facebook: "https://www.facebook.com/ayush013",
  // dribbble: "https://dribbble.com/alphaayush",
  // behance: "https://www.behance.net/alphaayush/",
  // twitter: "https://twitter.com/ayush013",
  // topmate: "https://www.topmate.io/alphaayush/",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "FigGen - Figma to Code converter",
    image: "/projects/figgen.jpg",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "Pixel perfect HTML/Tailwind for Figma Auto layout designs.",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://www.figma.com/community/plugin/1065278044402066626",
    tech: ["typescript", "figma", "tailwind"],
  },
  {
    name: "myOKR Website",
    image: "/projects/myokr.jpg",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description: "Marketing site for OKR Platform by huminos",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://www.huminos.com/",
    tech: ["react", "next", "gsap", "tailwind"],
  },
  {
    name: "DLT Labs Website",
    image: "/projects/dlt-website.jpg",
    blurImage: "/projects/blur/dlt-website-blur.jpg",
    description: "Marketing site with an Internal CMS from scratch",
    gradient: ["#245B57", "#004741"],
    url: "https://www.dltlabs.com/",
    tech: ["figma", "angular", "gsap"],
  },
  {
    name: "DL Unify",
    image: "/projects/dl-unify.jpg",
    blurImage: "/projects/blur/dl-unify-blur.jpg",
    description: "Built the application from zero to production 🚀",
    gradient: ["#003052", "#167187"],
    url: "https://dlunify.com/",
    tech: ["tailwind", "angular", "gsap", "figma"],
  },
  {
    name: "ngx-quill-upload",
    image: "/projects/ngx-quill-upload.jpg",
    blurImage: "/projects/blur/ngx-quill-upload-blur.jpg",
    description: "NPM Package for Quill JS uploads from Angular",
    gradient: ["#3A0000", "#771E1E"],
    url: "https://www.npmjs.com/package/ngx-quill-upload",
    tech: ["npm", "angular", "typescript"],
  },
  {
    name: "Huminos website",
    image: "/projects/huminos.jpg",
    blurImage: "/projects/blur/huminos-blur.jpg",
    description: "Marketing site for Huminos bots for workplace by facebook",
    gradient: ["#17007B", "#3A2C79"],
    url: "https://bots.huminos.com/",
    tech: ["javascript", "sass", "svg", "gulp"],
  },
  {
    name: "AKGEC - College Website",
    image: "/projects/akgec.jpg",
    blurImage: "/projects/blur/akgec-blur.jpg",
    description: "Contributed in overall design and development",
    gradient: ["#5E4C06", "#746528"],
    url: "https://www.akgec.ac.in/",
    tech: ["javascript", "html", "css"],
  },
  {
    name: "Alpha Aesthetics",
    image: "/projects/alpha.jpg",
    blurImage: "/projects/blur/alpha-blur.jpg",
    description: "Designed and developed the platform",
    gradient: ["#172839", "#334659"],
    url: "https://alpha-aesthetics.ayushsingh.net/",
    tech: ["illustrator", "javascript", "angular"],
  },
  {
    name: "Amantrya - Polling Web App",
    image: "/projects/farewell18.jpg",
    blurImage: "/projects/blur/farewell18-blur.jpg",
    description: "Dark mode dated from 2017 🔥",
    gradient: ["#142D46", "#2E4964"],
    url: "https://farewell18.ayushsingh.net/",
    tech: ["javascript", "html", "css"],
  },
  {
    name: "BDC 2018 Web Portal",
    image: "/projects/bdc18.jpg",
    blurImage: "/projects/blur/bdc18-blur.jpg",
    description: "Built the portal from zero to production 🚀",
    gradient: ["#470700", "#712A23"],
    url: "https://bdc2018.ayushsingh.net/",
    tech: ["javascript", "html", "css"],
  },
  {
    name: "Scrolls 2017 - Website",
    image: "/projects/scrolls.jpg",
    blurImage: "/projects/blur/scrolls-blur.jpg",
    description: "Built the portal from zero to production 🚀",
    gradient: ["#685506", "#7B6921"],
    url: "https://scrolls-17.ayushsingh.net/",
    tech: ["angular", "html", "css"],
  },
  {
    name: "Cardize - Visiting Cards",
    image: "/projects/cardize.jpg",
    blurImage: "/projects/blur/cardize-blur.jpg",
    description: "First web project! Custom visiting card generator",
    gradient: ["#552A04", "#614023"],
    url: "https://cardize.ayushsingh.net/",
    tech: ["javascript", "html", "css"],
  },
];

export const SKILLS = {
  frontend: [
    "javascript",
    "react",
    "redux",
    "next",
    "angular",
    "gsap",
    "tailwind",
    "sass",
    "svg",
    "html",
    "css",
  ],
  backend: [
    "mongodb", "mysql", "nestjs",
  ],
  userInterface: ["figma", "sketch", "illustrator", "photoshop"],
  other: ["git", "webpack", "gulp", "lightroom", "aftereffects"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2024",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "React Developer",
    size: ItemSize.SMALL,
    subtitle:
      " Responsible for building out the static UI, added the dynamic attributes to large application. Created custom Push Notifications, RESTful APIs, and interaction using React-Native-Camera.",
    image: "/timeline/react.svg",
    slideImage: "/timeline/react.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "React Developer",
    size: ItemSize.SMALL,
    subtitle:
      "Developed hybrid mobile platform for applications using JavaScript and React Native, resulting in 88% code share between iOS and Android while reducing development time by 33%",
    // image: "/timeline/react.svg",
    slideImage: "/timeline/js.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "Contributed to Server driven UI framework for powering experiences @ Flipkart Wholesale 😎",
    image: "/timeline/flipkart.svg",
    slideImage: "/timeline/flipkart.gif",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Frontend Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "Frontend Engineering @ Core team, solving problems around Livingroom device performance",
    image: "/timeline/hotstar.svg",
    slideImage: "/timeline/hotstar.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI Engineer (freelance)",
    size: ItemSize.SMALL,
    subtitle:
      "Built solutions for employee engagement, productivity and performance 🎯",
    image: "/timeline/huminos.svg",
    slideImage: "/timeline/huminos-freelance.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2020",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "React/React Native Developer",
    size: ItemSize.SMALL,
    subtitle: "Used React-Autocomplete for creating Google map’s location search on the webpage.",
    image: "/timeline/octanner.svg",
    slideImage: "/timeline/aftereffects.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "React/React Native Developer",
    size: ItemSize.SMALL,
    subtitle: "Developed a front-end mobile application using React Native, Redux, Flex and JavaScript.",
    image: "/timeline/octanner.svg",
    slideImage: "/timeline/aftereffects.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2017",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Full Stack Developer",
    size: ItemSize.SMALL,
    subtitle:
      "It was a gaming project and involved in implementing user interface friendly design and form submission functions by using JavaScript and Angular and React, Redux.",
    image: "/timeline/dltlabs.svg",
    slideImage: "/timeline/dlt-website.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  }
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
