import { Row, Col } from "antd";
import styled from "styled-components";

export const WrapperPageHome = styled(Row)`
    padding: 12px 120px;
    background-color: #efefef;
`

export const WrapperContent = styled.div`
    display: flex;
    padding-top: 16px;
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
    max-height: 100vh;
    position: sticky;
    overflow-y: scroll;
    top: 16px;
    display: flex;
    padding-bottom: 40px;
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
`