import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import Ablauf from './components/Ablauf'
import Vorteile from './components/Vorteile'
import Kontakt from './components/Kontakt'
import Footer from './components/Footer'
import StickyMobileCTA from './components/StickyMobileCTA'

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <Ablauf />
      <Vorteile />
      <Kontakt />
      <Footer />
      <StickyMobileCTA />
    </>
  )
}
