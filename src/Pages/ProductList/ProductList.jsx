import styled from 'styled-components';
import Announcement from '../../Component/Announcement/Announcement';
import Footer from '../../Component/Footer/Footer';
import Navbar from '../../Component/Navbar/Navbar';
import Newsletter from '../../Component/Newsletter/Newsletter';
import Products from '../Products/Products';
import { mobile } from '../../responsive';
import AllProducts from '../AllProducts/AllProducts';


const Container=styled.div``
const Title=styled.h1``
const FilterContainer=styled.div`
display: flex;
justify-content: space-between;

`
const Filter=styled.div`
margin-right: 20px;
${mobile({width: "0px 20px", display:"flex",flexDirection:"column" })} 

`
const FilterText=styled.span`
font-size: 20px;
font-weight: 600;
${mobile({marginRight:"0px"})} 

`
const Select=styled.select`
margin-right: 20px;
padding:10px;
${mobile({margin:"10px 0px "})} 

`
const Option=styled.option``


const ProductList = () => {
    return (
       <Container>
           <Announcement/>
           <Navbar/>
           <Title>Shoes</Title>
           <FilterContainer>
               <Filter>
                   <FilterText>Filter Products :</FilterText>
                   <Select>
                       <Option disabled selected> Size</Option>
                       <Option>36</Option>
                       <Option>37</Option>
                       <Option>38</Option>
                       <Option>39</Option>
                       <Option>40</Option>
                       <Option>41</Option>
                       <Option>42</Option>
                       <Option>43</Option>
                       <Option>44</Option>
                       <Option>45</Option>
                       <Option>46</Option>
                   </Select>
                   <Select>
                       <Option disabled selected>Color</Option>
                       <Option>White</Option>
                       <Option>Black</Option>
                       <Option>Blue</Option>
                       <Option>Yellow</Option>
                       <Option>Green</Option>
                   </Select>

               </Filter>
               <Filter>
                   <FilterText>Sort Product</FilterText>
                   <Select>
                       <Option selected> Newest</Option>
                       <Option>Price (ase)</Option>
                       <Option>Price(desc)</Option>
                     
                   </Select> 
                </Filter>
           </FilterContainer>
          \<AllProducts/>
           <Newsletter/>
         <Footer/>
       </Container>
    );
};

export default ProductList;