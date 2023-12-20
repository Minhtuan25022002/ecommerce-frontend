import { Image } from "antd";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import InputForm from "../../components/InputForm/InputForm";
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from "./style";
import Logo from '../../assets/images/Logo.webp'
import { useState } from "react";
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import * as UserServices from '../../services/UserService'
import { useMutationHooks } from "../../hooks/useMutationHook";
import Loading from "../../components/LoadingComponent/LoadingComponent";


function SignUpPage() {
    const [email, setEmail] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate()

    const handleNavigateLogin = () => {
        navigate('/sign-in')
    }

    const mutation = useMutationHooks(
        data => UserServices.signUpUser(data)
    )

    const { data, isPending } = mutation

    const handleOnchangeEmail = (value) => {
        setEmail(value)
    }

    const handleOnchangePassword = (value) => {
        setPassword(value)
      }

    const handleOnchangeConfirmPassword = (value) => {
        setConfirmPassword(value)
    }

    const handleSignUp = () => {
        mutation.mutate({
            email, password, confirmPassword
        })
        console.log('sign-up', email, password, confirmPassword);
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
                            right: '8px',
                            cursor: 'pointer'
                        }}
                    > {
                        isShowPassword ? (
                            <EyeFilled />
                        ) : (
                            <EyeInvisibleFilled />
                        )
                    }
                        </span>
                    <InputForm style={{ marginBottom:'10px' }} placeholder='Password' type={isShowPassword ? 'text' : 'password'}
                    value={password} onChange={handleOnchangePassword}/>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <span 
                        onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
                        style={{
                            zIndex: 10,
                            position: 'absolute',
                            top: '4px',
                            right: '8px',
                            cursor: 'pointer'
                        }}
                    > {
                        isShowConfirmPassword ? (
                            <EyeFilled />
                        ) : (
                            <EyeInvisibleFilled />
                        )
                    }
                        </span>
                    <InputForm placeholder='Confirm password' type={isShowConfirmPassword ? 'text' : 'password'}
                    value={confirmPassword} onChange={handleOnchangeConfirmPassword}/>
                    </div>
                    {data?.status === 'ERR' && <span style={{ color: 'red' }}>{data?.message}</span>}
                    <Loading isLoading={isPending}>
                        <ButtonComponent
                            disabled={!email.length || !password.length || !confirmPassword.length}
                            onClick={handleSignUp}
                            styleButton={{ width: '100%',height: '50px', margin: '26px 0 10px', background: '#ff4d4f' }}
                            styleText={{ fontSize: '20px' }}
                            size="big"
                            type="primary"
                            textButton="Đăng ký">
                        </ButtonComponent>
                    </Loading>
                    <p>Bạn đã có tài khoản? <WrapperTextLight onClick={handleNavigateLogin}>Đăng nhập</WrapperTextLight></p>
                </WrapperContainerLeft>
                <WrapperContainerRight>
                    <Image src={Logo} preview={false} alt="image-logo" style={{ width: '203px', height: '203px' }}/>
                    <h4>Mua sắm tại MinhTuanShop</h4>
                </WrapperContainerRight>
            </div>
        </div>
    );
}

export default SignUpPage;