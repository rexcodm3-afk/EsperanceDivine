import { LanguageProvider } from "./i18n/LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Academics from "./components/Academics";
import SchoolLife from "./components/SchoolLife";
import Gallery from "./components/Gallery";
import News from "./components/News";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const isGalleryPage = window.location.pathname.replace(/\/+$/, "") === "/gallery";

  return (
    <LanguageProvider>
      <Navbar />
      <main>
        {isGalleryPage ? (
          <Gallery fullPage />
        ) : (
          <>
            <Hero />
            <About />
            <WhyChooseUs />
            <Academics />
            <SchoolLife />
            <Gallery />
            <News />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </LanguageProvider>
  );
}

export default App;
