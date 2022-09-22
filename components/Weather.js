import React from 'react'

function Weather() {
  return (
    <div className='relative grid justify-center shadow-lg mt-24 p-4 w-full max-w-[400px] md:max-w-[600px] m-auto z-10'>
        <div className='flex justify-between px-4 pt-6'>
            <div className='px-6 flex flex-col items-center justify-center'>
                {/*Image*/}

                <p className='py-4 font-medium text-base'>Clear sky</p>
            </div>

            <div className='px-8'>
                <h1 className='font-semibold text-5xl'>New York</h1>
                <p className='font-medium text-sm py-1'> Wednesday, October 2022</p>
                <h1 className='py-1 font-normal text-9xl'> 33</h1>


            </div>

        </div>
        <div className='flex justify-between pt-10 px-4'>
            <div className='flex flex-col items-center justify-center'>
            <p className='font-medium text-base'>Feels Like</p>
            <p className='font-normal text-sm'>34</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
            <p className='font-medium text-base'>Humidity</p>
            <p className='font-normal text-sm'>23%</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
            <p className='font-medium text-base'>Wind</p>
            <p className='font-normal text-sm'>9km</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
            <p className='font-medium text-base'>Pressure</p>
            <p className='font-normal text-sm'>1078</p>
            </div>
           
           

        </div>

    </div>
  )
}

export default Weather