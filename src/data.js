// All of Shaun's content lives here so the components stay clean.

export const projects = [
  {
    id: "lets-cook",
    title: "Let's Cook",
    tagline: "A recipe app that actually cooks with you",
    period: "Oct 2025 · School Project",
    accent: "coral",
    emoji: "🍳",
    caseStudy: true,
    blurb:
      "A full-stack recipe + cooking-management app built with 4 teammates for a school project. It pulls 3,000+ recipes from the FatSecret API, then layers on the fun stuff: an interactive cooking mode with real-time timer detection, multi-timer management and audio cues so you never burn the garlic again.",
    learned:
      "Calling an API was a lot harder than I thought — every endpoint expects the exact path, parameters and auth, and the smallest mistake returns nothing.",
    highlights: [
      "Cooking mode with multi-timer + audio notifications",
      "Gemini AI generates new recipes from text or photos",
      "Smart shopping list that consolidates ingredients across recipes",
      "Mobile-first responsive design across 3 breakpoints",
    ],
    stack: ["Vue 3", "PrimeVue", "Tailwind CSS", "Firebase", "Gemini AI", "FatSecret API"],
    links: [{ label: "GitHub", href: "https://github.com/Shaunteoxx/wad2", kind: "repo" }],
    study: {
      role: "Full Stack Developer",
      team: "5 people",
      problem:
        "Cooking from an online recipe usually means juggling three things at once — the recipe in one tab, a separate timer app for 'simmer 10–12 minutes', and a notes app for the shopping list. Let's Cook set out to fold all of that into one place: find a recipe (or generate one from what's in your fridge), then actually cook with it through guided steps, built-in timers, and a shopping list that fills itself.",
      contribution:
        "Built with a team of five for a school project. As a full-stack developer I focused on the cooking experience and the AI generator — the interactive Cooking Mode, the Gemini-powered recipe generator, calling the API for 3000+ recipes, and a mobile-first responsive UI in Vue 3 + Tailwind.",
      features: [
        {
          label: "Cooking Mode with real-time timer detection",
          detail:
            "step text is scanned for durations like '10–12 minutes' or '1 hour' (ranges are averaged and converted to seconds) and turned into a one-tap timer for that step, with an ingredient checklist and servings scaling alongside",
        },
        {
          label: "Multi-timer management + audio cues",
          detail:
            "several timers run at once and persist even when you leave a step; each finishes with a Web Audio 'ding' and a browser notification, with pause / resume / clear",
        },
        {
          label: "AI recipe generation (text + image)",
          detail:
            "Gemini turns typed ingredients — or an uploaded photo — into a full recipe, constrained to a strict JSON schema with metric/kitchen unit options so the output renders cleanly every time",
        },
        {
          label: "Favourites & collections",
          detail: "save recipes into custom collections with list organisation and automatic merging",
        },
        {
          label: "Smart shopping list",
          detail:
            "automatic ingredient categorisation and cross-recipe consolidation, so duplicate ingredients combine into one tidy grocery list",
        },
        {
          label: "Recipe search — 3,000+ recipes",
          detail:
            "browse the FatSecret catalogue plus community-made recipes, each with its own search, ratings and comments",
        },
        {
          label: "Mobile-first responsive UI",
          detail:
            "tuned across three device sizes — icon buttons on mobile, text buttons on desktop — built in Vue 3 + Tailwind with custom scroll animations",
        },
      ],
      process: [
        {
          title: "One-stop cooking",
          detail: "Timers and the shopping list live inside the cook flow, so you never have to leave the app mid-recipe.",
        },
        {
          title: "Reliable AI output",
          detail:
            "Free-form model text broke the UI constantly, so the generator is locked to a strict JSON schema with normalised units (0.5, not '½').",
        },
        {
          title: "Mobile-first",
          detail:
            "People cook with a phone propped up on the counter, so layouts and controls were designed for small screens first.",
        },
        {
          title: "Scope for a sprint",
          detail: "Shipped the core loop — search / generate → cook → shop — fast, with a five-person team on a tight project timeline.",
        },
      ],
      challenges:
        "The hardest part was making Gemini's output trustworthy enough to build UI on top of — free text broke parsing constantly, so we constrained it to a strict JSON schema and normalised the units. Calling the API was the other one: it was the first time I called an API. There was not much help from the school so I had to read the API docs on my own and that took a lot of time and trial and error...",
      outcome:
        "A working one-stop cooking app to make it easy for Cooks: search the 3,000+ FatSecret catalogue or generate a recipe from text or a photo, then cook it with guided steps, real-time timers, and an auto-consolidating shopping list — all responsive across phone, tablet and laptop.",
    },
  },
  {
    id: "judokas-connect",
    title: "Judokas Connect",
    tagline: "A home base for the judo community",
    period: "May–Aug 2024 · SMU.Hack HEAP Summer Project",
    accent: "ocean",
    emoji: "🥋",
    caseStudy: true,
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
    links: [],
  },
  {
    id: "requirements-generator",
    title: "Requirements Document Generator",
    tagline: "AI that turns messy notes into company-standard docs",
    period: "Internship build",
    accent: "grape",
    emoji: "📝",
    caseStudy: true,
    blurb:
      "A full-stack internal tool that turns raw client notes into polished, company-standard requirements documents across four types (Customer, Business, Product and Integration). It replaces slow, inconsistent manual writing with a guided four-phase AI workflow: Analyze → Clarify → Review → Export.",
    learned:
      "Designing the workflow around 'ask only what's missing' taught me that good AI UX is as much about restraint as it is about generation.",
    highlights: [
      "Four-phase Gemini workflow: extracts requirements, asks only the clarifying questions it needs, drafts against templates, exports",
      "Per-document-type context injection — non-engineers tune output by editing plain-text instruction/template files, no redeploy",
      "One-click export + logging via Google Drive, Sheets and ClickUp APIs, with a Drive-backed document-relationship graph",
      "FastAPI backend + React/Vite/Tailwind frontend with token-based Corridor OAuth and shared upload/review/output components",
    ],
    stack: ["Python", "FastAPI", "Google Gemini", "React", "React Router", "Tailwind CSS", "Google Drive/Sheets API", "ClickUp API"],
    links: [],
  },
  {
    id: "broke-no-more",
    title: "Broke No More",
    tagline: "A budgeting app that keeps students on track",
    period: "Personal project",
    accent: "sky",
    emoji: "💸",
    caseStudy: true,
    blurb:
      "A mobile-first, dark-first personal finance tracker for students. It tracks income and expenses, sets monthly savings targets, and keeps you on budget through a gamified daily-spending streak — all with a polished, native-app feel and full accessibility.",
    learned:
      "Building the streak engine statelessly pushed me to derive state from data instead of storing it everywhere — cleaner logic and far fewer edge-case bugs.",
    highlights: [
      "Stateless daily-budget streak engine that self-corrects a spending limit from income, savings targets and spend-to-date",
      "Categorized transactions with live search, type filters, and optimistic delete + 10-second undo",
      "Spending insights: saved-vs-spent and category donut charts, monthly trends, and a savings-rate leaderboard",
      "Native-app UX: bottom-sheet flows, skeleton loading, dark mode, reduced-motion + safe-area support",
    ],
    stack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Recharts", "Node.js", "Express", "MongoDB", "Docker", "GCP / Vercel"],
    links: [{ label: "Live demo", href: "https://broke-no-more-ms.vercel.app/", kind: "demo" }],
    study: {
      role: "Full Stack Developer",
      team: "2 people",
      hero: "/broke-no-more/demo.mp4",
      gallery: [
        { src: "/broke-no-more/home.png", caption: "Home — what's left to spend, the daily streak, and quick actions" },
        { src: "/broke-no-more/transactions.png", caption: "Transactions — search, filter, and swipe-to-undo" },
        { src: "/broke-no-more/tracker.png", caption: "Monthly Tracker — saved vs spent and spending by category" },
      ],
      problem:
        "Tracking my own daily expenses was genuinely hard. People say bank statements are enough — but what happens when you pay for your friends? The money in and money out stops reflecting what's actually yours. Students need a clear view of their transactions and a dynamic daily allowance to reach a monthly savings target — plus a reason to stay motivated to spend within budget.",
      features: [
        { label: "Google OAuth sign-in", detail: "Passport.js with JWT auth and protected routes" },
        { label: "Mobile-first UI", detail: "phone-width layout, bottom tab bar, drag-to-dismiss bottom sheets" },
        { label: "Dark & light theme", detail: "system-aware with a manual toggle, reduced-motion support" },
        { label: "Daily-budget streak", detail: "a self-correcting daily spending limit derived from income, savings targets and spend-to-date — tracking win / break days with a manual streak-restore forgiveness system" },
        {
          label: "Transactions",
          items: [
            "Add income / expenses from a bottom sheet (type fixed by an Income / Expense button)",
            "Categories — a fixed set (Food & Drinks, Transport, Shopping, Entertainment, Travel · Allowance, Part-time, Gifts) plus user-created custom categories with their own colour",
            "Search by description or category, filter by All / Expenses / Income",
            "Optimistic delete with a 10-second undo",
          ],
        },
        { label: "Calculator", detail: "daily-spend budget & savings-goal calculators with animated results" },
        { label: "Monthly Tracker", detail: "donut of saved vs spent, plus a colour-coded 'spending by category' donut" },
        { label: "Stats", detail: "months tracked + average savings rate, and a grouped bar chart across every month" },
        { label: "Friends", detail: "search users, send / accept / decline requests, and a savings-rate leaderboard" },
        { label: "Profile", detail: "editable display name, a cute animal avatar (Twemoji), and account deletion" },
        { label: "Toast notifications", detail: "for key actions — add / delete, friend requests, and more" },
        { label: "Animations", detail: "page transitions, count-ups, fade / scale-ins, and animated charts" },
      ],
      process: [
        { title: "Colour scheme", detail: "Green throughout to signify money and savings." },
        { title: "Mobile-first", detail: "Users log transactions on the move, so they need quick, thumb-friendly access." },
        { title: "Light & dark modes", detail: "To better cater to different user preferences." },
        { title: "Leaderboards & streaks", detail: "Extra motivation to keep within budget and keep saving." },
      ],
      challenges:
        "The hardest part was the design — getting the UI/UX right so users always know where the functions are, can view their spending at a glance, and can add a transaction in seconds.",
      outcome:
        "Friends and family now use it to keep track of their expenses and stay within their budgets.",
    },
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

// A quick "by the numbers" snapshot — personality + headline figures that
// complement (not repeat) the detailed project cards.
export const stats = [
  {
    tag: "Running",
    stat: "2:17",
    unit: "hr",
    label: "First half marathon",
    sub: "21.1 km at the 2XU — and I finished standing.",
    accent: "sky",
    emoji: "🏃",
  },
  {
    tag: "Credentials",
    stat: "2",
    label: "Pro certifications",
    sub: "Google Data Analytics + HackerRank Python.",
    accent: "ocean",
    emoji: "📊",
  },
  {
    tag: "Active",
    stat: "5",
    label: "Sports in rotation",
    sub: "Volleyball, running, cycling, basketball & more.",
    accent: "coral",
    emoji: "🏐",
  },
  {
    tag: "Photography",
    stat: "100s",
    label: "Photos taken",
    sub: "Always out chasing better light.",
    accent: "grape",
    emoji: "📸",
  },
  {
    tag: "Community",
    stat: "2 yrs",
    label: "Giving back",
    sub: "Mentoring students and heritage work for kids.",
    accent: "sun",
    emoji: "🤝",
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
  "Running",
  "Photography",
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
  "I'm always chasing good light — there's usually a camera in my bag.",
  "21.1km at the 2XU Half Marathon — equal parts training and pure stubbornness.",
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
  { label: "Email", href: "mailto:shaunteo2003@gmail.com", kind: "mail" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shaun-teo-075a6a332", kind: "linkedin" },
];
