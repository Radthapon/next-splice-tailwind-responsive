'use client'
import Image from 'next/image'
import Link from 'next/link'
import React,{useState} from 'react'

const Menu = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="">
      { !open ? (
        <Image src="/open.png" 
        alt='open' 
        width={25} 
        height={25}
        className="cursor-pointer" 
        onClick={() => setOpen(true)}/>
      ) : (
        <Image src="/close.png" 
        alt='close' 
        width={30} 
        height={30}
        className="cursor-pointer" 
        onClick={() => setOpen(false)}/>
      )} 


      { open && 
      <div className="absolute left-0 top-14 z-50 p-4 flex items-center justify-center w-full">
        <div className="items-center justify-center flex flex-col gap-8 p-8 bg-slate-50 w-10/12">
          <Link href="">STUDIO</Link>
          <Link href="">COMMUNITY</Link>
          <Link href="">SOUNDS</Link>
          <Link href="">PLUGINS</Link>
          <Link href="">BLOG</Link>
        </div>
      </div>}

  </div>
  )
}

export default Menu