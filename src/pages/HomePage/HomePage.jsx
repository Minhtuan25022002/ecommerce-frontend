import React from 'react';
import TypeProduct from '../../components/TypeProduct/TypeProduct';
import { WrapperButtonMore, WrapperContent, WrapperDivPage, WrapperListContent, WrapperPageHome, WrapperProduct, WrapperTypeProduct } from './style';
import SliderComponent from '../../components/SliderComponent/SliderComponent';
import slider1 from '../../assets/images/slider1.webp'
import slider2 from '../../assets/images/slider2.webp'
import slider3 from '../../assets/images/slider3.webp'
import CardComponent from '../../components/CardComponent/CardComponent';

const HomePage = () => {
  const arr = ['TV', 'Tủ lạnh', 'Laptop']
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
          <SliderComponent arrImage={[slider1, slider2, slider3]}/>
          <div style={{ display: 'flex', marginTop: '20px', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <WrapperButtonMore textButton="Xem thêm" type="outline" styleButton={{
              border: '1px solid rgb(10, 104, 255)', color: 'rgb(10, 104, 255)',
              width: '240px', height: '38px', borderRadius: '4px'
            }}/>
          </div>
        </WrapperListContent>
      </WrapperPageHome>      
    </WrapperContent>
  );
};

export default HomePage;
