'use client'

import Link from "next/link"
import { useState } from "react"
import { ArrowLeft, Music, MapPin, Film, Tv, Pizza, Monitor, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function About() {
  const [showPreviousRoles, setShowPreviousRoles] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8 max-w-5xl mx-auto">
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
          <Link href="/about" className="text-sm font-medium">About</Link>
          <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Projects</Link>
          <Link href="/skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Skills</Link>
          <Link href="https://salixai.vercel.app" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Chat</Link>
          <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
        </nav>
      </header>

      <main>
  <h1 className="text-4xl font-bold mb-4">About</h1>
  <p className="text-lg text-muted-foreground mb-8">
    Meet Salim Rutaganda, a skilled Software Engineer and Product Designer.
  </p>

  <Card className="p-6 md:p-8 mb-8">
    <div className="grid gap-8">
      <div>
        <p className="text-sm text-muted-foreground mb-2">INTRODUCTION</p>
        <h2 className="text-2xl font-bold mb-4">
          Software Engineer and Product Designer passionate about creating impactful digital experiences
        </h2>
        <p className="text-muted-foreground mb-8">
          As a software engineer and product designer, I specialize in crafting intuitive and visually appealing user interfaces while managing seamless backend integrations. I leverage my skills in software development and design to create full-stack solutions that are dynamic, responsive, and user-focused. My experience spans across various technologies and frameworks, enabling me to deliver high-quality digital products.
        </p>
        <p className="text-muted-foreground mb-8">
          I&apos;m passionate about staying up-to-date with the latest trends in software development and UX/UI design. My goal is to create products that not only meet user needs but also provide delightful experiences.
        </p>
        
        <Separator className="my-8" />
        
        <div className="grid grid-cols-3 gap-6">
          <div className="flex items-center gap-2">
            <Music className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">Music</p>
              <p className="text-sm text-muted-foreground">Pop</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">City</p>
              <p className="text-sm text-muted-foreground">Kigali, Rwanda</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Film className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">Movie</p>
              <p className="text-sm text-muted-foreground">Peaky blinders</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Tv className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">TV Show</p>
              <p className="text-sm text-muted-foreground">Supernatural</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Pizza className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">Food</p>
              <p className="text-sm text-muted-foreground">Pizza</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Monitor className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">System</p>
              <p className="text-sm text-muted-foreground">macOS / Windows</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Card>

  <section className="space-y-6">
    <h2 className="text-xl font-bold">Career</h2>
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-start gap-2">
          <Monitor className="h-5 w-5 mt-1 text-muted-foreground" />
          <div>
            <h3 className="font-medium">Full stack Software Engineer </h3>
            <p className="text-sm text-muted-foreground">Freelance</p>
          </div>
        </div>
      </div>
      
      <Button
        variant="outline"
        className="mt-4"
        onClick={() => setShowPreviousRoles(!showPreviousRoles)}
      >
        {showPreviousRoles ? 'Hide' : 'Show'} Previous Roles
        <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${showPreviousRoles ? 'rotate-180' : ''}`} />
      </Button>

      {showPreviousRoles && (
        <>
          <Separator className="my-4" />
          <div className="space-y-4">
          <div className="flex items-start gap-2">
              <Monitor className="h-5 w-5 mt-1 text-muted-foreground" />
              <div>
                <h4 className="font-medium">Full stack Software Engineer</h4>
                <p className="text-sm text-muted-foreground">IngaboTech</p>
                <p className="text-sm text-muted-foreground">September 2024 - January 2024</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Monitor className="h-5 w-5 mt-1 text-muted-foreground" />
              <div>
                <h4 className="font-medium">Web Developer</h4>
                <p className="text-sm text-muted-foreground">Hello Tractor • Nairobi, Kenya</p>
                <p className="text-sm text-muted-foreground">September 2024 - November 2024</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Monitor className="h-5 w-5 mt-1 text-muted-foreground" />
              <div>
                <h4 className="font-medium">Product Designer - Software Engineer</h4>
                <p className="text-sm text-muted-foreground">Orthoverse (Surgical Simulation VR Platform) • Remote</p>
                <p className="text-sm text-muted-foreground">October 2024 - August 2024</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Monitor className="h-5 w-5 mt-1 text-muted-foreground" />
              <div>
                <h4 className="font-medium">Software Engineer</h4>
                <p className="text-sm text-muted-foreground">Web Buddy • Chennai, India</p>
                <p className="text-sm text-muted-foreground">November 2024 - December 2024</p>
              </div>
            </div>
           
          </div>
        </>
      )}
    </Card>
  </section>
</main>

    </div>
  )
}

