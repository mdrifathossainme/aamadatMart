import React from 'react';
import styled from 'styled-components';
import { useProduct } from '../../hooks/UseProduct';
import Allproduct from './Allproduct';

const Container= styled.div`
display: flex;
padding: 20px;
flex-wrap: wrap;
justify-content: space-between;    


`
const Title=styled.h1`
text-align:center
`

const AllProducts = () => {
    const [products]=useProduct([])
    return (
        <>
        <Title>
        <h1> All Products</h1>
        </Title>
        <Container>
           
           {products.map(product=><Allproduct product={product} key={product.id}></Allproduct>)}

     </Container>
        </>
    );
};

export default AllProducts;