import React, { useState, useEffect } from 'react'
// import './Product.style.css'
import { useParams } from "react-router-dom";
import "./Product.style.css"

function Product() {
    
    const { id } = useParams();
    const [product, setProduct] = useState([])
    const [isLoading, setIsLoading] = React.useState(true);
    const [error, setError] = React.useState();
    React.useEffect(() => {
        if (isLoading) {
            fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                setIsLoading(false)
            })
            .catch(err=> {
                setError(err.message)
                throw(err)
            })
        }
    }, [])
    if(error) return <div>{error}</div>
    if(isLoading) 
    return <div>Loading...</div>
   
    return (

        <div className="card card1" style={{width: "18rem"  ,  marginTop:'50px' }}>
            <img className="card-img-top image" src={product.image} alt="Card image cap" />
                <div className="card-body" >
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text " >{ `${product.price}dt` }</p>
                    <input type="number" min='1'  /> <br /> <br />
                    <button className=" btn btn-primary" >Add to cart</button>
    </div> 
     </div> 
    )
} 
export default Product
