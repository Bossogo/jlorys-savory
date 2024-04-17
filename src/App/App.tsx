import "./App.scss";
import { useEffect, useRef } from 'react';
import balloon from '/src/assets/balloon.jpeg';

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
    <nav className="navbar navbar-expand-md ps-lg-5 pe-lg-5 navbar-dark stay-top" ref={navBar}>
      <div className="container-fluid">
      <a className="navbar-brand" href="./" style= {{fontFamily: 'Brush Script, cursive', color: 'palegoldenrod'}}>
        <p style= {{position: 'relative'}}>
          <span className="display-5"> 
            <span className="display-3">J</span>lory 
          </span>
          <br/>
          <span className="sub-text fs-200"> Savory</span>
        </p></a>

        <button className="navbar-toggler collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className=" navbar-collapse justify-content-end collapse" id="navbarCollapse">
          <ul className="navbar-nav align-items-center me-lg-4 me-md-2">
            <li className="nav-item">
              <a className="nav-link" href="#section1">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#section2">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#section3">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div className="container-fluid bg-image p-0" id="section1">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-md-6">
            <div className='position-relative h-100'>
              <div className="desc w-100 p-3 pt-4 px-sm-4">
              <h5 className='ms-1'>Jlory Savory</h5>
              <h1 className='mb-3'>Your Plans, Our Passion</h1>
              <p>Top tier event management as well as cuisine for any almost type of event</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- About Us --> */}
    <section className="about cover" >
      <div className='container-fluid h-100' id="section2">
        <div className='row h-100 m-0'>
          <div className='col offset-2 offset-md-0 col-8 col-md-6'>
            <div className='section-subtitle'>About Us</div>
            <div className='section-heading'>Jlory <span>Savory</span>
            </div>
            <div>
              <p>Jlory's Savory is your go-to partner for top-notch event planning and management services. With over 5 years of industry experience, we bring a wealth of knowledge and creativity to every project. From corporations and trade associations to non-profits and individuals, our diverse client base trusts us to exceed their expectations and deliver unforgettable events.
We pride ourselves on our professionalism and accountability. Let us help make your next event a huge success. Contact Jlory's Savory today.</p>
            </div>
            <ul className="list-unstyled about-list mb-3">
                <li>
                    <div className="about-list-icon"> <span className="ti-check"></span> </div>
                    <div className="about-list-text">
                        <p>5 Years of Experience</p>
                    </div>
                </li>
                <li>
                    <div className="about-list-icon"> <span className="ti-check"></span> </div>
                    <div className="about-list-text">
                        <p>30+ Events Planned</p>
                    </div>
                </li>
            </ul>

            <hr className='border'></hr>

            <button
              type="button"
              className="btn btn-outline-dark btn-lg d-none d-md-block"
            >
              Find out more
            </button>
            
          </div>
          <div className='col offset-2 col-8 mt-3 mt-md-0 col-md-5 offset-md-1'>
            <div className='about-img'>
              <div className='img'>
                <img className='img-fluid' src={balloon} alt = ""/>
              </div>
            </div>
          </div>
        </div>  
      </div>
    </section>

    <section className="contact" id="section3">

    </section>
  </>
  );
}

export default App;
