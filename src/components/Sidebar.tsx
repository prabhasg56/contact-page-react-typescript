import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='bg-gray-100 font-sans leading-normal tracking-normal'>
    <div className='flex md:flex-row-reverse flex-wrap'>
      
       {/* Main Content */}
       <main className='w-full md:w-5/6 bg-gray-100'>
          <div className='container bg-emerald-500 pt-10 px-6 font-bold text-xl flex justify-center '>
             <div >Contact Page</div>
          </div>
       </main>
       
       {/* Sidebar */}
       <div className='w-full md:w-1/6 bg-emerald-500 md:bg-emerald-500 px-2 text-center fixed bottom-0 md:pt-8 md:top-0 md:left-0 h-16 md:h-screen md:border-r-4 md:border-emerald-400'>
          <aside className='md:relative mx-auto lg:float-right lg:px-6'>
             <ul className='list-reset flex flex-row md:flex-col text-center md:text-left'>
               <li className='ml-2 flex-1'>
                   <NavLink to='/contacts' className='block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500'>
                   <i className='fas fa-link pr-0 md:pr-3'></i><span className='pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-white block md:inline-block'>Contacts</span>
                   </NavLink>
                </li>
               
                <li className='ml-2 flex-1'>
                   <NavLink to='/map_chart' className='block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500'>
                   <i className='fas fa-link pr-0 md:pr-3'></i><span className='pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-white block md:inline-block'>Map and Chart</span>
                   </NavLink>
                </li>
                
               
             </ul>
          </aside>
       </div>
    </div>
 </div>

  )
}

export default Sidebar
