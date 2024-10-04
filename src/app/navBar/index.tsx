import React from 'react'
import Link from 'next/link'

const NavBar = () => {

    
  return (
    <nav className='bg-slate-500 h-16 flex items-center justify-between px-10'>
        <div>
            <h1 className='text-2xl'>Equipo 6 Store</h1>
        </div>
        <div>
            <ul className="flex gap-3">
                <li className='hover:text-2xl transition-all'><Link href='/'>Home</Link></li>
                <li className='hover:text-2xl transition-all'><Link href='/products'>Products</Link></li>
                <li className='hover:scale-150 transition-all'><Link href='/cart'><img src="https://th.bing.com/th/id/OIP.u7tW7Vw1Cr6O2mVDzRPb9wHaHa?rs=1&pid=ImgDetMain" alt=""  className='size-6 rounded-md'/></Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar