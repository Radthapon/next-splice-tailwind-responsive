import { soundItem } from '@/components/utils/data'
import Image from 'next/image'
import React from 'react'

const GoodSounds = () => {
  return (
    <section className="relative bg-black/100 -z-10 py-10 lg:py-40 
    [clip-path:circle(100.0%_at_50%_17%)]
    md:[clip-path:circle(79.0%_at_50%_0)]
    ">

      {/* BG */}
      
        <div className="absolute bottom-[-0%] xl:hidden">
          <Image src="/Patterns.png" alt='bg' width={1500} height={0} className="" />
        </div>
      

        {/* width for good sounds */}
        <div className="max-w-xs md:max-w-md lg:max-w-6xl mx-auto pb-20">
            <h1 className="text-white text-2xl xl:text-4xl 2xl:text-4xl font-extrabold text-center">As good as it sounds</h1>
  
              {/* width for item sound */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 justify-center">
              {soundItem.map((sound) => (
                  <div key={sound.id} className="flex flex-col gap-2">
                    <Image src={sound.image} alt='sound' width={30} height={30} className=""/>
                
                  <h2 className="text-white text-lg font-bold">{sound.title}</h2>
                  <p className="text-slate-500 text-md">{sound.desc}</p>
                 
                  </div>
              ))}
              </div>
        </div>

    </section>
  )
}

export default GoodSounds