import React from 'react'
import { useCart } from '../hooks/useCart'
import { Product } from '../cartContext/CartContext';
import Card from '../products/card/Card';

interface ProductCardProps {
    product: Product;
  }

const Cart = ({ product }: ProductCardProps) => {

    const { cartItems, removeFromCart } = useCart();
     
  return (
    <section className='flex flex-wrap gap-4 mt-8'>
      {
        cartItems.map((item, index) => {
          
          return(
            <Card id={item.id} title={item.title} image={item.image} price={item.price} key={item.id}/>
          )
        })
      }Cart={}
    </section>
  )
}

export default Cart
