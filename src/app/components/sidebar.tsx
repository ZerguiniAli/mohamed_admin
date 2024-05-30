'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const sidebar = () => {
    const router = useRouter()
  return (
    <div className='bg-gray-300 w-52 h-screen flex flex-col justify-between items-center py-10 px-2 top-0 left-0 sticky'>
        <div className='w-full flex flex-col items-center gap-10 justify-center'>
            <h1 className='font-bold'>LOGO</h1>
            <div className='flex flex-col gap-2 w-full'>
                <div onClick={()=>{router.push("/")}} className='flex items-center justify-center py-2 w-full bg-gray-400 rounded-sm hover:bg-white transition duration-2000 cursor-pointer'>
                    <h1>Les utilisateurs</h1>
                </div>
                <div onClick={()=>{router.push("/annonce")}} className='flex items-center justify-center py-2 w-full bg-gray-400 rounded-sm hover:bg-white transition duration-2000 cursor-pointer'>
                    <h1>Les annonces</h1>
                </div>
                <div onClick={()=>{router.push("/b2b")}} className='flex items-center justify-center py-2 w-full bg-gray-400 rounded-sm hover:bg-white transition duration-2000 cursor-pointer'>
                    <h1>B2b Service</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default sidebar