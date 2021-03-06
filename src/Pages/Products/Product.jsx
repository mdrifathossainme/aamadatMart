import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Info= styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;
z-index: 5;
background-color: rgba(0,0,0,0.2);
transition: all .5s ease-in-out;

`  
const Container= styled.div`
    flex: 1;
    margin: 10px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ECEFF1;
    position: relative;


    &:hover ${Info}{
        opacity: 1;
    }

`

const Image= styled.img`
height: 80%;

`

const Icon= styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: #fff;
display: flex;
align-items: center;
justify-content: center;
margin: 10px ;
transition: all .5s ease-in-out;
&:hover{
    background-color: #e9f5f5;
    transform: scale(1.1);
cursor: pointer;

}
`  


const Product = ({product}) => {
    return (
      <Container>
                <Image src={product.img}></Image>
                <Info>
                    <Icon>
                        <ShoppingCartOutlined/>
                    </Icon>
                    <Icon>
                        <SearchOutlined/>
                    </Icon>
                    <Icon>
                        <FavoriteBorderOutlined/>
                    </Icon>
                </Info>
      </Container>
    );
};

export default Product;