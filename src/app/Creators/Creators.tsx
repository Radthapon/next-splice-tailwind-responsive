import { creatorItem } from '@/components/utils/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Creators = () => {
  return (
    // section creators
    <section className="relative bg-black/100">
      
        {/* bg-creators word */}
        <div className="absolute top-[-8rem] right-0">
          <div className="max-w-xs md:max-w-xl lg:max-w-2xl xl:max-w-4xl">
            <Image src="/bg-subtract.png" alt='bg-creators' width={800} height={500} />
          </div>
        </div>
        {/* End bg-creators word */}

        {/* width creators */}
        <div className="relative max-w-7xl mx-auto md:pt-40 flex flex-col justify-between lg:flex-row pb-40">


        {/* creators text container */}
        <div className=" max-w-lg flex flex-col mx-auto px-10 md:mx-0 py-20">
          <div className="flex flex-row gap-x-5">
          <h1 className="text-white text-3xl xl:text-6xl 2xl:text-6xl font-extrabold">What</h1>
          <h1 className='text-blue-700 text-3xl xl:text-6xl 2xl:text-6xl font-extrabold'>creators</h1>
          </div>
          <h1 className='text-white text-3xl xl:text-6xl 2xl:text-6xl font-extrabold mt-3'>are saying about Splice</h1>
          <p className="text-slate-400 mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Augue tellus urna, mi velit diam. Turpis diam amet massa id.
          </p>
          <div className="mt-8">
           <Link href='' className="text-sm py-2 px-4 lg:py-2 lg:px-12 rounded-3xl bg-blue-700 text-white">
            TRY IT NOW
            </Link>
          </div>
        </div>

        {/* creators item container */}
        <div className="max-w-2xl grid grid-cols-1 
        mx-auto lg:mx-0 md:grid-cols-2 gap-x-6 gap-y-10 
        px-10 md:px-0">
  
        {creatorItem.map((creator => (
          <div key={creator.id} className=" bg-zinc-900 py-4 px-7 rounded-md overflow-hidden flex flex-col justify-center">
              <p className="text-white text-lg">{creator.desc}</p>
                <div className="flex flex-row gap-4 mt-4 items-center">
                    {creator.profile.img && 
                    <Image src={creator.profile.img}
                      alt="porfile"
                      width={50}
                      height={50}
                    />}
                    <div className="">
                    <span className='text-white text-sm'>
                      {creator.profile.name}
                      </span>
                      <p className='text-white text-xs'>{creator.profile.postion}</p>
                    </div>
                </div>
            </div>
          )))}

        </div>


        </div>
    </section>
  )
}

export default Creators