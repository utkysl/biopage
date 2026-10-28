export const site = {
  name: "Utku Yeşil",
  nameMark: "UTKU YEŞİL",
  role: "Technical Founder & Physics Engineer",
  descriptor: "Physics Engineering · Technical Founder · Systems Builder",
  institution: "Ankara University — Physics Engineering (2025–Present)",
  introduction: "The intersection of physics, code, and curiosity.",
  contactLine: "Building systems, ventures, and instruments. Let's connect.",
  location: "Ankara, TR",
  coordinateLine: "39.9334° N / 32.8597° E / ANKARA",
  coordinates: {
    lat: "39.9334° N",
    lon: "32.8597° E",
    city: "Ankara",
  },
  heroBody: [
    "Work sits where physical systems, software architecture, and venture building meet. Founder and CTO of GoodJob, directing the technical and product systems behind a multi-sided service marketplace.",
    "The practice is disciplined rather than loud: daily 1% improvement, systems thinking, personal finance analysis, and analog culture.",
  ],
  portrait: {
    src: "/portrait.jpeg",
    alt: "Portrait of Utku Yeşil.",
    caption: "FIG. 01",
    meta: "Portrait",
  },
  links: {
    github: "https://github.com/utkysl",
    linkedin: "https://www.linkedin.com/in/utku-ye%C5%9Fil-095a79325",
    instagram: "https://www.instagram.com/utqy2606/",
    email: "mailto:utkuyesil189@gmail.com",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Ventures", href: "#ventures" },
    { label: "Work", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
  about: {
    engineering: {
      title: "Engineering & development",
      body: "At the intersection of physics, computation, and engineering. Focused on modeling, simulating, and analyzing physical systems while building production-grade software architecture and embedded systems.",
    },
    mindset: {
      title: "Mindset & discipline",
      body: "Daily continuous improvement (a 1% gain philosophy) as operating procedure, not slogan. Alongside the lab and the editor: personal finance analysis, analog audio and vinyl culture, electric guitar, and piano. The same attention to signal, noise, and iteration applies in each.",
    },
    dual: "Physics Engineering at Ankara University supplies the theoretical backbone; software architecture supplies the instrumentation. Founding work at GoodJob is the applied field: observe, model, build, measure — then ship.",
  },
  ventures: [
    {
      name: "GoodJob",
      period: "2025–Present",
      role: "Founder & Chief Technology Officer",
      location: null,
      logo: "/logos/goodjob.png",
      logoAlt: "GoodJob",
      summary:
        "Directing architecture and product development for a multi-sided service marketplace live on iOS and Android.",
      scope: [
        "Full-Stack Architecture",
        "Real-Time Systems",
        "Technical Strategy",
        "Cloud Deployment",
      ],
      stack: ["React Native (Expo)", "Node.js", "MongoDB", "System Design"],
      href: null,
      hrefLabel: null,
      stores: [
        {
          label: "Website",
          href: "https://good-job.com.tr",
        },
        {
          label: "App Store",
          href: "https://apps.apple.com/us/app/goodjob-hizmet-platformu/id6791333564",
        },
        {
          label: "Google Play",
          href: "https://play.google.com/store/apps/details?id=com.utku.goodjob",
        },
      ],
    },
    {
      name: "AU YAZGİT",
      period: "2025–Present",
      role: "Project Committee Board Member & Model Satellite Team Lead",
      location: "Ankara, TR",
      logo: "/logos/yazgit.png",
      logoAlt: "AU YAZGİT",
      summary:
        "Evaluating technical project proposals on the executive board and leading systems engineering, RF telemetry, and avionics for the TEKNOFEST Model Satellite team.",
      scope: [
        "Systems Engineering",
        "Embedded C/C++",
        "RF Telemetry",
        "Scientific Computing",
      ],
      stack: ["C / C++", "Embedded Systems", "RF Telemetry", "System Architecture"],
      href: "https://github.com/AU-YAZGIT",
      hrefLabel: "GitHub Org",
      stores: null,
    },
  ],
  flagship: {
    index: "01",
    title: "GoodJob",
    kicker: "Flagship venture",
    description:
      "A multi-sided service marketplace. Technical founding: architecture, full-stack product, and the systems that have to hold under real use.",
    architecture: [
      "Multi-sided marketplace topology",
      "Full-stack product surface",
      "Cloud deployment & data layer",
      "Real-time matching and session flow",
    ],
    stack: "React Native · Expo · Node.js · MongoDB",
    stores: [
      {
        label: "Website",
        href: "https://good-job.com.tr",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/goodjob-hizmet-platformu/id6791333564",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.utku.goodjob",
      },
    ],
    image: "/projects/deneme.jpeg",
    figure: "FIG. 02",
  },
  studies: [
    {
      index: "01",
      title: "Computational Physics Laboratory",
      problem:
        "Numerical methods, differential equations, and physical-system modeling experiments.",
      architecture: "Python · C / C++ · Numerical Analysis",
      stack: "Python · C / C++ · Numerical Analysis",
      href: null,
      hrefLabel: null,
    },
    {
      index: "02",
      title: "Applied Computer Vision Lab",
      problem:
        "Image processing mathematics, classical filtering, and feature extraction pipelines.",
      architecture: "Python · OpenCV · Signal Processing",
      stack: "Python · OpenCV · Signal Processing",
      href: null,
      hrefLabel: null,
    },
    {
      index: "03",
      title: "Model Satellite System Architecture",
      problem:
        "1 Hz real-time telemetry pipeline, sensor fusion, and recovery mechanism design.",
      architecture: "Embedded C/C++ · RF Telemetry · Sensors",
      stack: "Embedded C/C++ · RF Telemetry · Sensors",
      href: "https://github.com/AU-YAZGIT",
      hrefLabel: "GitHub",
    },
  ],
  education: {
    line: "Ankara University — Physics Engineering (2025–Present)",
    school: "Ankara University",
    program: "Physics Engineering",
    period: "2025–Present",
  },
  skills: [
    {
      channel: "01",
      category: "Scientific Computing & Languages",
      items: [
        "Python",
        "C / C++",
        "Numerical Analysis",
        "JavaScript / TypeScript",
        "C#",
      ],
    },
    {
      channel: "02",
      category: "Systems & Software",
      items: [
        "React Native & Expo",
        "Node.js & Express",
        "MongoDB",
        "Git / GitHub",
      ],
    },
    {
      channel: "03",
      category: "Hardware & Instrumentation",
      items: [
        "Embedded Systems (ESP / MCU)",
        "RF & Analog Circuits",
        "Digital Oscilloscopes",
        "Sensors (I2C/SPI/UART)",
      ],
    },
    {
      channel: "04",
      category: "Research Interests",
      items: [
        "Computational Physics",
        "Particle Physics",
        "Detector Physics",
        "Scientific Data Analysis",
      ],
    },
  ],
  languages: [
    {
      name: "Turkish",
      iso: "TR",
      flag: "tr",
      level: "Native",
      detail: "Native",
      bars: 4,
    },
    {
      name: "English",
      iso: "GB",
      flag: "gb",
      level: "Upper-Intermediate",
      detail: "B2",
      bars: 3,
    },
    {
      name: "Japanese",
      iso: "JP",
      flag: "jp",
      level: "Intermediate Foundations",
      detail: "~N5 / N4",
      bars: 2,
    },
    {
      name: "German",
      iso: "DE",
      flag: "de",
      level: "Elementary",
      detail: "A1 / A2",
      bars: 1,
    },
  ],
  interests:
    "Analog audio and vinyl culture; personal finance analysis; musical instrumentation — electric guitar and piano. Hardware experimentation sits beside listening: patience, fidelity, systems.",
} as const;
