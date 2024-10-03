//'use client'
//import React, { useState } from 'react'
import Card from './card/Card'

const fetchProducts = async() => {
    const url = 'https://fakestoreapi.com/products'
    const products = await fetch(url)
    const data = await products.json();    
    return data
}

 const Products = async() => {

  const products : any[] = await fetchProducts()
  return (
    <section className='flex flex-wrap gap-4 mt-8'>
      {
        products.map((product, index) => {
          
          return(
            <Card id={product.id} title={product.title} image={product.image} price={product.price} key={product.id}/>
          )
        })
      }
    </section>
  )
}

export default Products