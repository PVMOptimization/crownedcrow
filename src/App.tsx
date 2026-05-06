import StatusBar from './components/StatusBar'
import Masthead from './components/Masthead'
import Manifesto from './components/Manifesto'
import Artists from './components/Artists'
import Gallery from './components/Gallery'
import Ritual from './components/Ritual'
import Words from './components/Words'
import Visit from './components/Visit'
import Footer from './components/Footer'
import StickyCTA from './components/StickyCTA'

export default function App() {
  return (
    <>
      <StatusBar />
      <Masthead />
      {/* Manifesto sits HIGH — before features, before any list of services. */}
      <Manifesto />
      <Artists />
      <Gallery />
      {/* Booking ritual sits in the middle, not at the end — it's the act, not the closer. */}
      <Ritual />
      <Words />
      <Visit />
      <Footer />
      <StickyCTA />
    </>
  )
}
