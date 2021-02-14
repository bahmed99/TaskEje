import React from 'react'
import Footer from '../../components/Footer/Footer';
import ListProducts from '../../components/List/ListProducts';


export default function Men() {
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
            <h1>Men clothing</h1>
            <ListProducts  products={products}  category="men clothing"/>
            
        </div>
    )
}
