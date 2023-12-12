import React from 'react';
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperImageStyle, WrapperPriceText, WrapperReportText } from './style';
import { StarFilled } from '@ant-design/icons';
import logo from '../../assets/images/slider4.webp'

const CardComponent = () => {
  return (
    <WrapperCardStyle
        hoverable
        style={{ width: 200 }}
        bodyStyle={{ padding: '10px' }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
        <WrapperImageStyle src={logo} alt={logo}/>
        <StyleNameProduct>Iphone</StyleNameProduct>
        <WrapperReportText>
            <span style={{ marginRight: '4px' }}>
                <span>4.69</span> <StarFilled style={{ fontSize: '12px', color: 'yellow' }}/>
            </span>
            <span> | Đã bán 1000+</span>
        </WrapperReportText>
        <WrapperPriceText>
            1.000.000đ
            <WrapperDiscountText>
                -5%
            </WrapperDiscountText>
        </WrapperPriceText>    
  </WrapperCardStyle>
  );
};

export default CardComponent;
