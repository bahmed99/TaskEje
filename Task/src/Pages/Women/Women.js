import React from 'react'
import ListProducts from '../../components/List/ListProducts';


export default function Women() {
    const [products, setProducts] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [error, setError] = React.useState();
    React.useEffect(() => {
        if (isLoading) {
            fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data)
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
        <div>
            <h1>Women clothing</h1>
            <ListProducts  products={products}  category="women clothing"/>
        </div>
    )
}
