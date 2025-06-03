export const portfolioData = {
    personal: {
      name: "George Cui",
      title: "Computer Science Student @ TMU",
      location: "Markham, ON",
      email: "georgecuix@gmail.com",
      github: "https://github.com/georgecuiX",
      linkedin: "https://linkedin.com/in/george-cui-gc830/",
      bio: "Hey there! I'm currently a third year Computer Science student at Toronto Metropolitan University with a passion for full-stack development. I'm experienced in building scalable web applications using modern technologies like React, Node.js, and Python. Currently maintaining a 3.98 GPA while gaining practical experience through internships and personal projects.",
      avatar: "https://media.licdn.com/dms/image/v2/D5603AQFVA5IFjCo83w/profile-displayphoto-shrink_800_800/B56ZSPlL9CGoAg-/0/1737575678710?e=1754524800&v=beta&t=RGCyG2d9ytJ-C8KwbShloiYIZcDb1SZe15GHAtgtQBY"
    },
    skills: {
      "Languages": ["Python", "Java", "JavaScript", "SQL", "C", "Rust"],
      "Web Technologies": ["HTML", "CSS", "React", "Tailwind", "Flask", "Node.js", "Angular", "SQLite"],
      "Developer Tools": ["Git/GitHub", "Docker", "UNIX/Linux", "VSCode", "Visual Studio", "Oracle", "OpenAI", "PowerShell", "Microsoft Office"],
      "Core Skills": ["Full-Stack Development", "Web Development", "Database Administration", "Operating Systems", "Git Version Control", "SDLC"]
    },
    projects: [
      {
        id: 1,
        title: "Audio Alchemy",
        description: "Engaged in a dynamic team collaboration during Methacks 2024 to develop a GUI in Java for audio content management, achieving functionality for adding, searching, and deleting songs within a 48-hour timeframe.",
        tech: ["Java", "Java Swing", "Java AWT", "SQLite", "JLayer"],
        github: "https://github.com/georgecui/audio-alchemy",
        demo: "https://audio-alchemy-demo.com",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop",
      },
      {
        id: 2,
        title: "Recipe Vault",
        description: "Engineered a full-stack recipe management application using Flask, enabling users to efficiently add, search, view, and delete recipes through an intuitive web interface, improving recipe organization and retrieval speed by 50%.",
        tech: ["Python", "Flask", "HTML", "CSS", "PyQT", "SQLite"],
        github: "https://github.com/georgecui/recipe-vault",
        demo: "https://recipe-vault-demo.com",
        image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=400&h=250&fit=crop"
      },
      {
        id: 3,
        title: "DanceSync Rec Club",
        description: "Developed a membership management system designed to efficiently manage the operations and finances of an amateur dance club. Collaborated with a group of 3 developers to create a full-stack application ensuring robust data handling and a seamless user experience.",
        tech: ["React", "JavaScript", "Tailwind", "Node.js", "SQLite", "Axios API", "Context API"],
        github: "https://github.com/georgecuiX/DanceSyncRecClub",
        demo: "https://dancesync-demo.com",
        image: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=400&h=250&fit=crop",
      },
    ],
    experience: [
      {
        id: 1,
        company: "T-Rex Consulting",
        role: "Technical Administrator",
        duration: "Sep 2024 - Dec 2024",
        location: "Queens, NY (Remote)",
        achievements: [
          "Enhanced system integration and alignment with technology standards by developing and maintaining technical documentation for clients, using Python automation scripts to reduce manual tasks by 25%.",
          "Optimized event logistics and meeting coordination by implementing AI-powered tools, such as Google Calendar AI, cutting scheduling time by 30% and improving the accuracy of travel and conference arrangements.",
          "Revamped the company website using React and JavaScript, improving navigation, responsiveness, and user experience."
        ]
      },
      {
        id: 2,
        company: "VR Escapism",
        role: "Customer Service Representative",
        duration: "May 2023 - Jan 2024",
        location: "Markham, ON",
        achievements: [
          "Facilitated over 400 immersive VR experiences, maintaining a 95% customer satisfaction rating through personalized assistance and adept management of interactive sessions, fostering a welcoming environment.",
          "Excelled in high-pressure situations, swiftly resolving customer concerns and technical issues, ensuring minimal disruptions.",
          "Managed daily client communications, responding to 10+ calls and inquiries while leveraging a customer database."
        ]
      }
    ]
  };