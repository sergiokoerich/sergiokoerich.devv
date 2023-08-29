import React, {useState} from 'react';
import ImageSlider from '../../components/ImageSlider';

export default function projetos(){


    return(
        <div className='h-screen bg-gray-950'>
          <div className='slide-top animate-slide-top px-5 md:px-52 py-28 flex flex-col justify-center'>
            
            <h1 className='text-center text-4xl md:mt-0 mt-10 text-Blue mb-10 md:mb-5'>Projetos</h1>
            
            <ImageSlider/>
          </div>
        </div>
        
    )
};