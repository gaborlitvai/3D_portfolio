import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  kornel,
  erik,
  gabi,
  tripguide,
  threejs,
  linkedin,
  logo
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Kik vagyunk?",
  },
  {
    id: "work",
    title: "Szolgáltatásaink",
  },
  {
    id: "contact",
    title: "Kapcsolat",
  },
];

const services = [
  {
    title: "3D modellek 67%-kal növelik az eladásokat",
    icon: web,
  },
  {
    title: "30%-kal kevesebb visszaküldési arány",
    icon: mobile,
  },
  {
    title: "2025-re 47%-os piacnövekedés",
    icon: backend,
  },
  {
    title: "Még egy fact a többi factet pedig átírni",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Holostep platform",
    company_name: "Platform",
    icon: logo,
    iconBg: "#F8F7F3",
    date: "Kell ide szöveg?",
    points: [
      "A platformunk lehetővé teszi, hogy néhány kattintással 3D-s modelleket rendeljen hozzá a Webshopjához",
      "Teljeskörű szolgáltatást nyújtunk a modelllezéstől a felület beállításán át a platform üzemeltetéséig",
      "Implementáljuk a paltformot és elkészítjük a kívánt 3D modlleket",
      "Nem számít milyen terméket árul, az interaktív modellek minden piacon előnyt jelentenek, keressen bátran bármilyen üzletágból!",
    ],
  },
  {
    title: "Shopify plugin",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "3D modellezés",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Termék modellek, rekélámanyagok gyártása",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Litvai Gábor",
    description:
      "én én én igen én igen en én vagyok ez én igen én vagyok asdhasodjasdpmasd,asődpaskdosp adkopsdkanjkas én teljen már a sor igen ",
    tags: [
      {
        name: "CEO",
        color: "blue-text-gradient",
      },
      {
        name: "CO-Founder",
        color: "green-text-gradient",
      },
      {
        name: "Head of Business",
        color: "pink-text-gradient",
      },
    ],
    image: gabi,
    source_code_link: "https://www.linkedin.com/in/gabor-litvai/",
  },
  {
    name: "Malachowsky Kornél",
    description:
      "A 3D modellezés királya, a bulik császára, a jóképű modellező, aki sikeresen leszokott a cigarettáról. Ő az, Kornél. + kell 1 sor, hogy szimmetrikus legyen",
    tags: [
      {
        name: "CEO",
        color: "blue-text-gradient",
      },
      {
        name: "CO-Founder",
        color: "green-text-gradient",
      },
      {
        name: "Head of Design",
        color: "pink-text-gradient",
      },
    ],
    image: kornel,
    source_code_link: "https://www.linkedin.com/in/kornel-malachowsky/",
  },
  {
    name: "Gróf Erik",
    description:
      "A szoftverfejlesztő bajnok. A startupok fenegyereke. Akinek nem tudsz feltenni olyan technikai kérdést, amire ne tudná csípőből a választ. Ő az, Erik ",
    tags: [
      {
        name: "CTO",
        color: "blue-text-gradient",
      },
      {
        name: "CO-Founder",
        color: "green-text-gradient",
      },
      {
        name: "Head of Tech",
        color: "pink-text-gradient",
      },
    ],
    image: erik,
    source_code_link: "https://www.linkedin.com/in/groferik/",
  },
];

export { services, technologies, experiences, testimonials, projects };