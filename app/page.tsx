import { Metadata } from 'next';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Testimonial from './sections/Testimonial';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import "./globals.css"

export const metadata: Metadata = {
  title: 'Tata Book',
  description: "India's most trusted betting website",
};

export default function Home() {
  return (
    <html>
      <body>
        <Navbar/>
        <Hero/>
        <About/>
        <Testimonial/>
        <Projects/>
        <Contact/>
      </body>
  </html>
  )
}
