import {
  Atom,
  BadgeDollarSign,
  Beaker,
  Binary,
  BookOpen,
  Bot,
  Brain,
  BriefcaseBusiness,
  Calculator,
  ChevronRight,
  CircleDollarSign,
  FlaskConical,
  GraduationCap,
  HeartHandshake,
  House,
  Languages,
  Lightbulb,
  Microscope,
  MoveRight,
  Orbit,
  Phone,
  Sigma,
  Sparkles,
  Trophy,
  WandSparkles,
} from "lucide-react";

export const contactDetails = {
  location: "Gold & Diamond Park, Dubai",
  addressLines: ["Suite 3016–3017, Building 3", "Gold and Diamond Park, Dubai"],
  phones: [
    { label: "Primary", detail: "Primary: +971-50 185 2505", value: "+971501852505" },
    {
      label: "Lower Secondary (Ages 11–14)",
      detail: "Lower Secondary (Ages 11–14): +971 58 533 4989",
      value: "+971585334989",
    },
    {
      label: "Upper Secondary (Ages 15+)",
      detail: "Upper Secondary (Ages 15+): +971 58 547 1457",
      value: "+971585471457",
    },
  ],
  landline: "+971 4 380 5525",
  email: "contact@improvemeinstitute.com",
  hours: "Mon–Fri: 9:30am–8:00pm · Sat: 9:00am–7:00pm",
};

export const topSchools = [
  "Nord Anglia School",
  "Dubai College",
  "Jumeirah College",
  "Repton Dubai",
  "North London Collegiate School",
  "Jumeirah English Speaking School",
  "Kings Dubai",
  "Royal Grammar School Guildford Dubai",
  "GEMS Jumeirah Primary School",
  "Dubai American Academy",
  "Dubai International Academy Al Barsha",
  "Dubai English Speaking College",
  "Brighton College Dubai",
  "Dubai British School",
  "Jebel Ali School",
  "The English College Dubai",
  "Safa Community School",
  "GEMS World Academy",
  "Al Safa British School",
];

export const megaMenus = {
  courses: [
    {
      title: "CORE SUBJECTS",
      links: [
        { label: "Mathematics", description: "Primary & Secondary", href: "/courses/mathematics" },
        { label: "English", description: "Primary & Secondary", href: "/courses/english" },
        { label: "Science (General)", description: "Primary, KS3", href: "/courses/science" },
        { label: "Biology", description: "GCSE, IGCSE, A-Level, IB", href: "/courses/biology" },
        { label: "Chemistry", description: "GCSE, IGCSE, A-Level, IB", href: "/courses/chemistry" },
        { label: "Physics", description: "GCSE, IGCSE, A-Level, IB", href: "/courses/physics" },
      ],
    },
    {
      title: "HUMANITIES & BUSINESS",
      links: [
        { label: "Business Studies", description: "GCSE, IGCSE, A-Level, IB", href: "/courses/business-studies" },
        { label: "Economics", description: "GCSE, IGCSE, A-Level, IB", href: "/courses/economics" },
        { label: "Psychology", description: "GCSE, IGCSE, A-Level, IB", href: "/courses/psychology" },
      ],
    },
    {
      title: "ENRICHMENT PROGRAMMES",
      links: [
        { label: "CAT4 Test Prep", description: "Ages 7-15", href: "/courses/cat-prep" },
        { label: "7+/11+ Entrance Prep", description: "School Admissions", href: "/courses/entrance-prep" },
        { label: "Chess Mastery", description: "Strategic Thinking", href: "/courses/chess" },
        { label: "Financial Literacy", description: "Money Management", href: "/courses/financial-literacy" },
        { label: "AI Literacy", description: "Future Skills", href: "/courses/ai-literacy" },
        { label: "Educational Counselling", description: "Academic Guidance", href: "/courses/counselling" },
        { label: "Home Education Support", description: "All Ages & Curricula", href: "/courses/home-education" },
      ],
    },
  ],
  curriculum: [
    {
      title: "Primary Curriculum",
      description: "Foundational learning from ages 3 to 11 with clear progression between each key stage.",
      links: [
        { label: "EYFS", href: "/curriculum/primary/eyfs" },
        { label: "Key Stage 1", href: "/curriculum/primary/ks1" },
        { label: "Key Stage 2", href: "/curriculum/primary/ks2" },
        { label: "Primary Overview", href: "/curriculum/primary" },
      ],
    },
    {
      title: "Secondary Curriculum",
      description: "Exam-board aligned support from KS3 through GCSE, IGCSE, A-Level, IB Diploma, and MYP.",
      links: [
        { label: "Key Stage 3", href: "/curriculum/secondary/ks3" },
        { label: "GCSE", href: "/curriculum/secondary/gcse" },
        { label: "IGCSE", href: "/curriculum/secondary/igcse" },
        { label: "A-Level", href: "/curriculum/secondary/a-level" },
        { label: "IB Diploma", href: "/curriculum/secondary/ib" },
        { label: "MYP", href: "/curriculum/secondary/myp" },
      ],
    },
  ],
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Our Courses", href: "/courses", menu: "courses" },
  { label: "Our Curriculum", href: "/curriculum", menu: "curriculum" },
  { label: "About Us", href: "/about" },
  { label: "Our Teachers", href: "/our-teachers" },
  { label: "Blogs", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const iconMap = {
  mathematics: Calculator,
  english: BookOpen,
  science: Atom,
  biology: Microscope,
  chemistry: FlaskConical,
  physics: Orbit,
  "business-studies": BriefcaseBusiness,
  economics: CircleDollarSign,
  psychology: Brain,
  "cat-prep": Sparkles,
  "entrance-prep": GraduationCap,
  chess: Trophy,
  "financial-literacy": BadgeDollarSign,
  "ai-literacy": Bot,
  counselling: HeartHandshake,
  "home-education": House,
  "further-mathematics": Sigma,
  "english-language": Languages,
  sciences: Beaker,
  "individuals-societies": Lightbulb,
};

export const courses = [
  {
    slug: "mathematics",
    title: "Mathematics",
    short: "Number & problem-solving",
    description: "Number sense to calculus. Build confidence, fluency, and exam technique across every curriculum.",
    color: "from-[#4A6FD4] to-[#5A84F0]",
    icon: "mathematics",
    boards: ["EYFS", "KS1", "KS2", "KS3", "GCSE", "IGCSE", "A-Level", "IB", "MYP"],
  },
  {
    slug: "english",
    title: "English",
    short: "Reading, writing & comprehension",
    description: "Reading, writing, literature, essay construction, and confident communication.",
    color: "from-[#E8732A] to-[#F58A2D]",
    icon: "english",
    boards: ["EYFS", "KS1", "KS2", "KS3", "GCSE", "IGCSE", "A-Level", "IB", "MYP"],
  },
  {
    slug: "science",
    title: "Science",
    short: "Natural world & scientific enquiry",
    description: "General science support before specialisation into biology, chemistry, and physics.",
    color: "from-[#2EAE6B] to-[#37C87A]",
    icon: "science",
    boards: ["KS2", "KS3", "MYP"],
  },
  {
    slug: "biology",
    title: "Biology",
    short: "Cell biology to ecology",
    description: "Comprehensive tutoring in biological systems, exam application, and scientific writing.",
    color: "from-[#1D9060] to-[#27B676]",
    icon: "biology",
    boards: ["GCSE", "IGCSE", "A-Level", "IB"],
  },
  {
    slug: "chemistry",
    title: "Chemistry",
    short: "Organic, inorganic & physical",
    description: "Methodical support with calculation, practical concepts, and structured exam technique.",
    color: "from-[#8B45B5] to-[#B155E6]",
    icon: "chemistry",
    boards: ["GCSE", "IGCSE", "A-Level", "IB"],
  },
  {
    slug: "physics",
    title: "Physics",
    short: "Mechanics, electricity & waves",
    description: "Clear explanation-led tutoring for formula fluency, problem-solving, and exam confidence.",
    color: "from-[#29A8C4] to-[#42C5E2]",
    icon: "physics",
    boards: ["GCSE", "IGCSE", "A-Level", "IB"],
  },
  {
    slug: "business-studies",
    title: "Business Studies",
    short: "Case studies & exam technique",
    description: "Marketing, finance, strategy, and analytical writing for high-scoring exam answers.",
    color: "from-[#D4541A] to-[#F27A2E]",
    icon: "business-studies",
    boards: ["GCSE", "IGCSE", "A-Level", "IB"],
  },
  {
    slug: "economics",
    title: "Economics",
    short: "Micro, macro & data analysis",
    description: "Microeconomics, macroeconomics, diagrams, and evaluation technique built for every board.",
    color: "from-[#1A7A6B] to-[#239987]",
    icon: "economics",
    boards: ["GCSE", "IGCSE", "A-Level", "IB"],
  },
  {
    slug: "psychology",
    title: "Psychology",
    short: "Research methods & approaches",
    description: "Psychological approaches, studies, evaluation, and essay technique for exam performance.",
    color: "from-[#C42B4A] to-[#E04263]",
    icon: "psychology",
    boards: ["GCSE", "A-Level", "IB"],
  },
  {
    slug: "cat-prep",
    title: "CAT Prep",
    short: "Preparation for CAT4 cognitive ability tests",
    description: "Targeted preparation for school admissions and cognitive assessment formats.",
    color: "from-[#8B45F7] to-[#B06AFF]",
    icon: "cat-prep",
    boards: ["Ages 7–15"],
  },
  {
    slug: "entrance-prep",
    title: "7+/11+ Entrance Prep",
    short: "Structured preparation for UK and Dubai school entrance exams",
    description: "Exam prep for selective school assessments with focused verbal, non-verbal, maths, and English practice.",
    color: "from-[#3749FF] to-[#5A6AFE]",
    icon: "entrance-prep",
    boards: ["7+", "11+"],
  },
  {
    slug: "chess",
    title: "Chess Mastery",
    short: "Developing logic, strategy, and focus",
    description: "Strategic thinking, concentration, and pattern recognition through structured chess coaching.",
    color: "from-[#FFB326] to-[#FFC94D]",
    icon: "chess",
    boards: ["All ages"],
  },
  {
    slug: "financial-literacy",
    title: "Financial Literacy",
    short: "Practical money skills and economic awareness",
    description: "Real-world understanding of money, budgeting, saving, and decision-making.",
    color: "from-[#19C89B] to-[#4BE0B9]",
    icon: "financial-literacy",
    boards: ["All ages"],
  },
  {
    slug: "ai-literacy",
    title: "AI Literacy",
    short: "Understanding AI tools and thinking critically about technology",
    description: "A future-skills programme covering responsible AI use, prompt thinking, and digital confidence.",
    color: "from-[#3B82F6] to-[#71A8FF]",
    icon: "ai-literacy",
    boards: ["All ages"],
  },
  {
    slug: "counselling",
    title: "Educational Counselling",
    short: "School entrance, subject selection & university applications",
    description: "Guidance around pathways, admissions, subject choices, and long-term planning.",
    color: "from-[#FF4F6D] to-[#FF6B87]",
    icon: "counselling",
    boards: ["Families", "Students"],
  },
  {
    slug: "home-education",
    title: "Home Education",
    short: "A structured learning environment for home-schooled students",
    description: "A professional, centre-based morning programme that keeps home-schooled students on track.",
    color: "from-[#18C8CC] to-[#84E4E6]",
    icon: "home-education",
    boards: ["Primary", "Secondary"],
  },
];

export const homePage = {
  hero: {
    title: "Dubai's Top Tutoring Centre — Every Curriculum from Ages 3 to 18",
    copy:
      "From Primary through to GCSE, IGCSE, A-Level, IB Diploma, MYP, and international curricula — we support students aged 3 to 18 across every stage of their education. Since 2010, we've helped 1,000+ students from 30+ Dubai schools achieve stronger results.",
    ctaPrimary: "Book Free Assessment",
    ctaSecondary: "Explore Courses",
    badgeTitle: "KHDA-approved · Small groups (a maximum of six students)",
    badgeCopy: "One consistent approach from age 3 to 18",
    image: "https://www.improvemeinstitute.com/overlay_image.webp",
  },
  learningJourney: {
    title: "A full academic journey, ages 3 to 18",
    primary: {
      subtitle: "Ages 3–11 · Building the Foundation",
      copy:
        "Strong foundations in Maths, English, and Science across EYFS, Key Stage 1, and Key Stage 2. Each session is matched to your child's year group and school curriculum. 7+ and 11+ entrance prep available.",
      tags: ["EYFS (Ages 3–5)", "Key Stage 1 (Ages 5–7)", "Key Stage 2 (Ages 7–11)"],
      cards: ["mathematics", "english", "science"],
      href: "/curriculum/primary",
    },
    secondary: {
      subtitle: "Ages 11–18",
      copy:
        "Key Stage 3 to A-Level and IB. Every session aligns with your child's exam board and school timetable. Our tutors know what examiners expect — and teach accordingly.",
      tags: ["Years 7–9 (KS3)", "MYP (Ages 11–16)", "GCSE/IGCSE (Ages 14–16)", "A-Levels/IB (Ages 16–18)"],
      cards: ["mathematics", "english", "science", "biology", "chemistry", "physics", "business-studies", "economics", "psychology"],
      href: "/curriculum/secondary",
    },
  },
  enrichment: {
    title: "Building well-rounded learners",
    copy: "Alongside their academic programme.",
    cards: ["cat-prep", "chess", "entrance-prep", "financial-literacy", "ai-literacy", "counselling"],
    banner: {
      title: "A Structured Learning Environment for Home-Schooled Students",
      eyebrow: "Home Education",
      copy:
        "Our morning programme gives home-schooled students a professional, centre-based space to learn — keeping them on track, helping them get ahead, and ensuring their education is structured, consistent, and tailored to their needs.",
      href: "/courses/home-education",
    },
  },
  approach: [
    {
      number: "01",
      title: "Small groups, not classrooms",
      copy:
        "Our sessions run in small groups of 3–6 students. Every child gets direct attention, can ask questions freely, and never gets lost at the back of a room.",
    },
    {
      number: "02",
      title: "We reverse-engineer the concept",
      copy:
        "When a child is stuck, we don't repeat the same explanation louder. We break the concept down from the bottom up — finding exactly where understanding broke down and rebuilding from there.",
    },
    {
      number: "03",
      title: "Weekly sessions with practice papers and worksheets",
      copy:
        "Consistency matters. Weekly sessions, structured worksheets, and past paper practice build the muscle memory that exams require. We don't cram — we build.",
    },
    {
      number: "04",
      title: "Progress reports back to parents",
      copy:
        "You never have to guess whether it's working. We send regular progress reports so you know exactly where your child is, what's improving, and what needs more work.",
    },
  ],
  testimonials: [
    {
      name: "Komal Kapoor",
      detail: "Physics & Further Maths",
      quote:
        "I've been at Improve ME for 3 years now and I've seen significant improvement in my grades. The teachers are super helpful and explain things clearly.",
    },
    {
      name: "Aron Kelly",
      detail: "Jumeirah College — 5 Subjects",
      quote:
        "Coming from JC, this institute has helped me achieve top marks across all subjects. I have taken English, Maths, and 3 Sciences.",
    },
    {
      name: "Nazia Hassan",
      detail: "Parent Review",
      quote:
        "Improve ME has helped my boys so much. Since joining Improve ME, the difference has been remarkable. They actually look forward to coming.",
    },
  ],
};

export const aboutPage = {
  hero: {
    eyebrow: "Our Story",
    title: "How Improve ME Began",
    paragraphs: [
      "Improve ME Institute started as a family-run business, built from the ground up by the Daswani family with a single driving purpose: to raise student attainment levels in Dubai.",
      "What began as a small tutoring operation has grown into one of Dubai's most trusted academic centres — KHDA-approved, operating since 2010, and serving students from over 30 schools across the city.",
      "From the very beginning, the focus was never on volume. It was on results. Small groups, consistent tutors, structured learning, and honest communication with parents. That hasn't changed.",
      "Today Improve ME supports students from age 3 all the way through to A-Level and IB Diploma — a complete academic journey, under one roof, with one consistent approach.",
    ],
    stats: [
      { value: "1,000+", label: "Students" },
      { value: "40+", label: "Specialist Tutors" },
      { value: "2010", label: "Established" },
      { value: "4.8★", label: "Google Rating" },
    ],
  },
  founder: {
    image: "https://www.improvemeinstitute.com/Neeta%20Daswani%20professional.jpeg",
    quote:
      "For over thirty years, I have dedicated my career to helping students learn better and achieve outstanding results. Improve ME Institute was built on the same promise: raise standards, build future-ready skills, and support every child to thrive in the real world.",
    paragraphs: [
      "Today, we stand strong with 40 faculty members and thousands of students enrolled annually, as we combine high-quality tutoring, life-skills programmes, and proven teaching methods to improve student attainment.",
      "I am especially proud that the next generation of my family has joined this mission. My sons, Shaun and Jason, now lead our Upper and Lower Secondary divisions, while I continue to oversee the centre's values, standards, and long-term direction.",
    ],
  },
};

export const faqItems = [
  {
    question: "How are groups structured?",
    answer: "Most sessions run in small groups of 3–6 students. Students are placed by year group, curriculum, and academic level.",
  },
  {
    question: "Do you offer a free assessment?",
    answer: "Yes. Families can book a free assessment so the team can recommend the right programme, tutor, and group.",
  },
  {
    question: "Which curricula do you cover?",
    answer: "Improve ME supports Primary, KS3, GCSE, IGCSE, A-Level, IB Diploma, MYP, and international curricula across Dubai schools.",
  },
  {
    question: "Where is the centre located?",
    answer: "The centre is based at Suite 3016–3017, Building 3, Gold and Diamond Park, Dubai.",
  },
  {
    question: "How quickly do you reply to enquiries?",
    answer: "The contact team aims to respond within two hours during working days.",
  },
];

export const glossaryTerms = [
  {
    term: "EYFS",
    definition: "The Early Years Foundation Stage covering ages 3 to 5, with emphasis on foundational literacy, numeracy, and development.",
  },
  {
    term: "KS1",
    definition: "Key Stage 1 in the British curriculum, typically covering Years 1 and 2 for students aged 5 to 7.",
  },
  {
    term: "KS2",
    definition: "Key Stage 2, covering Years 3 to 6 for ages 7 to 11.",
  },
  {
    term: "GCSE / IGCSE",
    definition: "Public secondary qualifications generally taken at ages 14 to 16, with IGCSE often used across international schools.",
  },
  {
    term: "IB Diploma",
    definition: "The International Baccalaureate Diploma Programme, a rigorous pre-university qualification for ages 16 to 18.",
  },
  {
    term: "MYP",
    definition: "The IB Middle Years Programme supporting interdisciplinary learning from roughly ages 11 to 16.",
  },
];

export const blogPosts = [
  {
    slug: "career-guidance-in-dubai",
    title: "Career Guidance in Dubai",
    date: "November 8, 2024",
    author: "Lina Harris",
    authorBio: "Education consultant with a focus on Dubai admissions, university planning and scholarship pathways.",
    category: "Guidance",
    readingTime: "5 min read",
    excerpt:
      "How Dubai students can connect ambitions with practical career support, university shortlists, and long-term planning.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1300&q=80",
    tags: ["Admissions", "University", "Careers"],
    content: [
      {
        type: "paragraph",
        text: "Dubai families need clear pathways from strong school performance to real-world career options. This guide outlines the practical steps that make career planning feel achievable rather than overwhelming.",
      },
      {
        type: "heading",
        text: "Start with strengths and interests",
      },
      {
        type: "paragraph",
        text: "The first step in effective guidance is understanding what a student enjoys most, what subjects motivate them, and how those preferences align with local and global study routes.",
      },
      {
        type: "list",
        items: [
          "Build a short-list of favourite subjects and career ideas.",
          "Match interests with realistic exam and curriculum paths.",
          "Talk to subject specialists and career counsellors early.",
        ],
      },
      {
        type: "blockquote",
        text: "Great academic support makes university and career planning feel like a series of manageable decisions, not a single high-pressure deadline.",
      },
      {
        type: "paragraph",
        text: "When students can connect educational milestones to long-term goals, they remain more engaged and confident across every year of school.",
      },
    ],
  },
  {
    slug: "british-curriculum-syllabus-explained",
    title: "British Curriculum Syllabus Explained",
    date: "December 6, 2024",
    author: "Amira Shah",
    authorBio: "Curriculum specialist helping students navigate the British syllabus across KS2, GCSE, IGCSE and A-Level.",
    category: "Curriculum",
    readingTime: "6 min read",
    excerpt:
      "A clear breakdown of the British curriculum from primary through secondary, with study tips for each stage and key assessment points.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1300&q=80",
    tags: ["British Curriculum", "GCSE", "A-Level"],
    content: [
      {
        type: "paragraph",
        text: "The British curriculum is layered around stages and exams. Understanding the structure helps students and parents plan study time, revision, and subject choices more confidently.",
      },
      {
        type: "heading",
        text: "Key stages at a glance",
      },
      {
        type: "list",
        items: [
          "KS1: Foundations in reading, writing and number sense.",
          "KS2: Building confidence in English, Maths and Science.",
          "GCSE / IGCSE: Exam preparation across core subjects.",
          "A-Level: Specialist study and university preparation.",
        ],
      },
      {
        type: "paragraph",
        text: "Every stage is an opportunity to strengthen students’ exam technique, subject confidence, and independent learning skills. The right support meets each stage where the student is today.",
      },
    ],
  },
  {
    slug: "top-tips-to-manage-exam-stress",
    title: "Top Tips to Manage Exam Stress",
    date: "January 6, 2025",
    author: "Nadia Patel",
    authorBio: "Student wellbeing coach who helps learners keep calm, organised and effective during exam season.",
    category: "Wellbeing",
    readingTime: "4 min read",
    excerpt:
      "Simple, proven techniques for reducing stress during exams and maintaining focus when pressure is highest.",
    image:
      "https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?auto=format&fit=crop&w=1300&q=80",
    tags: ["Study Skills", "Wellbeing", "Exams"],
    content: [
      {
        type: "paragraph",
        text: "Exam pressure can make even well-prepared students feel anxious. The right routine, mindset and support system helps them stay steady and productive.",
      },
      {
        type: "heading",
        text: "Build a balanced revision plan",
      },
      {
        type: "list",
        items: [
          "Break every subject into short, focused sessions.",
          "Schedule regular rest and movement breaks.",
          "Review progress each week and adjust the plan as needed.",
        ],
      },
      {
        type: "paragraph",
        text: "Keeping exam preparation sustainable is more important than trying to cram. A calm, consistent plan is the best way to maintain clarity and confidence.",
      },
    ],
  },
  {
    slug: "screen-time-study-time",
    title: "Screen Time, Study Time",
    date: "January 20, 2025",
    author: "Omar Malik",
    authorBio: "Digital learning coach supporting healthy study habits for modern students.",
    category: "Habits",
    readingTime: "5 min read",
    excerpt:
      "How to balance screen-based learning with offline study routines so students stay productive and avoid burnout.",
    image:
      "https://images.unsplash.com/photo-1517502166878-35c93a0072bb?auto=format&fit=crop&w=1300&q=80",
    tags: ["Digital Learning", "Productivity", "Habits"],
    content: [
      {
        type: "paragraph",
        text: "Technology is a powerful study tool, but it also brings distraction. The best learning routines use screen time purposefully and leave room for reflection offline.",
      },
      {
        type: "heading",
        text: "Create intentional study zones",
      },
      {
        type: "list",
        items: [
          "Set a clear start and finish time for digital study.",
          "Use apps only for learning and avoid social feeds during revision.",
          "Balance screen-based lessons with handwritten notes and review.",
        ],
      },
      {
        type: "paragraph",
        text: "A structured routine helps students use devices as tools rather than distractions, which supports deeper learning and better exam outcomes.",
      },
    ],
  },
  {
    slug: "strategies-for-tackling-homework",
    title: "Strategies for Tackling Homework",
    date: "February 6, 2026",
    author: "Sara Roberts",
    authorBio: "Learning strategist who helps families build homework systems that improve results and reduce daily friction.",
    category: "Study",
    readingTime: "4 min read",
    excerpt:
      "Homework doesn't have to feel endless. These proven strategies help students complete work faster with more confidence.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1300&q=80",
    tags: ["Homework", "Study Routine", "Skills"],
    content: [
      {
        type: "paragraph",
        text: "Consistent homework habits are one of the strongest predictors of school progress. The right system turns homework from chaos into clear gains.",
      },
      {
        type: "heading",
        text: "Use short focused sessions",
      },
      {
        type: "list",
        items: [
          "Start with the hardest task while focus is highest.",
          "Review instructions before beginning each assignment.",
          "Finish with a quick summary of what was learned.",
        ],
      },
      {
        type: "paragraph",
        text: "A repeatable homework workflow makes study time more efficient and helps students feel more in control of their progress.",
      },
    ],
  },
  {
    slug: "cat4-exam-preparation-in-dubai",
    title: "CAT4 Exam Preparation in Dubai",
    date: "February 20, 2026",
    author: "Yusuf Khan",
    authorBio: "Assessment coach specialising in CAT4 readiness and reasoning development for young learners.",
    category: "Prep",
    readingTime: "5 min read",
    excerpt:
      "A practical CAT4 preparation guide for families who want stronger reasoning, verbal and quantitative confidence ahead of the test.",
    image:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1300&q=80",
    tags: ["CAT4", "Tests", "Reasoning"],
    content: [
      {
        type: "paragraph",
        text: "CAT4 is designed to measure thinking skills. Preparation should focus on reasoning speed, pattern recognition, and clear problem-solving strategies.",
      },
      {
        type: "heading",
        text: "Practice with purpose",
      },
      {
        type: "list",
        items: [
          "Familiarise students with the CAT4 question format.",
          "Work through verbal and non-verbal reasoning examples.",
          "Build confidence with short, timed practice sessions.",
        ],
      },
      {
        type: "paragraph",
        text: "The best preparation balances practice in each area with time to reflect on what improvements are needed next.",
      },
    ],
  },
];

export const teachersPage = {
  hero: {
    title: "Meet Our Expert Teachers",
    subtitle:
      "Experienced mentors, specialist educators, and trusted guides helping every student build confidence and real academic momentum.",
  },
  teachers: [
    {
      name: "Sarah Ahmed",
      role: "IELTS Expert",
      experience: "10+ years experience",
      bio: "Specialises in IELTS strategy, speaking confidence, and academic writing. Known for structured preparation plans that help students improve quickly.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Daniel Brooks",
      role: "Communication Coach",
      experience: "8+ years experience",
      bio: "Helps learners strengthen public speaking, interview technique, and fluent communication with practical, confidence-building coaching.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Priya Nair",
      role: "Academic English Mentor",
      experience: "9+ years experience",
      bio: "Supports students with essay structure, reading comprehension, and advanced vocabulary using clear, personalised teaching methods.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Michael Chen",
      role: "Learning Skills Instructor",
      experience: "12+ years experience",
      bio: "Focuses on study techniques, exam readiness, and subject mastery with a calm mentoring approach and measurable student progress.",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Aisha Rahman",
      role: "Student Success Coach",
      experience: "7+ years experience",
      bio: "Combines academic mentoring with motivation coaching to help students stay consistent, organised, and confident in their learning journey.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "James Carter",
      role: "Professional Mentor",
      experience: "11+ years experience",
      bio: "Brings real-world teaching experience and practical guidance, helping students turn academic goals into long-term success habits.",
      image:
        "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80",
    },
  ],
  strengths: [
    {
      title: "Certified Experts",
      copy: "Our teachers bring strong academic credentials and specialist subject knowledge to every session.",
    },
    {
      title: "Real-world Experience",
      copy: "Students learn from professionals who understand both classroom outcomes and practical communication skills.",
    },
    {
      title: "Personalized Mentorship",
      copy: "Every learner gets individual guidance, targeted feedback, and support matched to their pace and goals.",
    },
    {
      title: "Proven Results",
      copy: "Our teaching combines consistency, clarity, and encouragement to help students achieve lasting progress.",
    },
  ],
  environment: {
    title: "Our Learning Environment",
    subtitle:
      "Our 7,000 sq ft teaching facility in Gold and Diamond Park is purpose-built to inspire and motivate young learners. With UK-themed classrooms, comfortable study spaces, and modern resources, we've created an environment where students love to learn.",
    images: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
    ],
  },
  approach: [
    {
      title: "Academic Excellence",
      description:
        "Small group tutoring in Maths, English, and Sciences. Every session is tailored to your child's year group, exam board, and school curriculum.",
      icon: "GraduationCap",
    },
    {
      title: "Skills-Based Learning",
      description:
        "Chess for strategic thinking, Financial Literacy for real-world skills, CAT4 prep for cognitive development, and AI Literacy for future readiness.",
      icon: "Brain",
    },
    {
      title: "Exam-Focused",
      description:
        "Our tutors know what examiners expect across GCSE, IGCSE, A-Level, and IB. We teach exam technique, time management, and how to maximize marks.",
      icon: "Trophy",
    },
  ],
};

export const curriculumTree = {
  primary: {
    title: "Primary Curriculum",
    subtitle: "Ages 3 to 11",
    intro:
      "Strong foundations in Maths, English, and Science across EYFS, Key Stage 1, and Key Stage 2, with tuition mapped carefully to each child's school curriculum.",
    sections: {
      eyfs: {
        title: "EYFS",
        stages: ["Mathematics", "English"],
      },
      ks1: {
        title: "Key Stage 1",
        stages: ["Mathematics", "English"],
      },
      ks2: {
        title: "Key Stage 2",
        stages: ["Mathematics", "English", "Science"],
      },
    },
  },
  secondary: {
    title: "Secondary Curriculum",
    subtitle: "Ages 11 to 18",
    intro:
      "Exam-board aware support across Key Stage 3, GCSE, IGCSE, A-Level, IB Diploma, and MYP with specialist subject tutors.",
    sections: {
      ks3: {
        title: "Key Stage 3",
        stages: ["Mathematics", "English", "Science"],
      },
      gcse: {
        title: "GCSE",
        stages: ["Mathematics", "Biology", "Chemistry", "Physics", "Further Mathematics", "English Language", "Business Studies", "Economics", "Psychology"],
      },
      igcse: {
        title: "IGCSE",
        stages: ["Mathematics", "Biology", "Chemistry", "Physics", "English Language", "Business Studies", "Economics"],
      },
      "a-level": {
        title: "A-Level",
        stages: ["Mathematics", "Further Mathematics", "English Language", "Biology", "Chemistry", "Physics", "Business", "Economics", "Psychology"],
      },
      ib: {
        title: "IB Diploma",
        stages: ["Mathematics", "English", "Biology", "Chemistry", "Physics", "Economics", "Psychology", "Business Studies"],
      },
      myp: {
        title: "MYP",
        stages: ["Mathematics", "English", "Sciences", "Individuals & Societies"],
      },
    },
  },
};

export const footerColumns = [
  {
    title: "Primary",
    links: [
      { label: "EYFS", href: "/curriculum/primary/eyfs" },
      { label: "Key Stage 1", href: "/curriculum/primary/ks1" },
      { label: "Key Stage 2", href: "/curriculum/primary/ks2" },
      { label: "Mathematics", href: "/courses/mathematics" },
      { label: "English", href: "/courses/english" },
      { label: "Science", href: "/courses/science" },
    ],
  },
  {
    title: "Secondary",
    groups: [
      {
        label: "Qualifications",
        links: [
          { label: "Key Stage 3", href: "/curriculum/secondary/ks3" },
          { label: "GCSE", href: "/curriculum/secondary/gcse" },
          { label: "IGCSE", href: "/curriculum/secondary/igcse" },
          { label: "A-Level", href: "/curriculum/secondary/a-level" },
          { label: "IB Diploma", href: "/curriculum/secondary/ib" },
          { label: "MYP", href: "/curriculum/secondary/myp" },
        ],
      },
      {
        label: "Subjects",
        links: [
          { label: "Mathematics", href: "/courses/mathematics" },
          { label: "English", href: "/courses/english" },
          { label: "Physics", href: "/courses/physics" },
          { label: "Chemistry", href: "/courses/chemistry" },
          { label: "Biology", href: "/courses/biology" },
          { label: "Business Studies", href: "/courses/business-studies" },
          { label: "Economics", href: "/courses/economics" },
          { label: "Psychology", href: "/courses/psychology" },
        ],
      },
    ],
  },
  {
    title: "Enrichment",
    links: [
      { label: "CAT4 Prep", href: "/courses/cat-prep" },
      { label: "7+/11+ Entrance Prep", href: "/courses/entrance-prep" },
      { label: "Chess Mastery", href: "/courses/chess" },
      { label: "Financial Literacy", href: "/courses/financial-literacy" },
      { label: "AI Literacy", href: "/courses/ai-literacy" },
      { label: "Counselling", href: "/courses/counselling" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Our Courses", href: "/courses" },
      { label: "Our Curriculum", href: "/curriculum" },
      { label: "FAQ", href: "/faq" },
      { label: "Glossary", href: "/glossary" },
      { label: "Enrolment Form", href: "/enrolment-page" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

export function getCourseBySlug(slug) {
  return courses.find((course) => course.slug === slug);
}

export function getCourseIcon(key) {
  return iconMap[key] || ChevronRight;
}

export function buildCurriculumPage(slugs) {
  if (!slugs || slugs.length === 0) {
    return null;
  }

  const [group, stage, subject] = slugs;

  if (!curriculumTree[group]) {
    return null;
  }

  if (!stage) {
    return {
      kind: "overview",
      group,
      ...curriculumTree[group],
    };
  }

  const stageData = curriculumTree[group].sections[stage];

  if (!stageData) {
    return null;
  }

  if (!subject) {
    return {
      kind: "stage",
      group,
      stage,
      stageData,
      title: stageData.title,
      subtitle: curriculumTree[group].subtitle,
      intro: curriculumTree[group].intro,
    };
  }

  const name = subject
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ")
    .replace("Ks", "KS")
    .replace("Igcse", "IGCSE")
    .replace("Gcse", "GCSE")
    .replace("Ib", "IB");

  return {
    kind: "subject",
    group,
    stage,
    subject,
    title: `${stageData.title} ${name}`,
    subtitle: curriculumTree[group].subtitle,
    intro:
      "Every session is matched to your child's school, exam board, and current level, with small-group teaching and a clear weekly progression plan.",
  };
}

export function getBreadcrumbs(pathname) {
  const parts = pathname.split("/").filter(Boolean);
  const crumbs = [{ label: "Home", href: "/" }];
  let current = "";

  for (const part of parts) {
    current += `/${part}`;
    crumbs.push({
      label: part
        .split("-")
        .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
        .join(" ")
        .replace("Ks", "KS")
        .replace("Igcse", "IGCSE")
        .replace("Gcse", "GCSE")
        .replace("Ib", "IB"),
      href: current,
    });
  }

  return crumbs;
}

export const icons = {
  MoveRight,
  Phone,
  Binary,
  WandSparkles,
};
