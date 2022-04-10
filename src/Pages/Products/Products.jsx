import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Product from './Product';

const Container= styled.div`
display: flex;
padding: 20px;
flex-wrap: wrap;
justify-content: space-between;    


`


const Products = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('product.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <Container>
            {products.slice(0,9).map(product=><Product product={product} key={product.id}></Product>)}

      </Container>
    );
};

export default Products;