import "./App.scss";
import { useEffect, useRef } from 'react';
import { Contact } from "../components/Contact";
import { Home } from "../components/Home";
import { About } from "../components/About";
import { Navigation } from "../components/Navigation";
import Services from "../components/Services";

function App() {

  const navBar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      const navbar = navBar.current;

      if (navbar) {
        if (window.scrollY > 140) {
          navbar.classList.add('bg-black');
          navbar.classList.add('fixed-top');
          navbar.classList.remove('stay-top');
        } else {
          navbar.classList.remove('bg-black');
          navbar.classList.remove('fixed-top');
          navbar.classList.add('stay-top');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* <!-- Navbar --> */}
      <Navigation navBar={navBar}></Navigation>

      {/* <!-- Home --> */}
      <Home />

      {/* <!-- About Us --> */}
      <section className="about cover section-padding" >
        <About />
      </section>

      {/* <!-- Services --> */}
      <section className="service cover section-padding">
        <Services />
      </section>

      {/* <!-- Contact Us --> */}
      <section className="contact cover">
        <Contact />
      </section>

      
    </>
  );
}

export default App;
