// Portfolio data - Replace with your actual information
export const portfolioData = {
    personal: {
      name: "Your Name",
      title: "Full Stack Developer",
      location: "City, Country",
      email: "your.email@example.com",
      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourusername",
      bio: "Passionate developer with experience in modern web technologies. I love creating efficient, scalable solutions and learning new technologies.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    skills: {
      "Frontend": ["React", "JavaScript", "TypeScript", "HTML/CSS", "Tailwind CSS"],
      "Backend": ["Node.js", "Python", "Express.js", "REST APIs"],
      "Database": ["PostgreSQL", "MongoDB", "MySQL"],
      "Tools": ["Git", "Docker", "AWS", "Vercel"]
    },
    projects: [
      {
        id: 1,
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.",
        tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
        github: "https://github.com/yourusername/ecommerce",
        demo: "https://your-ecommerce-demo.com",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop"
      },
      {
        id: 2,
        title: "Task Management App",
        description: "Collaborative task management tool with real-time updates, drag-and-drop functionality, and team features.",
        tech: ["React", "Firebase", "Material-UI"],
        github: "https://github.com/yourusername/taskmanager",
        demo: "https://your-taskmanager-demo.com",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop"
      },
      {
        id: 3,
        title: "Weather Dashboard",
        description: "Clean weather application with location-based forecasts, interactive maps, and detailed analytics.",
        tech: ["Vue.js", "OpenWeather API", "Chart.js"],
        github: "https://github.com/yourusername/weather-app",
        demo: "https://your-weather-demo.com",
        image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop"
      }
    ],
    experience: [
      {
        id: 1,
        company: "Tech Company Inc.",
        role: "Senior Frontend Developer",
        duration: "2022 - Present",
        location: "Remote",
        achievements: [
          "Led development of customer-facing dashboard serving 10k+ users",
          "Improved application performance by 40% through optimization",
          "Mentored 3 junior developers and conducted code reviews"
        ]
      },
      {
        id: 2,
        company: "StartupXYZ",
        role: "Full Stack Developer",
        duration: "2020 - 2022",
        location: "City, Country",
        achievements: [
          "Built MVP from scratch using React and Node.js",
          "Implemented CI/CD pipeline reducing deployment time by 60%",
          "Collaborated with design team to create responsive user interfaces"
        ]
      }
    ]
  };