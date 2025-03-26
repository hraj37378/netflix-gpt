import React from 'react'

const VideoTitle = ({title, overview, rating}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/3'>{overview}</p>
        <div>
            <button className='bg-white px-6 py-1 rounded-lg text-black hover:bg-opacity-80'>Play</button>
            <button className='mx-4 bg-gray-600 px-6 py-1 rounded-lg text-white hover:bg-opacity-50'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle