import { Row, Col } from "antd";
import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const WrapperPageHome = styled(Row)`
    padding: 10px 120px;
    background-color: #efefef;
    border-radius: 6px;
    flex-wrap: nowrap;
`

export const WrapperContent = styled.div`
    display: flex;
    justify-content: space-between;
`

export const WrapperProduct = styled.div`
    margin-bottom: 8px;
    padding-left: 16px;
    font-weight: 700;
    font-size: 14px;
    line-height: 150%;
    color: rgb(39, 39, 42);
`

export const WrapperTypeProduct = styled(Col)`
    width: 230px;
    margin-right: 10px;
    height: fit-content;
    position: sticky;
    top: 16px;
    display: flex;
    flex-direction: column;
    color: rgb(56, 56, 61);
    font-size: 14px;
    line-height: 20px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    background-color: #fff;
`

export const WrapperDivPage = styled.div`
    position: relative;
    display: flex;
    margin-bottom: 16px;
    padding: 12px 8px;
    flex-direction: column;
    background-color: rgb(255, 255, 255);
    border-radius: 8px;
`

export const WrapperListContent = styled(Col)`
    gap: 16px;
    padding: 16px;
    background-color: #fff;
    height: 100%;
`

export const WrapperButtonMore = styled(ButtonComponent) `
    &:hover {
        background-color: rgba(0, 96, 255, 0.12);
    }
`