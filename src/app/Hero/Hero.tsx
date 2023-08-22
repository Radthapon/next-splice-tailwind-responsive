import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (

<section className="relative transition-all">
  <div className="bg-[url('/Rectangl.png')] bg-cover py-48">

    <div className="max-w-screen-2xl px-8 mx-auto">

        {/* TEXT CONTAINER */}
        <div className="flex flex-col text-center lg:text-left lg:mb-0 lg:items-start gap-8 w-full md:w-1/2">
        
        <h1 className="text-5xl xl:text-7xl 2xl:text-8xl font-extrabold text-slate-800">Where your <br /> music starts</h1>
        <p className="text-xl xl:text-2xl 2xl:text-3xl text-slate-600 px-10 lg:p-0">Royalty-free sounds. Industry-leading software. Endless inspiration. Start creating with Splice.</p>
        <div className="">
        <Link href='' className="text-sm py-2 px-14 rounded-3xl bg-blue-700 text-white lg:text-xl">SIGN UP</Link>
        </div>
        
        </div>

      </div>

      {/* IMAGE CONTATNER */}
      <div className="hidden md:block md:absolute top-0 left-[54%] right-0 z-10">

          <div className="flex items-center justify-center lg:justify-end lg:w-full drop-shadow-lg">
          <Image src="/Vector5.png" alt='heroimg' width="900" height="917" className="object-cover md:w-[500px] lg:w-[550px] xl:w-[700px] 2xl:w-[900px]"/>
          </div>

      </div>


  </div>
</section>

  )
}

export default Hero