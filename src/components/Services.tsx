import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "react-bootstrap/Card";

const Services = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow:3,
        slidesToScroll: 3,
        arrows: false,
        className: 'slider',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ],

      };
  return (
    
    <div id="service" className=" container ">
        <Slider {...settings}>
            <Card className="slider-item bg-black text-white">
                <Card.Img src="/src/assets/food.jpeg" className="card-img"/>
                <Card.ImgOverlay className="align-content-end">
                    <Card.Body>
                        <Card.Title className="card-title">Deluxe <span>Cakes</span></Card.Title>
                        <div className="card-line"></div>
                        <Card.Text className="card-hidden-text">Explore</Card.Text>
                    </Card.Body>
                </Card.ImgOverlay>
            </Card>
            <Card className="slider-item bg-black text-white">
                <Card.Img src="/src/assets/food.jpeg" className="card-img"/>
                <Card.ImgOverlay className="align-content-end">
                    <Card.Body>
                        <Card.Title className="card-title">Deluxe <span>Cakes</span></Card.Title>
                        <div className="card-line"></div>
                        <Card.Text className="card-hidden-text">Explore</Card.Text>
                    </Card.Body>
                </Card.ImgOverlay>
            </Card>
            <Card className="slider-item bg-black text-white">
                <Card.Img src="/src/assets/food.jpeg" className="card-img"/>
                <Card.ImgOverlay className="align-content-end">
                    <Card.Body>
                        <Card.Title className="card-title">Deluxe <span>Cakes</span></Card.Title>
                        <div className="card-line"></div>
                        <Card.Text className="card-hidden-text">Explore</Card.Text>
                    </Card.Body>
                </Card.ImgOverlay>
            </Card>
            <Card className="slider-item bg-black text-white">
                <Card.Img src="/src/assets/food.jpeg" className="card-img"/>
                <Card.ImgOverlay className="align-content-end">
                    <Card.Body>
                        <Card.Title className="card-title">Deluxe <span>Cakes</span></Card.Title>
                        <div className="card-line"></div>
                        <Card.Text className="card-hidden-text">Explore</Card.Text>
                    </Card.Body>
                </Card.ImgOverlay>
            </Card>
            <Card className="slider-item bg-black text-white">
                <Card.Img src="/src/assets/food.jpeg" className="card-img"/>
                <Card.ImgOverlay className="align-content-end">
                    <Card.Body>
                        <Card.Title className="card-title">Deluxe <span>Cakes</span></Card.Title>
                        <div className="card-line"></div>
                        <Card.Text className="card-hidden-text">Explore</Card.Text>
                    </Card.Body>
                </Card.ImgOverlay>
            </Card>
            <Card className="slider-item bg-black text-white">
                <Card.Img src="/src/assets/food.jpeg" className="card-img"/>
                <Card.ImgOverlay className="align-content-end">
                    <Card.Body>
                        <Card.Title className="card-title">Deluxe <span>Cakes</span></Card.Title>
                        <div className="card-line"></div>
                        <Card.Text className="card-hidden-text">Explore</Card.Text>
                    </Card.Body>
                </Card.ImgOverlay>
            </Card>
        </Slider>
    </div>
  )
}

export default Services;