import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
};

const ProductImages = (props) => {

    const { ImagesList } = props


    return (
        <Slider {...settings} className="slider-container">
            {ImagesList.map(eachImage => <img key={eachImage.id} src={eachImage.src} style={{height: eachImage.height, width: eachImage.width}}  />)}
        </Slider>

    )
}

export default ProductImages
