import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css'
import NextArrow from '../../assets/icons/NextArrow';
import PrevArrow from '../../assets/icons/PrevArrow';
import { Link } from 'react-router-dom';
const settings = {
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow fill="white" width={24} />,
    prevArrow: <PrevArrow fill="white" width={24} />
};

const Slide = () => {
    return (
        <div>
            <Slider {...settings}>
                <div className="first-slide">
                    <div className="first-slide-info">
                        <h2>WHAT&apos;S THE GREATEST SHIP DESIGN IN STAR WARS?</h2>
                        <p>Learn about the secrets of star wars ships.</p>
                        <Link to='/starships'><button>LEARN MORE</button></Link>
                    </div>
                    <img className='slide-img' src="https://star-wars-clone.netlify.app/static/media/thumb-1920-107763.c5f26469faffc3d8b26d.jpg" alt="" />
                </div>
                <div className="second-slide">
                    <div className="second-slide-info">
                        <h2>STAR WARS INSIDE INTEL: THE PILOTS</h2>
                        <p>Jump into the cockpit for a dogfight of words.</p>
                        <Link to='/actors'><button>MORE DETAILS</button></Link>
                    </div>
                    <img className='slide-img' src="https://star-wars-clone.netlify.app/static/media/thumb-1920-923364.c9b18c268e4e7c71a2e3.jpg" alt="" />

                </div>
                <div className="third-slide">
                    <div className="third-slide-info">
                        <h2>HEROES OF STAR WARS</h2>
                        <p>We are all the Republic. Meet the actors behind-the-scenes.</p>
                        <Link to='/actors'><button>READ NOW</button></Link>
                    </div>
                    <img className='slide-img' src="https://star-wars-clone.netlify.app/static/media/thumb-1920-665427.7ceba0a50e19e90b6609.jpg" alt="" />

                </div>
            </Slider>
        </div>
    );
};

export default Slide;

