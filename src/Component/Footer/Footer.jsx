import { Facebook, Instagram, LinkedIn, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import styled from 'styled-components';
const Container=styled.div`
display: flex;
margin-left:50px;
padding-bottom:20px
`
const Lego=styled.h1`
flex:1;
`
const Des=styled.p`
margin: 20px 0;
`
const SocialContainer=styled.div`
display: flex;

`
const SocialIcon=styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display: flex;
justify-content: center;
align-items: center;
margin-right: 20px;
cursor:pointer;
`
const Left=styled.div`
flex:1;

`
const Center=styled.div`
flex:1;
`
const Title=styled.h3`
margin-bottom: 30px;

`
const List=styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap; 
`
const ListItem=styled.li`
width: 50% ;
margin-bottom: 10px;
cursor:pointer;
`

const Right=styled.div`
flex:1;
`
const ContactItem=styled.div`
display: flex;
margin-bottom: 20px;
align-items: center;



`
const Payment=styled.div`
flex:1;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Lego>AAMADAT.</Lego>
                <Des>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe dolor itaque aperiam accusamus. Eius porro molestiae nisi sed cumque id facilis.</Des>
                <SocialContainer>
                    <SocialIcon color='3B5999'>
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color='E4405F'>
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color='55ACEE'>
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color='E60023'>
                      <Pinterest/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>
                    Useful Links
                </Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Oder Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room style={{marginRight:"10px"}}/>38/1 Dhamrai Dhaka</ContactItem>
                <ContactItem><Phone style={{marginRight:"10px"}}/>01729552966</ContactItem>
                <ContactItem><MailOutline style={{marginRight:"10px"}}/>mdrifathossain.mr@gmail.com</ContactItem>
          
            </Right>
        </Container>
    );
};

export default Footer;