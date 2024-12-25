import React from 'react'
import { Github, Linkedin, Mail, Code, Calendar, Briefcase, Award, BookOpen } from 'lucide-react'

export default function ProfileReadme() {
  return (
    <div className="font-sans bg-gradient-to-br from-gray-900 to-blue-900 text-white p-8 rounded-lg shadow-2xl max-w-4xl mx-auto">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Fei Lin</h1>
        <div className="h-8 overflow-hidden">
          <p className="text-xl text-blue-300 typewriter">
            Full Stack Developer
            <br />
            Software Engineer
            <br />
            Data Scientist
          </p>
        </div>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Code className="mr-2" /> About Me
        </h2>
        <p className="text-gray-300 leading-relaxed">
          I'm a Computer Science major with a minor in Data Science at Brooklyn College, set to graduate between Summer and Winter 2025. My passion lies in Full Stack Development, Software Engineering, and Data Science. I thrive on real-world challenges and am constantly seeking opportunities to grow and innovate.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Award className="mr-2" /> Hackathons
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Hackathons are my playground for honing development skills. I believe in learning through building, and these events provide the perfect platform to gain hands-on, real-world experience.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Calendar className="mr-2" /> What's Next?
        </h2>
        <p className="text-gray-300 leading-relaxed">
          My roadmap includes consistent participation in LeetCode's weekly and daily challenges, creating impactful projects, expanding my professional network, and continuously refining my technical expertise.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Briefcase className="mr-2" /> Tech Stack
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {['Python', 'JavaScript', 'Java', 'HTML5', 'CSS3', 'Next.js', 'React', 'Node.js', 'TailwindCSS', 'Firebase', 'Bootstrap', 'Spring Boot', 'Git', 'GitHub', 'Postman', 'Pandas', 'NumPy'].map((tech) => (
            <div key={tech} className="bg-blue-800 rounded-full px-4 py-2 text-center text-sm font-medium">
              {tech}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <BookOpen className="mr-2" /> GitHub & LeetCode Stats
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <img src="https://github-readme-stats.vercel.app/api?username=walletkun&theme=dark&hide_border=true&include_all_commits=true&count_private=true" alt="GitHub Stats" className="w-full rounded-lg" />
          <img src="https://leetcard.jacoblin.cool/walletkun?theme=dark&font=Nunito&ext=heatmap" alt="LeetCode Stats" className="w-full rounded-lg" />
        </div>
      </section>

      <footer className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Connect With Me</h2>
        <div className="flex justify-center space-x-4">
          <a href="https://www.linkedin.com/in/fei-lincs/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100">
            <Linkedin size={24} />
          </a>
          <a href="https://devpost.com/walletkun/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100">
            <Github size={24} />
          </a>
          <a href="mailto:feilinpersonal@gmail.com" className="text-blue-300 hover:text-blue-100">
            <Mail size={24} />
          </a>
        </div>
      </footer>

      <style jsx>{`
        @keyframes typewriter {
          0%, 33.33% {
            transform: translateY(0);
          }
          33.34%, 66.66% {
            transform: translateY(-1.5em);
          }
          66.67%, 100% {
            transform: translateY(-3em);
          }
        }

        .typewriter {
          display: inline-block;
          animation: typewriter 9s infinite;
        }
      `}</style>
    </div>
  )
}
<div align="center">
  <img src="/placeholder.svg?height=200&width=200" alt="Profile Image" style="border-radius: 50%;" />
  
  # Hi there! I'm Fei Lin 👋 

  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/fei-lincs/)
  [![Devpost](https://img.shields.io/badge/Devpost-003E54?style=for-the-badge&logo=Devpost&logoColor=white)](https://devpost.com/walletkun/)
  [![Email](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:feilinpersonal@gmail.com)
</div>

## 🚀 About Me

> 💻 Full Stack Developer | 🔬 Data Scientist | 🛠️ Software Engineer

I'm a Computer Science major with a Data Science minor at Brooklyn College (Class of 2025). I love building things that make a difference!

- 🎓 Currently working on my degree in Computer Science
- 🌱 Learning new technologies and frameworks every day
- 💡 Passionate about solving real-world problems through code
- 🏆 Active participant in hackathons and coding competitions

## 🛠️ Tech Stack

### Languages
<p>
  <img alt="Python" src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" />
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img alt="Java" src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" />
  <img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
</p>

### Frameworks & Libraries
<p>
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" />
  <img alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
  <img alt="TailwindCSS" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img alt="Bootstrap" src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" />
  <img alt="Spring Boot" src="https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring&logoColor=white" />
</p>

### Tools & Platforms
<p>
  <img alt="Git" src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />
  <img alt="GitHub" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />
  <img alt="Firebase" src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" />
  <img alt="Postman" src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" />
</p>

### Data Science Stack
<p>
  <img alt="Pandas" src="https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white" />
  <img alt="NumPy" src="https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white" />
</p>

## 🏆 Hackathons

> "Building is the best way to learn" - My Motto

I actively participate in hackathons to:
- 🚀 Challenge myself with real-world problems
- 🤝 Collaborate with other passionate developers
- 💡 Turn innovative ideas into working prototypes
- 🌱 Learn new technologies under pressure

## 📈 GitHub Stats

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=walletkun&show_icons=true&theme=radical" alt="GitHub Stats" />
  <img src="https://leetcard.jacoblin.cool/walletkun?theme=dark&font=Nunito&ext=heatmap" alt="LeetCode Stats" />
</div>

## 🎯 What's Next?

- 📚 Mastering Data Structures & Algorithms through daily LeetCode practice
- 🛠️ Building impactful projects that solve real problems
- 🤝 Growing my professional network
- 📱 Exploring new technologies and frameworks

## 🐍 Contribution Graph

![Snake animation](https://raw.githubusercontent.com/walletkun/walletkun/output/github-contribution-grid-snake-dark.svg)

<div align="center">
  <img src="https://komarev.com/ghpvc/?username=walletkun&color=blueviolet" alt="Profile views" />
</div>
