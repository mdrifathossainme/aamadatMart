import styled from 'styled-components';
import { mobile } from '../../responsive';

const Container=styled.div`
width: 100%;
height: 100vh;
background:linear-gradient(
    rgba(15, 10, 10, 0.612),
    rgba(15, 10, 10, 0.612)
),
url('https://img.freepik.com/free-photo/woman-holding-various-shopping-bags-copy-space_23-2148674122.jpg?w=1380&t=st=1649740648~exp=1649741248~hmac=f4973ee048f0d88d001d2523138687b0c5921f4f37dbc363b8f327dfa05f3a60');
display: flex;
justify-content: center;
align-items: center;
background-size: cover;

`
const Wrapper=styled.div`
padding: 20px;
width: 50%;
background-color: #fff;
${mobile({width: "75%" })} 

`
const Form=styled.form`
display: flex;
flex-wrap: wrap;

`
const Title=styled.h1`
font-size: 24px;
font-weight: 300;

`
const Input=styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0 0;
padding: 10px;


`
const Agreement=styled.span`
font-size: 12px;
margin: 20px 0;

`
const Button=styled.button`
width: 40%;
border: none;
padding:15px 20px;
background-color: teal;
color: #fff;
cursor: pointer;

`
// const Container=styled.div``
const Regsiter = () => {
    return (
       <Container>
           <Wrapper>
               <Title>CREATE AN ACCOUNT</Title>
               <Form>
                   <Input placeholder="name"></Input>
                   <Input placeholder="last Name"></Input>
                   <Input placeholder="user Name"></Input>
                   <Input placeholder="email"></Input>
                   <Input placeholder="password"></Input>
                   <Input placeholder="confirm password"></Input>
                   <Agreement>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque tenetur consequuntur <b>quaerat ab repellendus</b> nisi?</Agreement>
                   <Button>CREATE </Button>
               </Form>
           </Wrapper>
       </Container>
    );
};

export default Regsiter;