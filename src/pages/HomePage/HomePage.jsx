import React from 'react';
import TypeProduct from '../../components/TypeProduct/TypeProduct';
import { WrapperContent, WrapperDivPage, WrapperListContent, WrapperPageHome, WrapperProduct, WrapperTypeProduct } from './style';
import SliderComponent from '../../components/SliderComponent/SliderComponent';
import slider1 from '../../assets/images/slider1.webp'
import slider2 from '../../assets/images/slider2.webp'
import slider3 from '../../assets/images/slider3.webp'

const HomePage = () => {
  const arr = ['TV', 'Tủ lạnh', 'Laptop,']
  return (
    <WrapperContent>
      <WrapperPageHome>
        <WrapperTypeProduct span={6}>
          <WrapperDivPage>
            <WrapperProduct>
              Danh mục
            </WrapperProduct>
            {arr.map((item, index) => {
              return (
                <TypeProduct name={item} key={index}/>
                )
              })}
            </WrapperDivPage>
        </WrapperTypeProduct>
        <WrapperListContent span={18}>
          {<SliderComponent arrImage={[slider1, slider2, slider3]}/>}
        </WrapperListContent>
      </WrapperPageHome>      
    </WrapperContent>
  );
};

export default HomePage;
