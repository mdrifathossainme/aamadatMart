import styled from 'styled-components';

const Container=styled.div`
width:100%;
height: 30px;
background-color: teal;
color: #fff;
display: flex;
justify-content: center;
font-size: 14px;
font-weight: 500;
align-items: center;

`

const Announcement = () => {
    return (
       <Container>Super Deal! Free Shipping on Orders Over $50</Container>
    );
};

export default Announcement;