
import LogoSlider from '@/components/LogoSlider'
import Navbar from '@/components/Navbar'
import ThreeHero from '@/components/ThreeHero'
import dynamic from 'next/dynamic'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
const Hero = dynamic(() => import("@/components/Hero"))
const Portfolio = dynamic(() => import("@/components/Portfolio"))
const Testimonial = dynamic(() => import("@/components/Testimonial"))
const Faqs = dynamic(() => import("@/components/Faqs"))
const Contact = dynamic(() => import("@/components/Contact"))
const Footer = dynamic(() => import("@/components/Footer"))


export default function Home() {
  return (
    <div>
      <Navbar />
      <ThreeHero />
      <LogoSlider />

      <Hero />
      <Portfolio />

      <Faqs />
      <Testimonial />

      <Contact />

      <Footer />
    </div>
  );
}
