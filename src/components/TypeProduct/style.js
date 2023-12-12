import styled from "styled-components";

export const WrapperHeader = styled.div`
    display: flex;
    gap: 4px;
    -webkit-box-align: center;
    align-items: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: rgb(39, 39, 42);
`

export const WrapperList = styled.a`
    display: flex;
    padding: 7px 16px;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    &:hover {
        background: rgba(39, 39, 42, 0.12);
    }
`