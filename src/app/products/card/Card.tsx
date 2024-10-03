import React from 'react'
import Image, {StaticImageData}  from 'next/image';
import Link from 'next/link';

interface ProductInfo {
    id: number;
    title: string;
    image: StaticImageData | string;
    price: number
}


const Card = ({ id, title, image, price } : ProductInfo) => {
  return (
    <article className='bg-slate-500 w-[300px]'>
        <div className='bg-white flex justify-center h-[400px]'>
            <Image className="object-cover mb-4" src={image} width={200} height={100} alt="Imagen del producto" />
        </div>
        <div className='pt-5 px-4'>
            <h2 className="text-lg font-bold mb-2">{title}</h2>
            <p className="text-white mb-4">{price}</p>
            <Link href={`products/${id}`} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Ver Detalle</Link>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-3">Agregar al carrito</button>
        </div>
    </article>
  )
}

export default Card
