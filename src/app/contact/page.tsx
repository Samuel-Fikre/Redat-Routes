// src/app/contact/page.tsx
'use client'

import { useRef, useState } from "react"
import Link from "next/link"
import { ArrowLeft, Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm('service_6qq1lyo', 'template_gb4q19y', form.current, {
          publicKey: '7EOKAlCB8z95FtyP-',
        })
        .then(
          () => {
            toast({
              title: "Message sent!",
              description: "Thanks for reaching out. I'll get back to you soon.",
            });
            form.current.reset(); // Reset the form after successful submission
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    }
  };

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
          <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
          <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Projects</Link>
          <Link href="/skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Skills</Link>
          <Link href="https://salixai.vercel.app" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Chat</Link>
          <Link href="/contact" className="text-sm font-medium">Contact</Link>
        </nav>
      </header>

      <main className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Have a question or want to work together? Feel free to reach out.
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Your name"
                required
                name="name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                required
                name="email"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              placeholder="What's this about?"
              required
              name="subject"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Your message..."
              required
              className="min-h-[150px] resize-none"
              name="message"
            />
          </div>

          <Button 
            type="submit" 
            disabled={isLoading}
          >
            <Send className="mr-2 h-4 w-4" />
            {isLoading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </main>
    </div>
  )
}