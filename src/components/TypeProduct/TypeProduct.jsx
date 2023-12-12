import React from 'react';
import { WrapperHeader, WrapperList } from './style';

const TypeProduct = ({name, href}) => {
  return (
    <WrapperList href={href}>
        <WrapperHeader>
            {name}
        </WrapperHeader>     
    </WrapperList>
  );
};

export default TypeProduct;
