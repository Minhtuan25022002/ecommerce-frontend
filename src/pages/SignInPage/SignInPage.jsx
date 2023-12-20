import { Image } from "antd";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import InputForm from "../../components/InputForm/InputForm";
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from "./style";
import Logo from '../../assets/images/Logo.webp'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as UserServices from '../../services/UserService'
import { useMutationHooks } from "../../hooks/useMutationHook";
import Loading from "../../components/LoadingComponent/LoadingComponent";

function SignInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);

    const navigate = useNavigate()

    const mutation = useMutationHooks(
        data => UserServices.loginUser(data)
    )

    const { data, isPending } = mutation

    const handleNavigateSignUp = () => {
        navigate('/sign-up')
    }

    const handleOnchangeEmail = (value) => {
        setEmail(value)
    }

    const handleOnchangePassword = (value) => {
        setPassword(value)
    }

    const handleSignIn = () => {
        mutation.mutate({
            email,
            password
        })
        console.log('sign-up', email, password);
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0, 0, 0, 0.53)', height: '100vh' }}>
            <div style={{ display: 'flex', width: '800px', height: '445px', borderRadius: '6px', background: '#fff' }}>
                <WrapperContainerLeft>
                    <h1 style={{ fontSize: '35px' }}>Xin chào</h1>
                    <p style={{ fontSize: '14px' }}>Đăng nhập hoặc Tạo tài khoản</p>
                    <InputForm style={{ marginBottom:'10px' }} placeholder='abc@gmail.com' value={email} onChange={handleOnchangeEmail}/>
                    <div style={{ position: 'relative' }}>
                        <span 
                        onClick={() => setIsShowPassword(!isShowPassword)}
                        style={{
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
                    <InputForm placeholder='password' type={isShowPassword ? 'text' : 'password'}
                    value={password} onChange={handleOnchangePassword}/>
                    </div>
                    {data?.status === 'ERR' && <span style={{ color: 'red' }}>{data?.message}</span>}
                    <Loading isLoading={isPending}>
                        <ButtonComponent
                            disabled={!email.length || !password.length}
                            onClick={handleSignIn}
                            styleButton={{ width: '100%',height: '50px', margin: '26px 0 10px', background: '#ff4d4f' }}
                            styleText={{ fontSize: '20px' }}
                            size="big"
                            type="primary"
                            textButton="Đăng nhập">
                        </ButtonComponent>
                    </Loading>
                    <p><WrapperTextLight>Quên mật khẩu?</WrapperTextLight></p>
                    <p>Chưa có tài khoản? <WrapperTextLight onClick={handleNavigateSignUp}>Tạo tài khoản</WrapperTextLight></p>
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