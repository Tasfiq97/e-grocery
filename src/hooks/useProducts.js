import { useEffect, useState } from "react"

const useProducts = () =>{
    
    const [products, setProducts] = useState([]);
    const [filterProducts,setFilterProducts]=useState([])
    useEffect( () =>{
        fetch('./products.json')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            setFilterProducts(data)
        });
    }, []);

    return [products, setProducts,filterProducts,setFilterProducts];
}

export default useProducts;