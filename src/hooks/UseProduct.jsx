import { useEffect, useState } from "react"

export const useProduct=()=>{
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('product.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[products])
    return[products]
}