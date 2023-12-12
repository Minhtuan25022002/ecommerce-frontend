import { Col } from 'antd';
import React from 'react';
import { WrapperHeader, WrapperHeaderAccount, WrapperHeaderTextSmall, WrapperTextHeader } from './style';
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';

const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader>
        <Col span={4}>
          <WrapperTextHeader>
            MINHTUANSHOP
          </WrapperTextHeader>
        </Col>
        <Col span={14}>
        <ButtonInputSearch
          placeholder="input search text"
          type="dashed"
          textButton="Tìm kiếm"
          // onSearch={onSearch}
        />
        </Col>
        <Col span={6} style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <WrapperHeaderAccount>
            <UserOutlined style={{ fontSize: '30px', color: '#fff' }}/>
            <div>
              <WrapperHeaderTextSmall>Đăng nhập/Đăng ký</WrapperHeaderTextSmall>
              <div>
                <WrapperHeaderTextSmall>Tài khoản</WrapperHeaderTextSmall>
                <CaretDownOutlined style={{ color: '#fff' }}/>
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
