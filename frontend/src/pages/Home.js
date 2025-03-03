/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, {Fragment, useEffect, useState} from 'react'
import ProductCard from '../components/ProductCard'
import { useSearchParams } from 'react-router-dom';

export const Home = () => {

    const [ products , setProducts]= useState([]);
    const [ searchParams, setSearchParams] = useSearchParams();

    useEffect(()=>{
        // fetch(process.env.REACT_APP_API_URL+'/product?'+searchParams)
        fetch('/api/v1/product?'+searchParams)
        .then(res => res.json())
        .then(res => setProducts(res.products))
    },[searchParams]);

  return (
    <Fragment>
        <h1 id="products_heading">Latest Products</h1>

        <section id="products" className="container mt-5">
        <div className="row">
            { products.map((product)=>(
                <ProductCard product={ product }/>
            ))}
        </div>
        </section>
    </Fragment>
  )
}
