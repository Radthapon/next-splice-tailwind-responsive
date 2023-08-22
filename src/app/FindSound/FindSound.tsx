import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FindSound = () => {
  return (
    <section className='relative mt-16'>

    {/* Sounds FEATURED */}
    <div className="py-4 px-2 md:px-0">
      <div className="max-w-sm md:max-w-md lg:max-w-xl mx-auto text-center flex flex-col gap-5">
        <h3 className="text-slate-400 font-bold">SOUNDS</h3>
        <div className="flex items-center justify-center gap-2 md:gap-4">
        <h1 className='text-4xl xl:text-7xl 2xl:text-7xl font-extrabold text-slate-700'>Find your</h1>
        <h1 className='text-4xl xl:text-7xl 2xl:text-7xl font-extrabold text-blue-700'>sound</h1>
        </div>
        <p className='text-slate-500'>
        Preview and download millions of royalty-free samples from top producers, 
        artists, and sound designers. Available on desktop, web, and mobile.
        </p>
        <div className="mt-4 md:mt-8">
        <Link href='' className="text-sm py-2 px-6 lg:py-2 lg:px-14 rounded-3xl bg-blue-700 text-white">
          TRY SOUNDS
        </Link>
        </div>
      </div>
    </div>

    {/* Section sounds Image */}
    <div className="relative pt-4 z-0">
      {/* bg-sound */}
      <div className="absolute w-full h-full -z-10 lg:top-32">
        <Image src="/bg-sound.png" alt='bg-sound' fill className=""/>
      </div>

      {/* sound img */}
      <div className="max-w-sm mx-auto md:max-w-lg lg:max-w-3xl">
        <Image src="/sounds.png" alt='sound' width={950} height={660}/>
      </div>
    </div>



    </section>
  )
}

export default FindSound