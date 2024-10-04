import {  useContext } from 'react';
import { CartContextType, CartContext } from '../cartContext/CartContext';


export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if (!context) { 
      throw new Error('useCart debe usarse dentro de un CartProvider');
    }
    return context;
  };