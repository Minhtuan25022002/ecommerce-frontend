import { Image } from "antd";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import InputForm from "../../components/InputForm/InputForm";
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from "./style";
import Logo from '../../assets/images/Logo.webp'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons';
import { useState } from "react";

function SignInPage() {
    const [isShowPassword, setIsShowPassword] = useState(false);
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0, 0, 0, 0.53)', height: '100vh' }}>
            <div style={{ display: 'flex', width: '800px', height: '445px', borderRadius: '6px', background: '#fff' }}>
                <WrapperContainerLeft>
                    <h1 style={{ fontSize: '35px' }}>Xin chào</h1>
                    <p style={{ fontSize: '14px' }}>Đăng nhập hoặc Tạo tài khoản</p>
                    <InputForm style={{ marginBottom:'10px' }} placeholder='abc@gmail.com'/>
                    <div style={{ position: 'relative' }}>
                        <span style={{
                            zIndex: 10,
                            position: 'absolute',
                            top: '4px',
                            right: '8px'
                        }}
                    > {
                        isShowPassword ? (
                            <EyeFilled />
                        ) : (
                            <EyeInvisibleFilled />
                        )
                    }
                        </span>
                    <InputForm placeholder='password' type={isShowPassword ? 'text' : 'password'}/>
                    </div>
                    <ButtonComponent
                        danger
                        styleButton={{ width: '100%',height: '50px', margin: '26px 0 10px' }}
                        styleText={{ fontSize: '20px' }}
                        size="big"
                        type="primary"
                        textButton="Đăng nhập">
                    </ButtonComponent>
                    <p><WrapperTextLight>Quên mật khẩu?</WrapperTextLight></p>
                    <p>Chưa có tài khoản? <WrapperTextLight>Tạo tài khoản</WrapperTextLight></p>
                </WrapperContainerLeft>
                <WrapperContainerRight>
                    <Image src={Logo} preview={false} alt="image-logo" style={{ width: '203px', height: '203px' }}/>
                    <h4>Mua sắm tại MinhTuanShop</h4>
                </WrapperContainerRight>
            </div>
        </div>
    );
}

export default SignInPage;