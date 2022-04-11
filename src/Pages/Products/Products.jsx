import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Product from './Product';

const Container= styled.div`
display: flex;
padding: 20px;
flex-wrap: wrap;
justify-content: space-between;    


`
const Title=styled.h1`
text-align:center
`

const Products = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('product.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <>
        <Title>
        <h1>Products</h1>
        </Title>
        <Container>
           
           {products.slice(0,10).map(product=><Product product={product} key={product.id}></Product>)}

     </Container>
        </>
    );
};

export default Products;