import React from 'react'
import { Link } from 'react-router-dom'
// import Logo from 'public\images\logo.png'

const Navbar = () => {
    return (
        <>
            <nav className='flex justify-between p-4 mx-auto'>
                <Link to='/'>
                    <img src='/images/logo.png' alt="logo" className='ml-7' style={{ height: '45px' }} />
                </Link>
                <ul className='flex gap-6 mr-14'>
                    <li className='hover:text-orange-500 hover:scale-105'> <Link to='/'>Home</Link></li>
                    <li className='hover:text-orange-500 hover:scale-105'><Link to='/products'>Products</Link></li>
                    <li className='hover:text-orange-500 hover:scale-105'> <Link to='/contact'> Contact Us</Link></li>
                    <li className='hover:text-orange-500 hover:scale-105 cursor-pointer'>
                        <div className='px-3 py-1 bg-orange-600 hover:bg-orange-500 text-white rounded-3xl flex '>
                            <Link to='/cart'> 10
                            </Link>
                            <Link to='/cart'> 
                            <img src="/images/cart.png" className='ml-1' alt="cart-icon" />
                            </Link>
                        </div>
                    </li>
                </ul>
            </nav>
        </>)
}

export default Navbar