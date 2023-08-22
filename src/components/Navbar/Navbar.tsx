'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Menu from './Menu/Menu'


const Navbar = () => {

  const [top, setTop] = useState<boolean>(true)

  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  },[top])

  return (
    // WARPPER
    <div 
    className={`w-full fixed z-50 bg-transparent transition duration-300 ease-out 
    ${!top ? ' bg-white/80 backdrop-blur-sm shadow-lg' : ''}`}>
      <div 
      className="max-w-screen-2xl mx-auto px-8 relative">
      {/* className="flex items-center justify-between flex-wrap py-10 px-10 xl:px-20 2xl:pl-[10%] text-slate-700 bg-transparent" */}
        
      <div className="flex items-center justify-between h-24">
        
      {/* LOGO */}
      <div className="">
        <Image src="/logo.png" alt='logo' width={120} height={120}/>
      </div>
      
        {/* BOX NAV */}
        <div className="hidden lg:flex justify-between w-5/6">

        {/* NAV LINK */}
        <div className="flex items-center gap-8">
          <Link href="">STUDIO</Link>
          <Link href="">COMMUNITY</Link>
          <Link href="">SOUNDS</Link>
          <Link href="">PLUGINS</Link>
          <Link href="">BLOG</Link>
        </div>

        {/* NAV LOGIN SIGNUP */}
        <div className="flex items-center gap-20 text-white">
          <Link href=""
          className={`${!top ? ' text-slate-700' : ''}`}>
            LOG IN
          </Link>
          <Link href="" 
          className={`bg-white/30 backdrop-blur-xl py-2 px-8 rounded-3xl ${!top ? 'bg-slate-800' : ''}`}>
            SIGN UP
            </Link>
        </div>

        </div>

      {/* Mobie Menu */}
      <div className="lg:hidden">
          <Menu/>
      </div>

      </div>  

    
      </div>
    </div>

   
  )
}

export default Navbar