import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import {BsSearch} from 'react-icons/bs'
import Weather from '../components/Weather'


export default function Home() {
   const [city, setCity] = useState('')
   const [weather, setWeather] = useState([]);
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_API_KEY}`




   
  return (
    <div >
      <Head>
        <title>Weather App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*Overlay*/}
      <div className = "absolute top-0 bottom-0 right-0 left-0 bg-black/50 z-[1]"/>

      {/*Background Image*/}
      <Image
        src= 'https://images.pexels.com/photos/314726/pexels-photo-314726.jpeg'
        layout = 'fill'
        alt = 'weather image'
        className = "object-cover"
      />

      {/*Search*/}

      <div className='relative flex justify-between items-center w-full max-w-lg m-auto pt-24 text-white z-10'>
        <form className='flex justify-between items-center w-full m-auto py-2 px-5 bg-transparent border border-gray-300 rounded-3xl'>

          <input onChange = {(e) => setCity(e.target.value)} className="bg-transparent border-none focus:outline-none text-xl text-white" input = "text" placeholder='Enter City'/>
          <button><BsSearch/></button>
        </form>
      </div>

      {/*Weather*/}
      <Weather/>

    </div>
  )
}
