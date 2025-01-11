'use client'

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

// Mock project data
const projects = [
  {
    id: 1,
    title: "Careervault",
    description: " Discover hidden job opportunities on LinkedIn before anyone else.",
    image: "/careervault.png",
    year: "2025",
    link: "https://careervault.vercel.app"
  },
  {
    id: 2,
    title: "Fizzy",
    description: "3D animated website using Next.js,Three.js, prismic.io and framer motion.",
    image: "/fizzy.png",
    year: "2023",
    link: "https://fizzyd.vercel.app"
  },
  {
    id: 3,
    title: "Ingabo Tech Website",
    description: "A modern, responsive landing page designed to showcase and elevate Ingabo Tech company's brand.",
    image: "/ingab.png",
    year: "2024",
    link: "https://ingabotech.com"
  },
  {
    id: 4,
    title: "Feasto",
    description: "A comprehensive Food Ordering App UI Kit featuring intuitive interfaces for seamless user experiences.",
    image: "/feasto.png",
    year: "2024",
    link: "https://www.figma.com/community/file/1445043327378504859"
  },
  {
    id: 5,
    title: "CoinSpy",
    description: " Your ultimate tool for real-time cryptocurrency tracking and insights! Stay ahead of the market",
    image: "/coinspy.png",
    year: "2024",
    link: "https://coinspyer.vercel.app"
  },
  {
    id: 6,
    title: "Salix AI",
    description: "A personal AI chatbot that shares my story and engages users with interactive conversations!",
    image: "/salix.png",
    year: "2024",
    link: "https://salixai.vercel.app"
  },
  {
    id: 7,
    title: "Shadow Flux",
    description: "Shadow Flux is a immersive vscode theme with deep, shadowy tones and vibrant syntax highlighting.",
    image: "/shadowflux.png",
    year: "2024",
    link: "https://salixai.vercel.app"
  },
  
]

const years = ["All","2025", "2024", "2023",]

export default function ProjectsPage() {
  const [selectedYear, setSelectedYear] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProjects = projects.filter(project => {
    const matchesYear = selectedYear === "All" || project.year === selectedYear
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesYear && matchesSearch
  })

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8 max-w-7xl mx-auto">
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
          <Link href="/projects" className="text-sm font-medium">Projects</Link>
          <Link href="/skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Skills</Link>
          <Link href="https://salixai.vercel.app" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Chat</Link>
          <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
        </nav>
      </header>

      <main>
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Explore my portfolio of projects spanning from 2023 to 2024.
        </p>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {years.map(year => (
              <Button
                key={year}
                variant={selectedYear === year ? "default" : "outline"}
                onClick={() => setSelectedYear(year)}
                className="text-base"
              >
                {year}
              </Button>
            ))}
          </div>
          
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search projects..."
              className="pl-10 w-full md:w-[300px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <Link key={project.id} href={project.link} target="_blank" rel="noopener noreferrer"  >
              <Card className="group relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                <div className="aspect-video relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex items-center justify-between mt-12">
                    <div className="inline-block bg-muted px-2.5 py-0.5 rounded text-xs font-bold">
                      {project.year}
                    </div>
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      View project →
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}

