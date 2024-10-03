
import Link from 'next/link'
import Image from 'next/image'

const fetchProductById = async(id: string) => {
    const url = `https://fakestoreapi.com/products/${id}`
    const products = await fetch(url)
    const data = await products.json();   
    return data
}

const Page = async({ params } : {params : {id: string}}) => {
const {id} = params
const productInfo = await fetchProductById(id)
const {title, price, description, category, image} = productInfo

  return (

    <article>
        <div className='bg-white flex justify-center h-[400px]'>
            <Image className="object-cover mb-4" src={image} width={200} height={100} alt="Imagen del producto" />
        </div>
        <div className='pt-5 px-4'>
            <h2 className="text-lg font-bold mb-2">{title}</h2>
            <h3 className="text-lg font-bold mb-2">{category}</h3>
            <p className="text-lg mb-2">{description}</p>
            <p className="text-white mb-4">{price}</p>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-3">Agregar al carrito</button>
        </div>
       
    </article>
  )
}

export default Page