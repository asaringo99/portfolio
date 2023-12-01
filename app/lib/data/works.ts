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
      en: "Take a peek at my portfolio! It's a delightful blend of classic 2D elegance and modern web tech. I've jazzed it up with Tailwind CSS, adding a custom, stylish touch to every detail. There's also some Next.js wizardry under the hood, making it slick and efficient. Plus, it's all seamlessly deployed on Vercel, ensuring top-notch performance. It's not just a portfolio; it's a sleek showcase of web creativity!",
    }
  },
  { 
    name: "particle simulater",
    uri: "/works/particle.png",
    description: {
      ja: "",
      en: "Dive into the digital cosmos with my browser-based particle simulation! This isn't your average web project – it's a journey into the realm of particle physics, all from the comfort of your browser. Leveraging the power of particle-based numerical methods, this simulation brings the intricate dance of particles to life. Watch in awe as thousands of tiny particles interact, following the laws of physics in a mesmerizing display. Whether you're a science enthusiast or just love cool tech, this simulation is sure to spark your curiosity and imagination. It's not just a project; it's a window into the micro-universe, right at your fingertips!",
    }
  },
  {
    name: "kanban board",
    uri: "/works/kanban.png",
    description: {
      ja: "",
      en: "Step into the world of seamless organization with my custom-made Kanban board application! This isn't just any task management tool; it's a powerhouse of efficiency wrapped in a sleek, user-friendly interface. With intuitive drag-and-drop functionality, managing your projects becomes a breeze. Each task glides across the board with a simple swipe of your finger or click of the mouse, allowing for effortless organization. Whether it's for personal productivity or team collaboration, this high-functionality app adapts to your needs, making it the ultimate tool for anyone looking to streamline their workflow. Get ready to experience task management like never before!",
    }
  },
]

export default function fetchWorks() {
  return data;
}