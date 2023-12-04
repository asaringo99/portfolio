interface WorkData {
  name: string
  uri: string
  description: {
    ja: string,
    en: string,
  }
}

const data: WorkData[] = [
  { 
    name: "portfolio",
    uri: "/works/portfolio.png",
    description: {
      ja: "",
      en: "I have launched my personal portfolio website. It showcases my skills and projects. I used Tailwind CSS to achieve a clean and modern layout. Additionally, it was built with Next.js and deployed on Vercel",
    }
  },
  { 
    name: "particle simulater",
    uri: "/works/particle.png",
    description: {
      ja: "",
      en: "I'm thrilled to share my latest project - a particle collision simulation based on particle system algorithms, all running in your web browser. Using JavaScript, this simulation visualizes how particles interact and collide, offering a fascinating glimpse into the world of physics. It's a great tool for anyone interested in seeing complex theories in action or for those who simply enjoy visually appealing simulations. Check it out to experience the wonder of physics in a new and interactive way!",
    }
  },
  {
    name: "kanban board",
    uri: "/works/kanban.png",
    description: {
      ja: "",
      en: "I'm excited to share a project I've been working on: a Kanban board application inspired by GitHub, built with React for the frontend and Go for the backend. This project combines the robustness of Go's performance with the flexibility and responsiveness of a React-based UI. The Kanban board allows for efficient task management and organization, mirroring the streamlined functionality found in GitHub's own system. It's a great example of how combining different technologies can lead to a powerful and user-friendly application. This project showcases my skills in both front-end and back-end development, providing a comprehensive solution for task management needs.",
    }
  },
]

export default function fetchWorks() {
  return data;
}