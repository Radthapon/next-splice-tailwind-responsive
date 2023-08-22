import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Pluging = () => {
  return (
    // PLUGING SECTION
    <section className="relative bg-slate-100">

      {/* absolute bg-pluging */}
      <div className="[clip-path:circle(80.0%_at_50%_100%)] top-[-30rem] 
      md:[clip-path:circle(80.0%_at_50%_100%)] md:top-[-30rem] 
      lg:[clip-path:circle(86.0%_at_50%_100%)] lg:top-[-22rem]
      xl:[clip-path:circle(86.0%_at_50%_100%)] xl:top-[-15rem]
      2xl:[clip-path:circle(75.0%_at_50%_100%)] 2xl:top-[-15rem]
      absolute bg-slate-100 w-full -z-30 h-[100vh]"></div>
      {/* end-bg-pluging */}

      {/* width pluging box */}
      <div className="max-w-6xl mx-auto">
        {/* layout pluging box */}
        <div className="flex flex-wrap items-center justify-between flex-col md:flex-row pt-10">

            {/* Left side */}
          <div className="flex-1 max-w-sm md:max-w-lg mx-auto">
            <div className="flex items-center justify-center">
            <Image src="/Logos.png" alt='logo' width={500} height={400}/>
            </div>
          </div>

          {/* Right side */}
          <div className="flex-1 max-w-sm md:max-w-md md:px-0 lg:max-w-lg pb-4">
            <div className="flex flex-col gap-4 items-center md:items-start">
                <h3 className='text-slate-400 font-bold'>PLUGING</h3>
                <h1 className='text-4xl xl:text-7xl 2xl:text-7xl font-extrabold text-slate-700'>Build your</h1>
                <h1 className='text-4xl xl:text-7xl 2xl:text-7xl font-extrabold text-blue-700'>digital studio</h1>
                <p className='text-slate-500 text-center md:text-start'>
                  Try industry-leading music software for free,
                  pay it off over time and own it forever.</p>
                  <div className="mt-4">
                    <Link href='' className="text-sm py-2 px-4 lg:py-2 lg:px-12 rounded-3xl bg-blue-700 text-white">
                      TRY GEAR
                    </Link>
                  </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Pluging