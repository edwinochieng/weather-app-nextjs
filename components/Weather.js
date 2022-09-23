import React from 'react'
import Image from 'next/image'

function Weather({data}) {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let today  = new Date().toLocaleDateString("en-US", options);


    
  return (
    <div className='relative grid justify-center rounded-2xl shadow-lg mt-24 p-4 w-full max-w-[400px] md:max-w-[600px] m-auto z-10 bg-white/20 bg-opacity-90 font-montserrat'>
        <div className='flex justify-between px-4 pt-6'>
            <div className='px-6 flex flex-col items-center justify-center'>
                
                <Image src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} height = '100' width = '100' alt = 'weather icon' />
                <p className='font-semibold text-sm text-gray-800'>{data.weather[0].description}</p>
            </div>

            <div className='px-8'>
                <h1 className='font-semibold text-5xl'>{data.name}</h1>
                <p className='font-semibold text-sm py-1 text-gray-800'>{today}</p>
                <h1 className='py-1 font-normal text-9xl'>{data.main.temp.toFixed(0)}&#176;</h1>


            </div>

        </div>
        <div className='flex justify-between pt-10 px-4'>
            <div className='flex flex-col items-center justify-center'>
            <p className='font-semibold text-base'>Feels Like</p>
            <p className='font-bold text-sm text-gray-900'>{data.main.feels_like.toFixed(0)}&#176;</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
            <p className='font-semibold text-base'>Humidity</p>
            <p className='font-bold text-sm text-gray-900'>{data.main.humidity} %</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
            <p className='font-semibold text-base'>Wind</p>
            <p className='font-bold text-sm text-gray-900'>{data.wind.speed} km</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
            <p className='font-semibold text-base'>Pressure</p>
            <p className='font-bold text-sm text-gray-900'>{data.main.pressure} Pa</p>
            </div>
           
           

        </div>

    </div>
  )
}

export default Weather