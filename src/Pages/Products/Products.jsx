import styled from 'styled-components';
import { useProduct } from '../../hooks/UseProduct';
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
   const [products]=useProduct([])
    return (
        <>
        <Title>
        <h1> All Products</h1>
        </Title>
        <Container>
           
           {products.slice(4,14).map(product=><Product product={product} key={product.id}></Product>)}

     </Container>
        </>
    );
};

export default Products;