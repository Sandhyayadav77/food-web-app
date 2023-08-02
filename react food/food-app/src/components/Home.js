import React from 'react'
import ProductLists from './ProductLists'
const Home = () => {
    return (
        <>
            <div className='hero py-16'>
                <div className=' container mx-auto flex justify-around items-center'>
                    <div className='ml-10 flex flex-col items-start justify-start'>
                        <h1 className='italic font-semibold'>Are you hungry ?</h1>
                        <h1 className='text-4xl font-bold text-black py-1'>Dont't Wait !</h1>
                        <button className='px-4 py-1 bg-orange-600 hover:bg-orange-500 hover:scale-105 cursor-pointer text-white rounded-2xl font-semibold text-center mt-1'>Order Now</button>
                    </div>
                    <div>
                        <img className='w-4/5' src="/images/pizza.png" alt="pizza" /></div>
                </div>
            </div>
            <ProductLists/>
        </>)
}

export default Home