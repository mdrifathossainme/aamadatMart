import {  Search, ShoppingCartOutlined} from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import Badge from '@mui/material/Badge';
import { mobile } from '../../responsive';
import { Link } from 'react-router-dom';


const Container=styled.div`
height:60px; 
${mobile({height:"50px" })} 
`
const Wrapper= styled.div`
padding:10px 20px;
display:flex;
align-items: center;
justify-content:space-between;
${mobile({padding:"10px 0" })} 

`
const Left =styled.div`
flex:1;
display:flex;
align-items: center;
`
const Language=styled.span`
font-size:14px;
cursor:pointer;
${mobile({display:"none" })} 
`
const SearchContainer=styled.div`
border:0.5px solid lightgray;
display:flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`
const Input =styled.input`
border:none;
outline:none;
${mobile({width:"50px" })} 

`
const Center =styled.div`
flex:1;
text-align:center

`
const Logo= styled.h1`
font-weight:bold;
${mobile({fontSize:"24px" })} 
`


const Right =styled.div`
flex:1;
display:flex;
align-items: center;
justify-content: flex-end;
${mobile({ flex:2, justifyContent:"center" })} 


`
const MenuItem=styled.div`
font-size:14px;
cursor:pointer;
margin-left: 25px;
${mobile({fontSize:"12px",marginLeft: "10px"})} 

`

const Navbar = () => {
    return (
        <div className=''>
            <Container>
               <Wrapper>
                   <Left> 
                       <Language>
                          EN
                          </Language>
                          <SearchContainer>
                              <Input placeholder='Search'></Input> 
                              <Search style={{color:"gray", fontSize:16}}></Search >
                          </SearchContainer>
                        
                     </Left>
                   <Center>
                       <Link style={{textDecoration:"none"}} to="/"> <Logo>AAMADAT.</Logo></Link>
                    </Center>
                   <Right>
                       <MenuItem>REGISTER</MenuItem>
                       <MenuItem>SIGN IN</MenuItem>
                       <MenuItem>          
                          <Badge badgeContent={1} color="success">
                              <ShoppingCartOutlined color="action" />
                         </Badge> 
                        </MenuItem>
                   </Right>
               </Wrapper>
            </Container>
        </div>
    );
};

export default Navbar;