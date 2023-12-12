import { Col } from 'antd';
import React from 'react';
import { WrapperHeader, WrapperHeaderAccount, WrapperHeaderTextSmall, WrapperTextHeader } from './style';
import Search from 'antd/es/transfer/search';
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';

const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader gutter={16} style={{alignItems: 'center'}}>
        <Col span={6}>
          <WrapperTextHeader>
            MINHTUANSHOP
          </WrapperTextHeader>
        </Col>
        <Col span={12}>
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          // onSearch={onSearch}
        />
        </Col>
        <Col span={6} style={{ display: 'flex', gap: '20px' }}>
          <WrapperHeaderAccount>
            <UserOutlined style={{ fontSize: '30px', color: '#fff' }}/>
            <div>
              <WrapperHeaderTextSmall>Đăng nhập/Đăng ký</WrapperHeaderTextSmall>
              <div>
                <WrapperHeaderTextSmall>Tài khoản</WrapperHeaderTextSmall>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperHeaderAccount>
          <div>
            <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff' }}/>
            <WrapperHeaderTextSmall>Giỏ hàng</WrapperHeaderTextSmall>
          </div>
        </Col>
    </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
