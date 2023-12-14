import React from 'react';
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';
import CardComponent from '../../components/CardComponent/CardComponent';
import { Col, Pagination, Row } from 'antd';
import { WrapperNavBar, WrapperProduct } from './style';

const TypeProductPage = () => {
  const onChange = () => {}
  return (
    <div style={{  padding: '0 120px', background: '#efefef' }}>
      <Row  style={{ flexWrap: 'nowrap', paddingTop: '10px' }}>
          <WrapperNavBar span={6}>
              <NavbarComponent />
          </WrapperNavBar>
          <Col span={18} style={{ background: '#fff', borderRadius: '6px' }}>
              <WrapperProduct>
                  <CardComponent />
                  <CardComponent />
                  <CardComponent />
                  <CardComponent />
                  <CardComponent />
                  <CardComponent />
                  <CardComponent />
                  <CardComponent />
                  <CardComponent />
                  <CardComponent />
                  <CardComponent />
                  <CardComponent />
                  <CardComponent />
                  <CardComponent />
              </WrapperProduct>
              <Pagination defaultCurrent={2} total={500} onChange={onChange} style={{ textAlign: 'center', marginTop: '10px' }} />
          </Col>
      </Row>
    </div>
  );
};

export default TypeProductPage;
