import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../../responsive';

const Info= styled.div`
      opacity: 0;
        position:absolute;
        width: 100%;
        height: 80%;
        top:0;
        left:0;
        display: flex;
        align-items: center;
        justify-content: center;   
        flex-direction: column;
        background-color: rgba(0, 0, 0, 0.525);
        transition: all .5s ease-in-out;

}
`
const Container= styled.div`
   height: 50vh;
   width: 100%;
   position: relative;
   margin:0 20px;
   &:hover ${Info}{
    opacity: 1;
}
   ${mobile({height:"40vh" ,margin:"10px 0px 0 10px" ,pading:0})} 

`
const Image= styled.img`
width: 100%;
height: 80%;
object-fit: cover;
${mobile({height:"40vh",width: "90%" })} 

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
    const navigate=useNavigate()
  
  const handeCategorise=()=>{
    navigate('/productlist')
  }
    return (
            <Container>
              
              <Image src={item.img}></Image>
                <Info    o>
                    <Title>{item.category}</Title>
                    <Button onClick={handeCategorise} >SHOP NOW</Button>
                </Info>
            </Container>
    );
};
export default CategoriseItem;