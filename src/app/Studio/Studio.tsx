import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Studio = () => {
  return (
    // section studio stay in
    <section className="relative bg-slate-100 pt-8 pb-32">

      {/* width studio box */}
      <div className="max-w-6xl mx-auto pt-20">
        {/* layout studio box */}
        <div className="flex flex-wrap items-center justify-between flex-col md:flex-row-reverse">

            {/* Left side */}
          <div className="flex-1 max-w-sm md:max-w-lg">
            <div className="flex items-center justify-center">
            <Image src="/studio.png" alt='logo' width={500} height={400} className='drop-shadow-lg'/>
            </div>
          </div>

          {/* Right side */}
          <div className="flex-1 max-w-sm md:max-w-md lg:max-w-md md:px-5 pt-4 mx-auto">
            <div className="flex flex-col gap-4 items-center md:items-start">
                <h3 className='text-slate-400 font-bold'>STUDIO</h3>
                <div className="flex gap-4">
                <h1 className='text-4xl xl:text-7xl 2xl:text-7xl font-extrabold text-slate-700'>Stay in </h1>
                <h1 className='text-4xl xl:text-7xl 2xl:text-7xl font-extrabold text-blue-700'>sync</h1>
                </div>
                <p className='text-slate-500 text-center md:text-start'>
                Try industry-leading music software 
                for free, pay it off over 
                time and own it forever.</p>
                  <div className="mt-4">
                    <Link href='' className="text-sm py-2 px-4 lg:py-2 lg:px-12 rounded-3xl bg-blue-700 text-white">
                      TRY STUDIO
                    </Link>
                  </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Studio