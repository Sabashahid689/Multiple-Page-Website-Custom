import Hero from "@/components/Hero";
import About from "./about/page";
import Watches from "./watches/page";
import Contact from "./contact/page";
export default function Home() {
  return (
    <div>
        <Hero/>
       <Watches/>
       <About/>
       <Contact/>
    </div>
  )
}