import React, { useEffect, useState } from 'react';
import CategoriseItem from './CategoriseItem';
import styled from 'styled-components';
import { mobile } from '../../responsive';
import { useProduct } from '../../hooks/UseProduct';

const Container= styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
${mobile({padding:"0px", flexDirection:"column" ,margin:"5px 0"})} 

`
const Categorise = () => {
 const [products]=useProduct([])
    return (
      <Container>
            {products.slice(0,4).map(item=><CategoriseItem item={item} key={item.id}></CategoriseItem>)}

      </Container>
      
    );
};

export default Categorise;