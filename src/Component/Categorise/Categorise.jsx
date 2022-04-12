import React, { useEffect, useState } from 'react';
import CategoriseItem from './CategoriseItem';
import styled from 'styled-components';
import { mobile } from '../../responsive';

const Container= styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
${mobile({padding:"0px", flexDirection:"column" ,margin:"5px 0"})} 

`
const Categorise = () => {
    const [item,setItem]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setItem(data))
    },[])
    return (
      <Container>
            {item.map(item=><CategoriseItem item={item} key={item.id}></CategoriseItem>)}

      </Container>
      
    );
};

export default Categorise;