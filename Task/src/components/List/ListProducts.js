import React from 'react'
import "./ListProducts.style.css"


export default function ListProducts({products,category}) {
    return (
        <div className="products-list">
            {products.map((product) => {
                return (
                    <ListProduct key={product.id} product={product} category={category}/> )
            })}
        </div>
    )
}

function ListProduct({ product ,category }) {
  if(product.category===category) {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top image" src={product.image} alt="Card image cap" />
                <div className="card-body" style={{textAlign:'center'}}>
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text " >{ `${product.price}dt` }</p>
                    <a href={`/product/${product.id}`} className=" btn btn-primary">Buy</a>
                </div>
        
    </div>
)
  }
  else {return null}
   
}
