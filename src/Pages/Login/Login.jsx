import styled from 'styled-components';
import { mobile } from '../../responsive';
 
const Container=styled.div`
width: 100%;
height: 100vh;
background:linear-gradient(
    rgba(15, 10, 10, 0.5),
    rgba(15, 10, 10, 0.5)
),
url('https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?t=st=1649742729~exp=1649743329~hmac=567173a161d0ee2e031e8bbfee02d222c69bd004690f540975710d0236d50e10&w=1060');
background-repeat: no-repeat;
background-size: cover;
display: flex;
justify-content: center;
align-items: center;

`
const Wrapper=styled.div`
padding: 20px;
width: 25%;
background-color: #fff;
${mobile({width: "75%" })} 

`
const Form=styled.form`
display: flex;
flex-direction: column;


`
const Title=styled.h1`
font-size: 24px;
font-weight: 300;

`
const Input=styled.input`
flex: 1;
min-width: 40%;
margin: 10px  0;
padding: 10px;


`
const Button=styled.button`
width: 40%;
border: none;
padding:15px 20px;
background-color: teal;
color: #fff;
cursor: pointer;

`
const Link=styled.a`
margin: 5px  0;
font-size: 12px;
text-decoration: underline;
cursor: pointer;

`

const Login = () => {
    return (
        <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="name"></Input>
                <Input placeholder="password"></Input>
                <Button>LOGIN </Button>
                <Link>DO NOT YOU REMEMBER THE PASSWORD</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
    );
};

export default Login;