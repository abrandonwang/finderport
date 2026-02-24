const fileSystem = {
  id: "root",
  name: "BrandonWang",
  type: "folder",
  children: [
    {
      id: "about",
      name: "About Me",
      type: "folder",
      icon: "person",
      children: [
        {
          id: "bio",
          name: "Bio.txt",
          type: "file",
          icon: "description",
          fileType: "text",
          meta: {
            modified: "Jan 15, 2026",
            size: "2 KB",
            kind: "Text Document"
          },
          content: "Hey, I'm Brandon Wang. REPLACE THIS WITH YOUR ACTUAL BIO. Talk about who you are, what you study, what you're passionate about, what you're looking for."
        },
        {
          id: "headshot",
          name: "Headshot.png",
          type: "file",
          icon: "image",
          fileType: "image",
          meta: {
            modified: "Jan 15, 2026",
            size: "340 KB",
            kind: "PNG Image"
          },
          content: "/images/headshot.png"
        },
        {
          id: "skills",
          name: "Skills.txt",
          type: "file",
          icon: "description",
          fileType: "text",
          meta: {
            modified: "Jan 15, 2026",
            size: "1 KB",
            kind: "Text Document"
          },
          content: "Languages: JavaScript, Python, C++, HTML, CSS\nFrameworks: React, GSAP\nTools: Git, VS Code, Figma\nCurrently Learning: Three.js, Node.js"
        }
      ]
    },
    {
      id: "projects",
      name: "Projects",
      type: "folder",
      icon: "folder",
      children: [
        {
          id: "portfolio",
          name: "Portfolio Site",
          type: "folder",
          icon: "folder",
          meta: {
            techStack: "React, GSAP",
            modified: "Feb 24, 2026",
            kind: "Folder"
          },
          children: [
            {
              id: "portfolio-readme",
              name: "README.md",
              type: "file",
              icon: "description",
              fileType: "text",
              meta: {
                modified: "Oct 24, 2025",
                size: "3 KB",
                kind: "Markdown"
              },
              content: "# Portfolio Site\n\nA personal portfolio website styled as a macOS Finder window. Built with React and GSAP for animations.\n\n## Features\n- macOS Finder-inspired UI\n- Folder navigation system\n- Animated window popups\n- Responsive design"
            },
            {
              id: "portfolio-screenshot",
              name: "Preview.png",
              type: "file",
              icon: "image",
              fileType: "image",
              meta: {
                modified: "Oct 24, 2025",
                size: "450 KB",
                kind: "PNG Image"
              },
              content: "/images/portfolio-preview.png"
            },
            {
              id: "portfolio-live",
              name: "LiveSite.url",
              type: "file",
              icon: "link",
              fileType: "link",
              meta: {
                modified: "Jan 15, 2026",
                size: "--",
                kind: "URL"
              },
              content: "https://brandonwang.work"
            },
            {
              id: "portfolio-github",
              name: "GitHub.url",
              type: "file",
              icon: "link",
              fileType: "link",
              meta: {
                modified: "Oct 24, 2025",
                size: "--",
                kind: "URL"
              },
              content: "https://github.com/abrandonwang/finderport"
            }
          ]
        },
        {
          id: "card-game",
          name: "Card Game",
          type: "folder",
          icon: "folder",
          meta: {
            techStack: "Javascript",
            modified: "Dec 30, 2024",
            kind: "Folder"
          },
          children: [
            {
              id: "card-readme",
              name: "README.md",
              type: "file",
              icon: "description",
              fileType: "text",
              meta: {
                modified: "Dec 30, 2024",
                size: "2 KB",
                kind: "Markdown"
              },
              content: "# Card Game\n\nREPLACE WITH YOUR DESCRIPTION"
            },
            {
              id: "card-github",
              name: "GitHub.url",
              type: "file",
              icon: "link",
              fileType: "link",
              meta: {
                modified: "Dec 30, 2024",
                size: "--",
                kind: "URL"
              },
              content: "https://github.com/abrandonwang/card-game"
            }
          ]
        },
        {
          id: "music-project",
          name: "Music Project",
          type: "folder",
          icon: "folder",
          meta: {
            techStack: "Python",
            modified: "Mar 10, 2022",
            kind: "Folder"
          },
          children: [
            {
              id: "music-readme",
              name: "README.md",
              type: "file",
              icon: "description",
              fileType: "text",
              meta: {
                modified: "Mar 10, 2022",
                size: "2 KB",
                kind: "Markdown"
              },
              content: "# Music Project\n\nREPLACE WITH YOUR DESCRIPTION"
            },
            {
              id: "music-github",
              name: "GitHub.url",
              type: "file",
              icon: "link",
              fileType: "link",
              meta: {
                modified: "Mar 10, 2022",
                size: "--",
                kind: "URL"
              },
              content: "https://github.com/BrandonWang/musicproject"
            }
          ]
        }
      ]
    },
    {
      id: "experience",
      name: "Experience",
      type: "folder",
      icon: "work",
      children: [
        {
          id: "resume",
          name: "Resume.pdf",
          type: "file",
          icon: "picture_as_pdf",
          fileType: "pdf",
          meta: {
            modified: "Feb 01, 2026",
            size: "156 KB",
            kind: "PDF Document"
          },
          content: "/files/resume.pdf"
        },
        {
          id: "timeline",
          name: "Timeline.txt",
          type: "file",
          icon: "description",
          fileType: "text",
          meta: {
            modified: "Feb 01, 2026",
            size: "1 KB",
            kind: "Text Document"
          },
          content: "REPLACE WITH YOUR TIMELINE\n\n2024 - Present: Whatever you're doing now\n2023: Previous role or school\n2022: Earlier experience"
        }
      ]
    },
    {
      id: "contact",
      name: "Contact",
      type: "folder",
      icon: "mail",
      children: [
        {
          id: "email",
          name: "Email.txt",
          type: "file",
          icon: "description",
          fileType: "text",
          meta: {
            modified: "Jan 01, 2026",
            size: "1 KB",
            kind: "Text Document"
          },
          content: "brandonwang@u.northwestern.edu\n\nFeel free to reach out!"
        },
        {
          id: "contact-form",
          name: "ContactForm.app",
          type: "file",
          icon: "mail",
          fileType: "mail",
          meta: {
            modified: "Jan 01, 2026",
            size: "4 KB",
            kind: "Application"
          },
          content: "form"
        },
        {
          id: "contact-github",
          name: "GitHub.url",
          type: "file",
          icon: "link",
          fileType: "link",
          meta: {
            modified: "Jan 01, 2026",
            size: "--",
            kind: "URL"
          },
          content: "https://github.com/abrandonwang"
        },
        {
          id: "contact-linkedin",
          name: "LinkedIn.url",
          type: "file",
          icon: "link",
          fileType: "link",
          meta: {
            modified: "Jan 01, 2026",
            size: "--",
            kind: "URL"
          },
          content: "https://linkedin.com/in/abrandonwang"
        }
      ]
    }
  ]
}

export default fileSystem