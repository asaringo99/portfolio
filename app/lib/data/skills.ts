interface SkillData {
  name: string
  uri: string
  percent: number
  experience: number
  description: string
}

const data: SkillData[] = [
  { 
    name: "typescript",
    uri: "/skills/ts.png",
    percent: 70,
    experience: 3,
    description: "",
  },
  { 
    name: "nodejs",
    uri: "/skills/node.png",
    percent: 70,
    experience: 3,
    description: "",
  },
  { 
    name: "go",
    uri: "/skills/go.png",
    percent: 70,
    experience: 3,
    description: "",
  },
  { 
    name: "rust",
    uri: "/skills/rust.png",
    percent: 70,
    experience: 3,
    description: "",
  },
  { 
    name: "c++", 
    uri: "/skills/c++.png",
    percent: 70,
    experience: 3,
    description: "",
  },
  { 
    name: "flutter",
    uri: "/skills/flutter.png",
    percent: 70,
    experience: 3,
    description: "",
  },
  { 
    name: "java",
    uri: "/skills/java.png",
    percent: 70,
    experience: 3,
    description: "",
  },
  { 
    name: "python",
    uri: "/skills/python.png",
    percent: 70,
    experience: 3,
    description: "",
  },
  { 
    name: "nextjs",
    uri: "/skills/nextjs.png",
    percent: 60,
    experience: 3,
    description: "",
  },
  { 
    name: "react",
    uri: "/skills/react.png",
    percent: 60,
    experience: 3,
    description: "",
  },
  { 
    name: "gin",
    uri: "/skills/gin.png",
    percent: 70,
    experience: 3,
    description: "",
  },
  { 
    name: "echo",
    uri: "/skills/echo.png",
    percent: 70,
    experience: 3,
    description: "",
  },
  { 
    name: "django",
    uri: "/skills/django.png",
    percent: 70,
    experience: 3,
    description: "",
  },
  { 
    name: "tailwind",
    uri: "/skills/tailwind.png",
    percent: 70,
    experience: 3,
    description: "",
  },
  { 
    name: "vercel",
    uri: "/skills/vercel.png",
    percent: 70,
    experience: 3,
    description: "",
  },
  { 
    name: "prisma",
    uri: "/skills/prisma.png",
    percent: 70,
    experience: 3,
    description: "",
  },
  { 
    name: "nextauth",
    uri: "/skills/nextauth.png",
    percent: 70,
    experience: 3,
    description: "",
  },
  { 
    name: "postgres",
    uri: "/skills/postgres.png",
    percent: 70,
    experience: 3,
    description: "",
  },
  { 
    name: "mysql",
    uri: "/skills/mysql.png",
    percent: 70,
    experience: 3,
    description: "",
  },
  { 
    name: "linux",
    uri: "/skills/linux.png",
    percent: 70,
    experience: 3,
    description: "",
  },
  { 
    name: "git",
    uri: "/skills/git.png",
    percent: 70,
    experience: 3,
    description: "",
  },
  { 
    name: "docker",
    uri: "/skills/docker.png",
    percent: 70,
    experience: 3,
    description: "",
  },
  { 
    name: "k8s",
    uri: "/skills/k8s.png",
    percent: 70,
    experience: 3,
    description: "",
  },
  { 
    name: "atcoder",
    uri: "/skills/atcoder.png",
    percent: 70,
    experience: 3,
    description: "",
  },
  { 
    name: "codeforces",
    uri: "/skills/codeforces.png",
    percent: 70,
    experience: 3,
    description: "",
  },
]

export default function fetchSkills() {
  return data;
}