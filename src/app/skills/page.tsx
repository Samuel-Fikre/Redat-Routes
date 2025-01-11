'use client'

import Link from "next/link"
import { ArrowLeft } from 'lucide-react'
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    name: "Frontend",
    icon: "🌐",
    skills: [
      { name: "React", level: "Advanced" },
      { name: "Next.js", level: "Advanced" },
      { name: "Node.js", level: "Advanced" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "HTML/CSS", level: "Expert" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Framer Motion", level: "Intermediate" },
      { name: "GSAP", level: "Intermediate" },
      { name: "React Native & Flutter", level: "Beginner" },
    ]
  },
  {
    name: "Design",
    icon: "🎨",
    skills: [
      { name: "Figma", level: "Advanced" },
      { name: "Adobe XD", level: "Intermediate" },
      { name: "UI/UX Design", level: "Advanced" },
      { name: "UX Research", level: "Advanced" },
      { name: "Wireframing & Prototyping", level: "Intermediate" },
    ]
  },
  {
    name: "Other",
    icon: "🛠️",
    skills: [
      { name: "Git", level: "Advanced" },
      { name: "Agile/Scrum", level: "Intermediate" },
      { name: "RESTful APIs", level: "Advanced" },
      { name: "Java & c++", level: "Beginner" },
      { name: "Solidity & Go", level: "Beginner" },
      { name: "Testing (Jest, React Testing Library)", level: "Intermediate" },
    ]
  }
]

const levelColors = {
  Beginner: "bg-blue-100 text-blue-800",
  Intermediate: "bg-green-100 text-green-800",
  Advanced: "bg-purple-100 text-purple-800",
  Expert: "bg-red-100 text-red-800"
}

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8 lg:p-12 max-w-7xl mx-auto">
      <header className="flex justify-between items-center mb-12">
        <Link 
          href="/"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="text-base">Back</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link>
          <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
          <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Projects</Link>
          <Link href="/skills" className="text-sm font-medium">Skills</Link>
          <Link href="https://salixai.vercel.app" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Chat</Link>
          <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl  font-bold mb-4">Skills</h1>
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 md:mb-12 lg:mb-16 max-w-3xl">
          Here&apos;s an overview of my technical skills and proficiencies.
        </p>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 flex flex-col h-full">
              <h2 className="text-2xl md:text-3xl  font-bold mb-4 flex items-center gap-2">
                <span className="text-3xl md:text-4xl">{category.icon}</span>
                {category.name}
              </h2>
              <div className="flex flex-wrap gap-2 flex-grow">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary"
                    className={`text-xs md:text-sm py-1 px-2 ${levelColors[skill.level as keyof typeof levelColors]}`}
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

