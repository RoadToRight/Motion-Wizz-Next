
import LogoSlider from '@/components/LogoSlider'
import Navbar from '@/components/Navbar'
import ThreeHero from '@/components/ThreeHero'
import { lazy, Suspense } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
const Footer = lazy(() => import("@/components/Footer"))
const Portfolio = lazy(() => import("@/components/Portfolio"))
const Contact = lazy(() => import("@/components/Contact"))
const Testimonial = lazy(() => import("@/components/Testimonial"))
const Faqs = lazy(() => import("@/components/Faqs"))
const Hero = lazy(() => import("@/components/Hero"))

export default function Home() {
  return (
    <div>
      <Navbar />
      <ThreeHero />
      <LogoSlider />

      <Suspense fallback={<div style={{ textAlign: 'center', padding: '50px' }}>Loading...</div>}>
        <Hero />
        <Portfolio />
        <Testimonial />
        <Faqs />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}
