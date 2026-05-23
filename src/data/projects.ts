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
    title: "Task Manager",
    description:
      "A focused task tracking app with filters, persistent state, and a responsive interface.",
    tech: ["Astro", "TypeScript", "CSS"],
    github: "https://github.com/your-username/task-manager",
    demo: "https://your-username.github.io/task-manager",
    featured: true,
  },
  {
    title: "Data Dashboard",
    description:
      "A compact analytics dashboard that turns project data into readable charts and summaries.",
    tech: ["React", "Chart.js", "Node.js"],
    github: "https://github.com/your-username/data-dashboard",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description:
      "This site: a fast, maintainable portfolio built with Astro and deployed through GitHub Pages.",
    tech: ["Astro", "GitHub Pages", "GitHub Actions"],
    github: "https://github.com/your-username/portfolio",
    featured: true,
  },
];
