// ============================================================================
// PORTFOLIO CONTENT — single source of truth for every string on the site.
//
// ⚠️  IDENTITY BLOCK BELOW IS FAKE PLACEHOLDER DATA, NOT REAL.
// Name, email, phone, location, GitHub and LinkedIn are placeholders so this
// project can be built, demoed, and previewed without exposing your real
// contact details. Employers, job titles, dates, achievements, education and
// skills are kept exactly as they appear on your resume, since those are
// what actually demonstrate your work to a recruiter.
//
// Before deploying this site live, replace every field in `IDENTITY` below
// with your real information. Nothing else needs to change.
// ============================================================================

export type Locale = "en" | "vi";

export const IDENTITY = {
  name: "Alex Tran",
  initials: "AT",
  email: "alex.tran.dev@example.com",
  phone: "+84 000 000 000",
  phoneHref: "tel:+840000000000",
  location: "Da Nang, Vietnam",
  github: "https://github.com/your-username",
  githubLabel: "github.com/your-username",
  linkedin: "https://linkedin.com/in/your-username",
  // Toggle the "Open to opportunities" badge in the Hero section on/off here.
  availableForWork: true,
  // Point this at your real CV once you add it to /public/resume.pdf.
  resumeHref: "/resume.pdf",
};

export interface StatItem {
  value: string;
  label: string;
}

export interface SkillGroup {
  name: string;
  icon: "code" | "layers" | "database" | "terminal";
  items: string[];
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: "code" | "database" | "layout" | "bug";
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

export interface ProjectItem {
  title: string;
  period: string;
  problem: string;
  solution: string;
  result: string;
  stack: string[];
  github: string;
  demo: string;
}

export interface DegreeItem {
  degree: string;
  school: string;
  period: string;
  note: string;
}

export interface CertItem {
  name: string;
  meta: string;
}

export interface LocaleContent {
  nav: {
    about: string;
    skills: string;
    services: string;
    experience: string;
    projects: string;
    education: string;
    contact: string;
    downloadCV: string;
  };
  hero: {
    greeting: string;
    roles: string[];
    tagline: string;
    availability: string;
    ctaProjects: string;
    ctaContact: string;
    scrollHint: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    photoTodo: string;
    paragraph: string;
    stats: StatItem[];
  };
  skills: {
    eyebrow: string;
    heading: string;
    sub: string;
    groups: SkillGroup[];
  };
  services: {
    eyebrow: string;
    heading: string;
    sub: string;
    items: ServiceItem[];
  };
  experience: {
    eyebrow: string;
    heading: string;
    sub: string;
    items: ExperienceItem[];
  };
  projects: {
    eyebrow: string;
    heading: string;
    sub: string;
    items: ProjectItem[];
  };
  education: {
    eyebrow: string;
    heading: string;
    sub: string;
    degrees: DegreeItem[];
    certifications: CertItem[];
  };
  contact: {
    eyebrow: string;
    heading: string;
    sub: string;
    copy: string;
    copied: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formSubmit: string;
    formAction: string;
    formNote: string;
    rights: string;
    builtWith: string;
  };
}

export const SECTION_IDS = [
  "hero",
  "about",
  "skills",
  "services",
  "experience",
  "projects",
  "education",
  "contact",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export const CONTENT: Record<Locale, LocaleContent> = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      services: "Services",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
      downloadCV: "Download CV",
    },
    hero: {
      greeting: "Hello, I'm",
      roles: ["Full-Stack Developer", ".NET Core Engineer", "RESTful API Builder"],
      tagline: "Building scalable web systems with ASP.NET Core & modern web technologies.",
      availability: "Open to opportunities",
      ctaProjects: "View Projects",
      ctaContact: "Contact Me",
      scrollHint: "Scroll to explore",
    },
    about: {
      eyebrow: "Get to know me",
      heading: "About Me",
      photoTodo: "[TODO: add photo]",
      paragraph:
        "Junior Full-Stack Developer with 2+ years of experience in ASP.NET Core and modern web technologies. I design, build, and maintain scalable web applications with clean, maintainable code, with a strong background in front-end and back-end development, RESTful APIs, and database design. I care deeply about performance optimization, system architecture, and delivering high-quality solutions through effective collaboration.",
      stats: [
        { value: "2+", label: "Years of Experience" },
        { value: "500+", label: "Bugs Caught in QA" },
        { value: "20%", label: "Faster Regression Cycles" },
        { value: "15+", label: "Tools & Technologies" },
      ],
    },
    skills: {
      eyebrow: "What I work with",
      heading: "Skills & Technologies",
      sub: "Tools and technologies I use to design, build, and ship reliable web applications.",
      groups: [
        { name: "Languages", icon: "code", items: ["C#", "Java", "JavaScript", "HTML", "CSS"] },
        {
          name: "Frameworks & Libraries",
          icon: "layers",
          items: ["ASP.NET Core", "MVC", "jQuery", "Bootstrap", "Entity Framework Core"],
        },
        {
          name: "Databases & Architecture",
          icon: "database",
          items: ["MSSQL Server", "PostgreSQL", "Microservices", "SOLID Principles", "RESTful APIs"],
        },
        { name: "Tools & Practices", icon: "terminal", items: ["Git / GitHub", "Jira", "Agile / Scrum"] },
      ],
    },
    services: {
      eyebrow: "How I can help",
      heading: "Services",
      sub: "What I can take off your plate as a freelance full-stack developer.",
      items: [
        {
          title: "Full-Stack Web Development",
          icon: "code",
          description:
            "End-to-end web applications built with ASP.NET Core, C#, and RESTful APIs, following SOLID principles for code that's easy to maintain and extend.",
        },
        {
          title: "Database Design & Optimization",
          icon: "database",
          description:
            "Efficient schema design and query tuning in MSSQL Server and PostgreSQL, so your application stays fast and reliable as it grows.",
        },
        {
          title: "Frontend Integration",
          icon: "layout",
          description:
            "Responsive, functional interfaces with JavaScript, jQuery, Bootstrap, and MVC patterns that connect cleanly to your backend.",
        },
        {
          title: "QA & Testing",
          icon: "bug",
          description:
            "Structured UI and workflow testing to catch issues before your users do — the same process that caught 500+ critical bugs and cut regression cycles by 20% in past work.",
        },
      ],
    },
    experience: {
      eyebrow: "Career path",
      heading: "Professional Experience",
      sub: "Where I've worked and the impact I've delivered.",
      items: [
        {
          company: "FPT Software",
          role: "Unit Tester (Front-end base)",
          period: "Mar 2024 — Jun 2024",
          bullets: [
            "Executed UI and workflow testing across enterprise-scale applications, identifying <b>500+ critical bugs</b> before production release.",
            "Refined test case sheets and workflows, cutting regression testing cycles by <b>20%</b> while maintaining <b>100% feature coverage</b>.",
          ],
        },
      ],
    },
    projects: {
      eyebrow: "Selected work",
      heading: "Featured Projects",
      sub: "A project I've built end-to-end, from problem to solution.",
      items: [
        {
          title: "Book Library Platform",
          period: "Oct 2024 — Jan 2025",
          problem:
            "Readers struggle to discover books that match their interests and get quick answers about titles they're considering.",
          solution:
            "Built a web-based library platform with personalized recommendations, an AI-driven Q&A assistant, an expert chat feature, and community book reviews.",
          result:
            "Delivered a more personalized book-discovery experience by analyzing user preferences and reading trends.",
          stack: ["[TODO: confirm tech stack]"],
          github: "[TODO: add GitHub repo link]",
          demo: "[TODO: add live demo link]",
        },
      ],
    },
    education: {
      eyebrow: "Background",
      heading: "Education & Certifications",
      sub: "Academic background, languages, and certifications.",
      degrees: [
        {
          degree: "Master of Information Technology",
          school: "University of Information Technology",
          period: "2025 — 2027",
          note: "Major in Information Technology.",
        },
        {
          degree: "Bachelor of Software Engineering",
          school: "University of Information Technology",
          period: "2020 — 2024",
          note: "Major in Software Engineering.",
        },
      ],
      certifications: [
        { name: "VSTEP — Vietnamese Standardized Test of English Proficiency", meta: "B2 level · 2024" },
        { name: "English", meta: "Working proficiency" },
      ],
    },
    contact: {
      eyebrow: "Let's talk",
      heading: "Get In Touch",
      sub: "I'm currently open to new opportunities — feel free to reach out and I'll get back to you as soon as I can.",
      copy: "Copy",
      copied: "Copied!",
      formName: "Name",
      formEmail: "Email",
      formMessage: "Message",
      formSubmit: "Send Message",
      formAction: "[TODO: add Formspree endpoint, e.g. https://formspree.io/f/xxxxxxx]",
      formNote:
        "[TODO: connect this form to a Formspree endpoint or your own backend — currently a UI placeholder.]",
      rights: "All rights reserved.",
      builtWith: "Built with care.",
    },
  },
  vi: {
    nav: {
      about: "Giới thiệu",
      skills: "Kỹ năng",
      services: "Dịch vụ",
      experience: "Kinh nghiệm",
      projects: "Dự án",
      education: "Học vấn",
      contact: "Liên hệ",
      downloadCV: "Tải CV",
    },
    hero: {
      greeting: "Xin chào, tôi là",
      roles: ["Lập trình viên Full-Stack", "Kỹ sư .NET Core", "Chuyên xây dựng RESTful API"],
      tagline: "Xây dựng hệ thống web có khả năng mở rộng với ASP.NET Core & công nghệ web hiện đại.",
      availability: "Sẵn sàng nhận việc mới",
      ctaProjects: "Xem dự án",
      ctaContact: "Liên hệ ngay",
      scrollHint: "Cuộn để khám phá",
    },
    about: {
      eyebrow: "Về tôi",
      heading: "Giới thiệu",
      photoTodo: "[TODO: thêm ảnh]",
      paragraph:
        "Lập trình viên Full-Stack với hơn 2 năm kinh nghiệm về ASP.NET Core và các công nghệ web hiện đại. Tôi thiết kế, xây dựng và bảo trì các ứng dụng web có khả năng mở rộng với mã nguồn sạch, dễ bảo trì, có nền tảng vững chắc về phát triển front-end lẫn back-end, RESTful API và thiết kế cơ sở dữ liệu. Tôi chú trọng tối ưu hiệu năng, kiến trúc hệ thống và mang lại giải pháp chất lượng cao thông qua sự phối hợp hiệu quả.",
      stats: [
        { value: "2+", label: "Năm kinh nghiệm" },
        { value: "500+", label: "Lỗi phát hiện khi QA" },
        { value: "20%", label: "Tăng tốc kiểm thử hồi quy" },
        { value: "15+", label: "Công cụ & Công nghệ" },
      ],
    },
    skills: {
      eyebrow: "Công nghệ sử dụng",
      heading: "Kỹ năng & Công nghệ",
      sub: "Công cụ và công nghệ tôi dùng để thiết kế, xây dựng và triển khai ứng dụng web đáng tin cậy.",
      groups: [
        { name: "Ngôn ngữ", icon: "code", items: ["C#", "Java", "JavaScript", "HTML", "CSS"] },
        {
          name: "Framework & Thư viện",
          icon: "layers",
          items: ["ASP.NET Core", "MVC", "jQuery", "Bootstrap", "Entity Framework Core"],
        },
        {
          name: "Cơ sở dữ liệu & Kiến trúc",
          icon: "database",
          items: ["MSSQL Server", "PostgreSQL", "Microservices", "Nguyên lý SOLID", "RESTful APIs"],
        },
        { name: "Công cụ & Quy trình", icon: "terminal", items: ["Git / GitHub", "Jira", "Agile / Scrum"] },
      ],
    },
    services: {
      eyebrow: "Tôi có thể giúp gì",
      heading: "Dịch vụ",
      sub: "Những việc tôi có thể đảm nhận với vai trò lập trình viên full-stack tự do.",
      items: [
        {
          title: "Phát triển Web Full-Stack",
          icon: "code",
          description:
            "Xây dựng ứng dụng web trọn vẹn với ASP.NET Core, C# và RESTful API, tuân thủ nguyên lý SOLID để mã nguồn dễ bảo trì và mở rộng.",
        },
        {
          title: "Thiết kế & Tối ưu Cơ sở dữ liệu",
          icon: "database",
          description:
            "Thiết kế schema hiệu quả và tinh chỉnh truy vấn trong MSSQL Server và PostgreSQL, giúp ứng dụng luôn nhanh và ổn định khi mở rộng.",
        },
        {
          title: "Tích hợp Frontend",
          icon: "layout",
          description:
            "Xây dựng giao diện responsive, hoạt động tốt với JavaScript, jQuery, Bootstrap và mô hình MVC, kết nối liền mạch với backend.",
        },
        {
          title: "Kiểm thử & Đảm bảo chất lượng",
          icon: "bug",
          description:
            "Kiểm thử giao diện và luồng nghiệp vụ có hệ thống để phát hiện lỗi trước khi người dùng gặp phải — quy trình từng phát hiện hơn 500 lỗi nghiêm trọng và giảm 20% thời gian kiểm thử hồi quy.",
        },
      ],
    },
    experience: {
      eyebrow: "Quá trình làm việc",
      heading: "Kinh nghiệm làm việc",
      sub: "Nơi tôi đã làm việc và những giá trị tôi mang lại.",
      items: [
        {
          company: "FPT Software",
          role: "Kiểm thử viên (Front-end)",
          period: "Th3 2024 — Th6 2024",
          bullets: [
            "Thực hiện kiểm thử giao diện và luồng nghiệp vụ cho các ứng dụng quy mô doanh nghiệp, phát hiện <b>hơn 500 lỗi nghiêm trọng</b> trước khi phát hành.",
            "Cải tiến bộ test case và quy trình kiểm thử, giảm <b>20%</b> thời gian kiểm thử hồi quy trong khi vẫn giữ <b>100% độ phủ tính năng</b>.",
          ],
        },
      ],
    },
    projects: {
      eyebrow: "Dự án tiêu biểu",
      heading: "Dự án nổi bật",
      sub: "Một dự án tôi xây dựng trọn vẹn từ vấn đề đến giải pháp.",
      items: [
        {
          title: "Nền tảng thư viện sách",
          period: "Th10 2024 — Th1 2025",
          problem:
            "Người đọc gặp khó khăn trong việc tìm sách phù hợp với sở thích và nhận câu trả lời nhanh về các đầu sách đang cân nhắc.",
          solution:
            "Xây dựng nền tảng thư viện web với gợi ý cá nhân hóa, trợ lý hỏi-đáp bằng AI, tính năng trò chuyện với chuyên gia và đánh giá sách từ cộng đồng.",
          result: "Mang lại trải nghiệm khám phá sách cá nhân hóa hơn thông qua phân tích sở thích người dùng và xu hướng đọc.",
          stack: ["[TODO: xác nhận công nghệ sử dụng]"],
          github: "[TODO: thêm liên kết GitHub]",
          demo: "[TODO: thêm liên kết demo]",
        },
      ],
    },
    education: {
      eyebrow: "Nền tảng học vấn",
      heading: "Học vấn & Chứng chỉ",
      sub: "Nền tảng học vấn, ngôn ngữ và chứng chỉ.",
      degrees: [
        {
          degree: "Thạc sĩ Công nghệ Thông tin",
          school: "Trường Đại học Công nghệ Thông tin",
          period: "2025 — 2027",
          note: "Chuyên ngành Công nghệ Thông tin.",
        },
        {
          degree: "Cử nhân Kỹ thuật Phần mềm",
          school: "Trường Đại học Công nghệ Thông tin",
          period: "2020 — 2024",
          note: "Chuyên ngành Kỹ thuật Phần mềm.",
        },
      ],
      certifications: [
        { name: "VSTEP — Chứng chỉ tiếng Anh chuẩn Việt Nam", meta: "Trình độ B2 · 2024" },
        { name: "Tiếng Anh", meta: "Trình độ làm việc" },
      ],
    },
    contact: {
      eyebrow: "Kết nối với tôi",
      heading: "Liên hệ",
      sub: "Tôi hiện đang sẵn sàng cho các cơ hội mới — hãy liên hệ, tôi sẽ phản hồi sớm nhất có thể.",
      copy: "Sao chép",
      copied: "Đã chép!",
      formName: "Họ tên",
      formEmail: "Email",
      formMessage: "Lời nhắn",
      formSubmit: "Gửi liên hệ",
      formAction: "[TODO: add Formspree endpoint, e.g. https://formspree.io/f/xxxxxxx]",
      formNote: "[TODO: kết nối form này với Formspree hoặc backend riêng — hiện tại chỉ là giao diện mẫu.]",
      rights: "Đã đăng ký bản quyền.",
      builtWith: "Được xây dựng tận tâm.",
    },
  },
};
