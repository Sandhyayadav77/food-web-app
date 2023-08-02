import React from 'react'
import OneProduct from './OneProduct';

const ProductLists = () => {
    return (
        <div className='container mx-auto px-10 pb-24'>
            <h1 className='text-2xl font-bold'>Products</h1>
            <div className='grid grid-cols-5  gap-16  my-8'>
                <OneProduct/>
            </div>
        </div>
    )
}

export default ProductLists;