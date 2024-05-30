import React from 'react'
import { B2bDialog } from '../components/CreateB2bService'

const page = () => {
  return (
    <div className='h-screen w-full py-5 px-5 flex flex-col gap-5'>
      <div className='w-full flex items-center justify-center'>
        <h1 className='font-bold text-xl'>B2bService</h1>
      </div>
      <div>
        <B2bDialog/>
      </div>
      <div className='w-full flex flex-wrap items-center justify-center gap-10 overflow-y-scroll'>
        
      </div>
    </div>
  )
}

export default page