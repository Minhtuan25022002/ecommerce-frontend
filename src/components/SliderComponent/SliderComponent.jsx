import { Image } from "antd";
import React from "react";
import { WrapperSliderStyle } from "./style";

const SliderComponent = ({arrImage}) => {
  const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
  };
    return (
      <WrapperSliderStyle {...settings}>
        {arrImage.map((image, index) => {
          return (
            <Image src={image} alt="slider" key={index} preview={false} width='100%' height='274px'/>
          )
        })}
      </WrapperSliderStyle>
    );
}

export default SliderComponent;

