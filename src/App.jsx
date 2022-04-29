import { Route, Routes } from "react-router-dom";
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home";
import Login from "./Pages/Login/Login";
import ProductList from "./Pages/ProductList/ProductList";
import Regsiter from "./Pages/Regsiter/Regsiter";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";


const App= ()=>{
return(
    <div>
        
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/productlist/" element={<ProductList></ProductList>}></Route>
            <Route path="/singleroduct" element={ <SingleProduct/>}></Route>
        </Routes>
        <ProductList></ProductList> */
        <SingleProduct/>
        <Regsiter/>
        <Login/>
        /* <Cart/>
    </div>
);
}
export default App
