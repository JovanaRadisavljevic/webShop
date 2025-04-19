import React, { useContext } from 'react'
import { ShopContext } from '../context/ShowContext'
import Title from './Title';
const LatestCollection = () => {
    const {products}=useContext(ShopContext);

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'NAJNOVIJA'} text2={'KOLEKCIJA'}/>
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque possimus veritatis porro, vitae libero laborum quis iste voluptatibus neque officiis sit adipisci nulla eveniet! Harum quam enim sit fugit iste.
                </p>
            </div>
        </div>
  )
}

export default LatestCollection