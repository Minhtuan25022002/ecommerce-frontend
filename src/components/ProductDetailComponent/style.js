import { Col, Image, InputNumber } from "antd";
import styled from "styled-components";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

export const WrapperStyleImageSmall = styled(Image)`
    
`

export const WrapperStyleCol = styled(Col)`
    flex-basis: unset;
    display: flex;
`

export const WrapperStyleNameProduct = styled.h1`
    margin: 0px;
    color: rgb(39, 39, 42);
    font-size: 20px;
    font-weight: 500;
    line-height: 150%;
    word-break: break-word;
    white-space: break-spaces;
    padding-bottom: 12px;
`

export const WrapperStyleTextSell = styled.span`
    font-size: 15px;
    line-height: 24px;
    color: rgb(120, 120, 120);
`

export const WrapperPriceProduct = styled.div`
    // background: rgb(250, 250, 250);
    border-radius: 4px;
`

export const WrapperPriceTextProduct = styled.h1`
    font-size: 24px;
    font-weight: 600;
    line-height: 150%;
    padding: 10px;
    margin-top: 10px;
`

export const WrapperAddressProduct = styled.div`
    span.address {
        text-decoration: underline;
        font-size: 18px;
        line-height: 24px;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    span {
        font-size: 16px;
    }
    span.change-address {
        color: rgb(11, 116, 229);
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
        flex-shrink: 0;
    }
`

export const WrapperQuantityProduct = styled.div`
    font-size: 24px;
    font-weight: 600;
    line-height: 150%;
    padding: 10px;
    margin: 10px 0 20px;
`   
export const WrapperInputNumber = styled(InputNumber)`
    &.ant-input-number {
        width: 50px;
        input {
            margin-left: 8px;
        }
    }
`

export const WrapperBtnBuy = styled(ButtonComponent)`
    &:hover {
        background-color: #1677ff85;
    }
`