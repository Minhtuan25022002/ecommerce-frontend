import { Col, Image, Row } from "antd";
import React from "react";
import imageProduct from '../../assets/images/slider7bigtest.webp'
import { WrapperAddressProduct, WrapperBtnBuy, WrapperInputNumber, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQuantityProduct, WrapperStyleCol, WrapperStyleImageSmall, WrapperStyleNameProduct, WrapperStyleTextSell } from "./style";
import { StarFilled, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import imageProductSmall from '../../assets/images/slider8smalltest.webp'
import ButtonComponent from "../ButtonComponent/ButtonComponent";

function ProductDetailComponent() {
    const onChange = () => {}
    return ( 
        <Row style={{ padding: '16px', display: 'flex' }}>
            <Col span={9} style={{ background: '#fff', marginRight: '10px', borderRadius: '6px' }}>
                <div style={{ padding: '10px' }}>
                    <Image src={imageProduct} alt="image product" preview={false}/>
                    <Row style={{ paddingTop: '10px', justifyContent: 'space-between' }}>
                        <WrapperStyleCol span={4}>
                            <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false} />
                        </WrapperStyleCol>
                        <WrapperStyleCol span={4}>
                            <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false} />
                        </WrapperStyleCol>
                        <WrapperStyleCol span={4}>
                            <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false} />
                        </WrapperStyleCol>
                        <WrapperStyleCol span={4}>
                            <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false} />
                        </WrapperStyleCol>
                        <WrapperStyleCol span={4}>
                            <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false} />
                        </WrapperStyleCol>
                        {/* <WrapperStyleCol span={4}>
                            <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false} />
                        </WrapperStyleCol> */}
                    </Row>
                </div>
            </Col>
            <Col span={12}>
                <div style={{ padding: '16px', background: '#fff', borderRadius: '6px' }}>
                    <WrapperStyleNameProduct>Nồi cơm điện Sunhouse SHD8606 1.8L - Hàng chính hãng</WrapperStyleNameProduct>
                    <StarFilled style={{ fontSize: '12px', color: 'yellow' }}/>
                    <StarFilled style={{ fontSize: '12px', color: 'yellow' }}/>
                    <StarFilled style={{ fontSize: '12px', color: 'yellow' }}/>
                    <WrapperStyleTextSell> | Đã bán 1000+</WrapperStyleTextSell>
                    <WrapperPriceProduct>
                        <WrapperPriceTextProduct>600.000đ</WrapperPriceTextProduct>
                    </WrapperPriceProduct>
                    <WrapperAddressProduct>
                        <span>Giao đến </span>
                        <span className="address">Q. 1, P. Bến Nghé, Hồ Chí Minh </span> -  
                        <span className="change-address"> Đổi địa chỉ</span>
                    </WrapperAddressProduct>
                    <WrapperQuantityProduct>
                        <div style={{ marginBottom: '6px' }}>Số lượng</div>
                        <div style={{ display: 'flex', gap: '5px' }}>
                            <ButtonComponent icon={<PlusOutlined  style={{ marginLeft: '5px' }}/>} />
                            <WrapperInputNumber defaultValue={1} onChange={onChange} />
                            <ButtonComponent icon={<MinusOutlined style={{ marginLeft: '5px' }} />} />
                        </div>
                    </WrapperQuantityProduct>
                    <div style={{ display: 'inline-flex', gap: '12px', flexDirection: 'column' }}>
                        <ButtonComponent 
                            danger
                            styleButton={{ width: '200px' }} 
                            size="big" 
                            type="primary"
                            textButton="Chọn Mua">
                        </ButtonComponent>
                        <WrapperBtnBuy 
                            styleButton={{ width: '200px', borderColor: 'rgb(10, 104, 255)'}} 
                            size="big"
                            textButton="Mua trước trả sau"
                            styleText={{ color: 'rgb(10, 104, 255)' }}
                            >
                        </WrapperBtnBuy>
                    </div>
                </div>
            </Col>
        </Row>
    );
}

export default ProductDetailComponent;