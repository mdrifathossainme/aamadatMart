// import { Title } from '@material-ui/icons';
import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import Announcement from '../../Component/Announcement/Announcement';
import Footer from '../../Component/Footer/Footer';
import Navbar from '../../Component/Navbar/Navbar';
import Newsletter from '../../Component/Newsletter/Newsletter';
import { mobile } from '../../responsive';


const Container=styled.div``
const Wrapper=styled.div`
padding: 50px;
display: flex;
${mobile({padding:"10px",flexDirection:"column"})} 

`
const ImgContainer=styled.div`
flex: 1;
padding: 0 50px;

`
const Img=styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
${mobile({height: "40vh" })} 


`
const InfoContainer=styled.div`
flex: 1;

`
const Title=styled.h1`
font-weight: 200;
${mobile({textAlign:"center" })} 

`
const Desc=styled.p`
margin: 20px 0;
${mobile({textAlign:"center" })} 
`
const Price=styled.span`
font-weight: 200;
font-size: 40px;
${mobile({display:"flex",justifyContent:"center" })} 


`
const FilterContainer=styled.div`
display: flex;
justify-content: space-between;
width: 50%;
margin: 20px 0;
${mobile({width:"100%" })} 

`
const Filter=styled.div`
display: flex;
align-items: center;

`
const FilterTitle=styled.span`
font-weight: 200;
font-size: 20px;
`
const FilterColor=styled.div`
height: 20px;
width: 20px;
border-radius: 50%;
background-color:${(props)=>props.color};
margin:0 5px ;
cursor:pointer;

`

const FilterSize=styled.select`
margin-left: 10px;
padding: 5px;

`
const FilterSizeOption=styled.option``


const AddContainer=styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({width:"100%" })} 

`

const AmountContainer=styled.div`
display: flex;
align-items: center;
font-weight: 700;
cursor:pointer;

`
const Amount=styled.span`
height: 30px;
width: 50px;
border-radius: 5px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin:0 5px ;
font-weight: 500;
cursor: default;

&:hover{

}
`
const Button=styled.button`
padding: 15px;
border: 2px solid teal;
background-color: #fff;
cursor:pointer;
&:hover{
background-color: #f8f4f4;
    
}
`


const SingleProduct = () => {
    return (
       <Container>
           <Announcement/>
           <Navbar/>
           <Wrapper>
               <ImgContainer>
                    <Img src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/f8d89293c9cb4bf08d52adb100f95a3a_9366/Steel_Metal_Bottle_2L_Black_EX7302_01_standard.jpg"></Img>
               </ImgContainer>
               <InfoContainer>
                   <Title>Lorem ipsum dolor sit amet</Title>
                   <Desc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, vitae est iure culpa nostrum possimus. Quisquam cum nesciunt fugiat reprehenderit.</Desc>
                   <Price>$20</Price>
                   <FilterContainer>
                       <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="darkblue"/>
                        <FilterColor color="gray"/>
                        <FilterColor color="red"/>                      
                       </Filter>
                       <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>39</FilterSizeOption>
                            <FilterSizeOption>40</FilterSizeOption>
                            <FilterSizeOption>41</FilterSizeOption>
                            <FilterSizeOption>42</FilterSizeOption>
                        </FilterSize>
                       </Filter>
                   </FilterContainer>
                   <AddContainer>
                       <AmountContainer>
                           <Remove/>
                           <Amount>1</Amount>
                           <Add/>
                       </AmountContainer>
                       <Button>ADD TO CART</Button>
                   </AddContainer>
               </InfoContainer>
           </Wrapper>
           <Newsletter/>
           <Footer/>
           
       </Container>
    );
};

export default SingleProduct;