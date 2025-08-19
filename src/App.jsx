import 'aos/dist/aos.css'; 
import AOS from "aos"; /*Animate On Scroll*/
import React, { useEffect } from "react";
import Hero from "./components/Hero";
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, /*Thiết lập animation 1s*/
    });
  },[]);
  return (
    <main className="bg-gray-950">
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </main>
  );
}
