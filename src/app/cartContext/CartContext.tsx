'use client'; // Si estás usando la carpeta "app", este comentario es necesario.

import { createContext, useState, ReactNode } from 'react';

// Definir la estructura de un producto
export interface Product {
  id: number;
  name: string;
  price: number;
}

// Definir el contexto del carrito
export interface CartContextType {
  cartItems: Product[];
  addToCart: (item: Product) => void;
  removeFromCart: (id: number) => void;
}

// Crear el contexto con un valor inicial vacío
export const CartContext = createContext<CartContextType | undefined>(undefined);

// Proveedor del contexto
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  // Función para agregar un producto al carrito
  const addToCart = (item: Product) => {
    setCartItems([...cartItems, item]);
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
