// All of Shaun's content lives here so the components stay clean.

export const projects = [
  {
    id: "lets-cook",
    title: "Let's Cook",
    tagline: "A recipe app that actually cooks with you",
    period: "Oct 2025 · SMU.Hack HEAP",
    accent: "coral",
    emoji: "🍳",
    blurb:
      "A full-stack recipe + cooking-management app built with 4 teammates over a hackathon sprint. It pulls 3,000+ recipes from the FatSecret API, then layers on the fun stuff: an interactive cooking mode with real-time timer detection, multi-timer management and audio cues so you never burn the garlic again.",
    learned:
      "Shipping fast with a team taught me to scope ruthlessly — and that a tiny audio 'ding' makes a feature feel ten times more polished.",
    highlights: [
      "Cooking mode with multi-timer + audio notifications",
      "Gemini AI generates new recipes from text or photos",
      "Smart shopping list that consolidates ingredients across recipes",
      "Mobile-first responsive design across 3 breakpoints",
    ],
    stack: ["Vue 3", "PrimeVue", "Tailwind CSS", "Firebase", "Gemini AI", "FatSecret API"],
    links: [{ label: "View project", href: "#", kind: "demo" }],
  },
  {
    id: "judokas-connect",
    title: "Judokas Connect",
    tagline: "A home base for the judo community",
    period: "May–Aug 2024 · Summer Project",
    accent: "ocean",
    emoji: "🥋",
    blurb:
      "A full-stack web app for judokas, built with 4 teammates over an intense summer. I spearheaded the profile page and the whole colour-scheme/design language, plus an interactive calendar for attendance tracking and discussion forums for technique sharing and Q&A.",
    learned:
      "I went from barely knowing CSS to designing a full visual identity in a few weeks — proof that 'figure it out under pressure' is a real skill.",
    highlights: [
      "Designed the profile page + full colour-scheme system",
      "Interactive attendance calendar & discussion forums",
      "AI weight-cutting tool for meal + workout planning (Python)",
      "Real-time judo news scraping from the IJF website",
    ],
    stack: ["HTML", "CSS", "Python", "Web scraping", "Full-stack"],
    links: [{ label: "View project", href: "#", kind: "demo" }],
  },
  {
    id: "ellipsis",
    title: "Professional Development @ Ellipsis",
    tagline: "Connecting students with their next opportunity",
    period: "Dec 2024 – Present",
    accent: "grape",
    emoji: "🤝",
    blurb:
      "As a Professional Development Executive in SMU's Computing & Information Systems Society, I plan networking sessions and major talks, coordinate Project Experience programmes, and work with industry pros to open doors for SCIS students. I also helped run the Tech Series Hackathon 2025.",
    learned:
      "Organising events is its own kind of system design — lots of moving parts, real people, and tight deadlines.",
    highlights: [
      "Plan & run networking sessions + major talks",
      "Coordinate Project Experience programmes",
      "Co-organised Tech Series Hackathon 2025",
    ],
    stack: ["Event ops", "Partnerships", "Coordination"],
    links: [],
  },
  {
    id: "project-yolo",
    title: "Project YOLO",
    tagline: "Heritage education for kids who deserve it",
    period: "Aug 2024 – Oct 2025 · SMU Caretalyst",
    accent: "sky",
    emoji: "🧒",
    blurb:
      "Volunteered two years running with Project YOLO, the second year as a facilitator mentoring a group of 7 Year-1 students. We took underprivileged children on weekly heritage excursions and ran 8 interactive learning experiences across an 8-week commitment.",
    learned:
      "Mentoring younger students reminded me that patience and a good explanation beat being the smartest person in the room.",
    highlights: [
      "Mentored & supervised 7 Year-1 students as facilitator",
      "Ran 8 interactive heritage-education experiences",
      "Two-year community-service commitment",
    ],
    stack: ["Mentorship", "Facilitation", "Community"],
    links: [],
  },
];

export const skillGroups = [
  {
    label: "Building things",
    icon: "code",
    items: ["Vue.js", "HTML / CSS", "Tailwind", "Firebase", "OutSystems (low-code)", "Web apps"],
  },
  {
    label: "Working with data",
    icon: "chart",
    items: ["Python", "SQL", "R", "SPSS", "Tableau", "Excel"],
  },
  {
    label: "How I work",
    icon: "spark",
    items: ["Team leadership", "Problem-solving", "Project planning", "Learning fast"],
  },
];

// Words that scroll across the marquee strip
export const marqueeWords = [
  "Business Analytics",
  "FinTech",
  "Full-stack",
  "Data viz",
  "Beach volleyball",
  "Cycling",
  "Basketball",
  "Hackathons",
  "Vue 3",
  "Python",
  "Always learning",
];

export const funFacts = [
  "I'll trade a sunny afternoon for a beach-volleyball game any day.",
  "Two wheels > four. Long cycling rides are my reset button.",
  "Google Data Analytics certified — I genuinely enjoy cleaning messy data.",
  "I went from 'what is CSS' to designing a whole app's look in one summer.",
];

export const certs = [
  {
    title: "Google Data Analytics Professional Certificate (v2)",
    issuer: "Coursera",
    note: "Data cleaning in SQL & R, EDA + viz in Tableau, end-to-end pipelines & dashboards.",
  },
  {
    title: "Python (Basic) Certificate",
    issuer: "HackerRank",
    note: "Core Python for scripting and analysis.",
  },
];

export const socials = [
  { label: "Email", href: "mailto:shaun.teo.2024@computing.smu.edu.sg", kind: "mail" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shaun-teo-075a6a332", kind: "linkedin" },
  { label: "Phone", href: "tel:+6587874272", kind: "phone" },
];
