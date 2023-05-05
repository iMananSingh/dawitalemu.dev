import { Metadata } from 'next';
import Navbar from './components/navBar';
import Contact from './sections/Contact';
import Experience from './sections/Experience';
import Hero from './sections/Hero';
import Projects from './sections/Projects';

export const metadata: Metadata = {
  title: 'Dawit Alemu',
  description: 'Portfolio By Dawit Alemu',
};

export default function Home(){

    return (
      <html>
    <body>    
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </body>
    </html>
    )
}