import { Helmet } from 'react-helmet'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import IronSharpensIron from './components/IronSharpensIron'
import Portfolio from './components/Portfolio'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import BlogPreview from './components/BlogPreview'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Helmet>
        <title>Insimbi Ilola Insimbi | Leadership & Business Development</title>
        <meta name="description" content="Empowering professionals and entrepreneurs through leadership coaching, corporate training, and the Iron Sharpens Iron event platform." />
        <meta name="keywords" content="Leadership development South Africa, Business coaching, Corporate training, Leadership coaching, Team building services" />
        <meta name="author" content="Insimbi Ilola Insimbi" />
        <meta property="og:title" content="Insimbi Ilola Insimbi | Leadership & Business Development" />
        <meta property="og:description" content="Empowering professionals and entrepreneurs through leadership coaching, corporate training, and the Iron Sharpens Iron event platform." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Insimbi Ilola Insimbi | Leadership & Business Development" />
        <meta name="twitter:description" content="Empowering professionals and entrepreneurs through leadership coaching, corporate training, and the Iron Sharpens Iron event platform." />
        <link rel="canonical" href="https://insimbi.co.za" />
      </Helmet>

      <div className="font-body">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <IronSharpensIron />
        <Portfolio />
        <Gallery />
        <Contact />
        <BlogPreview />
        <Footer />
      </div>
    </>
  )
}