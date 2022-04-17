import './gallery.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Gallery = () => {

    let settings = {
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 4000,
        cssEase: "linear",
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
                    slidesToScroll: 1,
                    dots:false
                }
            }
        ]
    };

    return (
        <div className='gallery-container'>
            <div className='gallery-content'>
                <div className='gallery1'></div>
                <div className='gallery2'></div>
                <Slider {...settings}>
                    <div>
                        <img src='images/gallery-img-01.jpg' alt='img1'></img>
                    </div>
                    <div>
                        <img src='images/gallery-img-02.jpg' alt='img2'></img>
                    </div>
                    <div>
                        <img src='images/gallery-img-03.jpg' alt='img3'></img>
                    </div>
                    <div>
                        <img src='images/gallery-img-04.jpg' alt='img4'></img>
                    </div>
                    <div>
                        <img src='images/gallery-img-05.jpg' alt='img5'></img>
                    </div>
                    <div>
                        <img src='images/gallery-img-06.jpg' alt='img6'></img>
                    </div>
                    <div>
                        <img src='images/gallery-img-07.jpg' alt='img7'></img>
                    </div>
                    <div>
                        <img src='images/gallery-img-08.jpg' alt='img8'></img>
                    </div>
                    <div>
                        <img src='images/gallery-img-09.jpg' alt='img9'></img>
                    </div>
                </Slider>
            </div>
        </div>
    )
}
export default Gallery;