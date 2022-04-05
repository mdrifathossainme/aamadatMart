import { ArrowLeftRounded, ArrowRightOutlined} from '@material-ui/icons';
import { useState } from 'react';
import styled from 'styled-components';
import {sliderItems} from "../../data"
const Container=styled.div`
width:100%;
height:100Vh;
display:flex;
background-color:#F0E0FF;
overflow: hidden;

`

const Arrow= styled.div`
width:50px;
height:50px;
background-color:#fff7f7;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center; 
position: absolute;
top:0;
bottom:0;
left:${props=>props.direction==="left" && "10px"};
right:${props=>props.direction==="right" && "10px"};
margin: auto;
cursor: pointer;
opacity: .5;
z-index: 2;

`
const Wrapper=styled.div`
height:100%;
display:flex;
transition:all 1.5s ease;
transform: translateX(${props=>props.sliderIndex* -100}vw);

`
const Slide=styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
background-color:${props=>props.bg}
`
const ImgContainer=styled.div`
height:100%;
flex:1;
`
const Image=styled.img`
height:100%;
width:90%;
`

const InfoContainer =styled.div`
flex:1;
padding: 50px;
`
const Title=styled.h1`
font-size:70px;
`
const Dis=styled.p`
margin: 50px 0;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`
const Button=styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`



const Slider = () => {
  const [sliderIndex, setSliderIndex]=useState(0)
  const handleClick=(direction)=>{

    if(direction==="left"){
      setSliderIndex(sliderIndex>0?sliderIndex -1:2)
    }
    else{
      setSliderIndex(sliderIndex<2 ? sliderIndex +1:0)
    }
  }
    return (
      <Container>
          <Arrow direction="left" onClick={()=>handleClick("left")}>
          <ArrowLeftRounded />
          </Arrow>
          <Wrapper sliderIndex={sliderIndex}>
            {
              sliderItems.map(item=>(
              <Slide bg={item.bg}>
              <InfoContainer>
                  <Title>{item.title}</Title>
                  <Dis>{item.dis}</Dis>
                  <Button>SHOP NOW</Button>
              </InfoContainer>
              <ImgContainer>
             <Image src={item.img}/>
              </ImgContainer>
            </Slide>
              ))
            }
            
            {/* <Slide  bg="#F0E0FF" >
              <InfoContainer>
                  <Title>WINTER SALE</Title>
                  <Dis>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS</Dis>
                  <Button>SHOP NOW</Button>
              </InfoContainer>
              <ImgContainer>
             <Image src='https://flone.jamstacktemplates.dev/assets/img/slider/single-slide-1.png'/>
              </ImgContainer>
            </Slide>
            <Slide bg="#F0E0FF">
              <InfoContainer>
                  <Title>POPULAR SALE</Title>
                  <Dis>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS</Dis>
                  <Button>SHOP NOW</Button>
              </InfoContainer>
              <ImgContainer>
             <Image src='https://flone.jamstacktemplates.dev/assets/img/slider/single-slide-1.png'/>
              </ImgContainer>
            </Slide> */}
          </Wrapper>
          <Arrow direction="right" onClick={()=>handleClick("right")}>
              <ArrowRightOutlined/>
          </Arrow>
      </Container>
    );
};

export default Slider;