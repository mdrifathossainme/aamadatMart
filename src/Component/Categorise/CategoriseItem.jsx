import React from 'react';
import styled from 'styled-components';

const Container= styled.div`
  
    height: 70vh;
    margin:0 5px;
    width: 100%;
   position: relative;
   margin:0 20px;

`
const Image= styled.img`
width: 100%;
height: 100%;
object-fit: cover;

`
const Info= styled.div`
position:absolute;
 width: 100%;
 height: 100%;
   top:0;
   left:0;
   display: flex;
    align-items: center;
    justify-content: center;   
    flex-direction: column;
}
`
const Title= styled.h2`
color:white;
margin-bottom:20px;
`
const Button= styled.button`
border: none;
padding: 10px;
background-color: aliceblue;
color: gray;
cursor: pointer;
font-weight: 600;
`
const CategoriseItem = ({item}) => {
    return (
            <Container>
                <Image src={item.img}></Image>
                <Info>
                    <Title>{item.title}</Title>
                    <Button>SHOP NOW</Button>
                </Info>
            </Container>
    );
};

export default CategoriseItem;