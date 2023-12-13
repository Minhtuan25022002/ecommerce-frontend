import React from 'react';
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';
import CardComponent from '../../components/CardComponent/CardComponent';
import { Col, Row } from 'antd';

const TypeProductPage = () => {
  return (
    <Row  style={{ padding: '0 120px', background: '#efefef', flexWrap: 'nowrap', paddingTop: '10px' }}>
        <Col span={6} style={{ background: '#fff', marginRight: '10px', padding: '10px', borderRadius: '6px' }}>
            <NavbarComponent />
        </Col>
        <Col span={18} style={{ background: '#fff', borderRadius: '6px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' , padding: '16px'}}>
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
            </div>
        </Col>
    </Row>
  );
};

export default TypeProductPage;
