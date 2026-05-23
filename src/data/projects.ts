export type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  image?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "PlanIt",
    description:
      "AI-powered travel assistant that automates itinerary planning using Amadeus API for real-time flights, hotels, and restaurants, serving 500+ users.",
    tech: ["Amadeus", "AWS Bedrock", "React"],
    github: "https://github.com/Geoffrey0953/IrvineHacks",
    demo: "https://devpost.com/software/planit-n7is89",
    featured: true,
  },
  {
    title: "DineSafe",
    description:
      "Platform that identifies recently closed or failed inspection restaurants by web scraping government sites.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/Geoffrey0953/Web-Jam-Hackathon",
    demo: "https://dinesafe.vercel.app/",
    featured: true,
  },
  // {
  //   title: "Portfolio Website",
  //   description:
  //     "This site: a fast, maintainable portfolio built with Astro and deployed through GitHub Pages.",
  //   tech: ["Astro", "GitHub Pages", "GitHub Actions"],
  //   github: "https://github.com/your-username/portfolio",
  //   featured: true,
  // },
];
