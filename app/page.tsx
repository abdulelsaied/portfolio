import Intro from "@/components/intro";
import Divider from "@/components/divider";
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Experience from "@/components/experience";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <Divider />
      <Projects />      
      <Experience />
      <Skills />
      <Contact />
    </main>
  )
}
