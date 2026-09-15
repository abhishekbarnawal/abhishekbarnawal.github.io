import Header from "@/components/header";
import Intro from "@/components/intro";
import About from "@/components/about";
import Projects from "@/components/projects";
import DesignProcess from "@/components/design-process";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import SectionDivider from "@/components/section-divider";

export default function Home() {
  return (
    <main>
      <Header />
      {/* <SectionDivider/> */}
      <Intro />
      <SectionDivider/>
      <Projects />
      <SectionDivider/>
      <About />
      <SectionDivider/>
      <DesignProcess />
      <SectionDivider/>
      <Skills />
      <SectionDivider/>
      <Experience />
      <SectionDivider/>
      <Contact />
      <SectionDivider/>
    </main>
  );
}