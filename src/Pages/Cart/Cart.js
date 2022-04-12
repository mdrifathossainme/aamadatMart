import styled from 'styled-components';
import React from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import Announcement from '../../Component/Announcement/Announcement';
import Footer from '../../Component/Footer/Footer';
import { Add, Remove } from '@material-ui/icons';
import { mobile } from '../../responsive';
// import { Details } from '@material-ui/icons';



const Container=styled.div``

const Wrapper=styled.div`
padding: 20px;
${mobile({padding:"10px" })} 

`

const Title=styled.h1`
font-size: 20px;
text-align: center;

`

const Top=styled.div`
display: flex;
 align-items: center;
 justify-content: space-between;
padding: 20px;
 
`
const TopButton=styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer; 
border:${props=>props.type==="filled"&&"none"};
background-color:${props=>props.type==="filled"?"black":"transparent"};
color:${props=>props.type==="filled"&&"white"};
`
const Toptexts=styled.div`
${mobile({display:"none" })} 

`
const Toptext=styled.span`
cursor: pointer;
text-decoration: underline;
margin: 0 20px ;

`
const Bottom=styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection:"column" })} 

`
const Info=styled.div`
flex: 3;

`

const Product=styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection:"column" })} 

`
const ProductDetail=styled.div`
flex:2;
display: flex;
`
const Image=styled.img`
width: 200px;

`

const Details=styled.div`
padding: 20px;
display: flex;
justify-content: space-between;
flex-direction: column;

`

const ProductName=styled.span``

const ProductId=styled.span``

const ProductColor=styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};

`
const ProductSize=styled.div``

const PriceDetail=styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`
const ProductAmountContainer=styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;

`
const ProductAmount=styled.div`
font-size: 24px;
margin: 5px;
${mobile({margin:"5px 15px"})} 

`

const ProductPrice=styled.div`
font-size: 30px;
font-weight: 200;

`
const Hr=styled.hr`
background-color: #eee;
border:none;
heighr:1px;
margin-top: 10px;
`


const Summary=styled.div`
flex: 1;
border: .5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 60vh;

`
const SummaryTitle=styled.h1`
font-weight: 200;

`

const SummaryItem=styled.div`
margin: 30px 0;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type==="total"&& "500"};
font-size: ${props=>props.type==="total"&& "24px"};

`

const SummaryItemText=styled.span``
const SummaryItemPrice=styled.span``
const Button=styled.button`
width:100%;
padding:10px;
background-color: #000;
color: #fff;

`



const Cart = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINE SHOPPING</TopButton>
                    <Toptexts>
                        <Toptext>Shopping Bag(2)</Toptext>
                        <Toptext>WishList(0)</Toptext>
                    </Toptexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>            
               </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/e2d870a680644e4d98e9ac7d0008ecc7_9366/Steel_Metal_Bottle_600_ML_Yellow_EX7307_01_standard.jpg"></Image>
                                <Details>
                                    <ProductName><b>Product Name :</b> Lorem, ipsum dolor.</ProductName>
                                    <ProductId><b>Product Id :</b> 36gf83202f3g</ProductId>
                                    <ProductColor color='black'/>
                                    <ProductSize><b>Size :</b> 44</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                               <ProductAmountContainer>
                                   <Add/>
                                   <ProductAmount>2</ProductAmount>
                                   <Remove/>
                               </ProductAmountContainer>
                               <ProductPrice>$30</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetail>
                                <Image src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/e2d870a680644e4d98e9ac7d0008ecc7_9366/Steel_Metal_Bottle_600_ML_Yellow_EX7307_01_standard.jpg"></Image>
                                <Details>
                                    <ProductName><b>Product Name :</b> Lorem, ipsum dolor.</ProductName>
                                    <ProductId><b>Product Id :</b> 36gf83202f3g</ProductId>
                                    <ProductColor color='black'/>
                                    <ProductSize><b>Size :</b> 44</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                               <ProductAmountContainer>
                                   <Add/>
                                   <ProductAmount>2</ProductAmount>
                                   <Remove/>
                               </ProductAmountContainer>
                               <ProductPrice>$30</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                       <SummaryTitle>ORDER SUMMARY</SummaryTitle> 
                       <SummaryItem>
                           <SummaryItemText>Sub Total</SummaryItemText>
                           <SummaryItemPrice>$80</SummaryItemPrice>
                       </SummaryItem>
                       <SummaryItem>
                           <SummaryItemText>Sub Total</SummaryItemText>
                           <SummaryItemPrice>$80</SummaryItemPrice>
                       </SummaryItem>
                       <SummaryItem>
                           <SummaryItemText>Sub Total</SummaryItemText>
                           <SummaryItemPrice>$80</SummaryItemPrice>
                       </SummaryItem>
                       <SummaryItem  type="total">
                           <SummaryItemText> Total</SummaryItemText>
                           <SummaryItemPrice >$80</SummaryItemPrice>
                       </SummaryItem>
                       <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    );
};

export default Cart;