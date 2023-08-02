import React from 'react'

const OneProduct = () => {
    
    return (
        <>
            <div>
                <img src="images/peproni.png" alt="Pizza" />
                <div className='text-center'>
                    <h2 className='text-lg font-bold py-2'>Havana Special</h2>
                    <span className=' bg-gray-200 rounded-full text-sm px-4 font-bold'>Small </span>
                </div>
                <div className='flex justify-between items-center'>
                    <span>Rs 500</span>
                    <button>Add</button>
                </div>
            </div>
        </>)
}

export default OneProduct