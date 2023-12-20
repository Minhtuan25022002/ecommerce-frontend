import { Badge, Col } from 'antd';
import React from 'react';
import { WrapperHeader, WrapperHeaderAccount, WrapperHeaderTextSmall, WrapperTextHeader } from './style';
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
import { useNavigate } from 'react-router-dom';

const HeaderComponent = () => {
  const navigate = useNavigate()
  const handleNavigateLogin = () => {
    navigate('/sign-in')
  }
  return (
    <div>
      <WrapperHeader>
        <Col span={5}>
          <WrapperTextHeader>
            MINHTUANSHOP
          </WrapperTextHeader>
        </Col>
        <Col span={13}>
        <ButtonInputSearch
          size= "large"
          placeholder="input search text"
          type="dashed"
          textButton="Tìm kiếm"
          // onSearch={onSearch}
        />
        </Col>
        <Col span={6} style={{ display: 'flex', gap: '54px', alignItems: 'center' }}>
          <WrapperHeaderAccount>
            <UserOutlined style={{ fontSize: '30px', color: '#fff' }}/>
            <div onClick={handleNavigateLogin} style={{ cursor: 'pointer' }}>
              <WrapperHeaderTextSmall>Đăng nhập/Đăng ký</WrapperHeaderTextSmall>
              <div>
                <WrapperHeaderTextSmall>Tài khoản</WrapperHeaderTextSmall>
                <CaretDownOutlined style={{ color: '#fff' }}/>
              </div>
            </div>
          </WrapperHeaderAccount>
          <div>
            <Badge count={4} size='small'>
              <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff' }}/>
            </Badge>
            <WrapperHeaderTextSmall>Giỏ hàng</WrapperHeaderTextSmall>
          </div>
        </Col>
    </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
