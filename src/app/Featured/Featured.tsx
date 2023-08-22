import { featuredItem } from '@/components/utils/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Featured = () => {
  return (
    // SECTION FEATURED
    <section className="py-8 md:py-12 md:my-12">

      <div className="max-w-5xl mx-auto text-center pb-8 md:pb-12">
        <h1 className='text-slate-500 font-semibold'>FEATURED IN</h1>
      </div>

    {/* DISPLAY WIDTH FOR FEATURED ITEM */}
    <div className="max-w-sm md:max-w-6xl mx-auto grid gap-2 grid-cols-4 md:grid-cols-5">
        {/* WIDTH FOR ITEM */}
        {featuredItem.map( featured => (
        <div
        key={featured.id} 
        className="flex items-center justify-center py-2 col-span-2 md:col-auto">
          {featured.img &&
          <Image src={featured.img}
          alt={featured.title}
          width={124} height={24}
          className="max-w-full fill-current"
          /> }
        </div>
        ))}
    </div>



  </section>

  )
}

export default Featured