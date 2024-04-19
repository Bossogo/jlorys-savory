import balloon from '/src/assets/about_image.jpeg';

export default function About() {
  return (<div className='container' id="about">
    <div className='row h-100 m-0'>
      <div className='col col-12 col-md-6'>
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
              <p>14 Years of Experience</p>
            </div>
          </li>
          <li>
            <div className="about-list-icon"> <span className="ti-check"></span> </div>
            <div className="about-list-text">
              <p>Over A Thousand Events Planned</p>
            </div>
          </li>
        </ul>

        <hr className='border'></hr>

        <button type="button" className="btn btn-outline-dark mt-3 btn-lg d-none d-md-block">
          <a href="#contact">
          <span>Find out more</span>
          </a>
        </button>

      </div>
      <div className='col col-12 mt-3 mt-md-0 col-md-5 offset-md-1'>
        <div className='about-img'>
          <div className='img'>
            <img className='img-fluid' src={balloon} alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>);
}
