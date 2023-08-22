import { footerItemImg } from '@/components/utils/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <section className="relative p-8">
        <div className="max-w-7xl bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500 mx-auto p-2 md:p-6 rounded-xl">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-lg md:text-2xl text-white font-bold">Come change the way</h1>
            <h1 className="text-lg md:text-2xl text-white font-bold">people make music</h1>
            <Link href="" className='text-white text-xs py-2 px-4 border-solid border-2 rounded-2xl mt-2'>JOBS AT SPLICE</Link>
          </div>
        </div>


        <div className="max-w-7xl my-12 mx-auto">

            {/* display grid */}
            <div className="grid  lg:grid-cols-4 xl:grid-cols-12 gap-y-10">

                <div className="col-span-3 md:col-span-6 lg:col-span-6 xl:col-span-3">
                  <Image src="/logo.png" alt='logo' width={120} height={120} />
                  <p className='mt-2'>2021 Splice.com All Rights Reserved Coding By Radthapon</p>
                </div>

                <div className="col-span-2">
                  <h5 className="font-bold">STUDIO</h5>
                    <ul className='flex flex-col gap-2 mt-2'>
                        <li>Features</li>
                        <li>About Splice Studio</li>
                        <li>Managing Your Production Library</li>
                        <li>Collaborationg with Baewatch</li>
                    </ul>
                </div>

                <div className="col-span-2">
                  <h5 className="font-bold">COMMUNITY</h5>
                    <ul className='flex flex-col gap-2 mt-2'>
                        <li>Ableton Live Projects</li>
                        <li>FL Studio Projects</li>
                        <li>Logic Pro X Projects</li>
                        <li>Garageband Projects</li>
                        <li>Remix Contests</li>
                        <li>Tiestos Secrets</li>
                    </ul>
                </div>

                 
                  <div className="col-span-2">
                  <h5 className="font-bold">SOUNDS</h5>
                    <ul className='flex flex-col gap-2 mt-2'>
                        <li>Features</li>
                        <li>Catalog</li>
                        <li>How Jauz Uses Sounds</li>
                        <li>deadmau5s Chimaera</li>
                        <li>KSHMR Vol. 2</li>
                    </ul>
                </div>
              

                <div className="col-span-2 md:col-span-6 lg:col-span-6 xl:col-span-3">
                  <h5 className="font-bold">FIND US ON SOCIAL</h5>
                    <div className="flex gap-2 mt-2 items-center">
                      { footerItemImg.map((img => (
                        <Image key={img.id} src={img.imagefoorer} alt='logofooter' width={20} height={20}/>
                      )))}
                    </div>
                    <div className="max-w-sm mt-2">
                        <ul className='grid md:grid-cols-6'>
                          <li className="col-span-2">Terms of Use</li>
                          <li className="col-span-2">Privacy Policy</li>
                          <li className="col-span-2">Jobs</li>
                          <li className="col-span-2">Contact</li>
                          <li className="col-span-2">Help</li>
                        </ul>
                    </div>
                </div>

                <div className="col-span-3 md:hidden xl:block">

                </div>

                <div className="col-span-2">
                  <h5 className="font-bold">PLUGINS</h5>
                    <ul className='flex flex-col gap-2 mt-2'>
                        <li>Top VSTs</li>
                        <li>Serum</li>
                        <li>Rent to Own</li>
                        <li>Free Plugins</li>
                        <li>Top Manufacturers</li>
                    </ul>
                </div>

                <div className="col-span-2">
                  <h5 className='font-bold'>BEATMAKER</h5>
                    <ul>
                        <li>Create Your Own Beat</li>
                        <li>Wakapella</li>
                        <li>Just Blaze</li>
                    </ul>
                </div>

                <div className="col-span-2">
                  <h5 className="font-bold">BLOG</h5>
                    <ul className='flex flex-col gap-2 mt-2'>
                        <li>Latest Posts</li>
                        <li>Using Soundtoys Decapitator</li>
                        <li>Mastering 101</li>
                        <li>Producing Future Beats</li>
                        <li>Belonging at Splice</li>
                    </ul>
                </div>

                <div className="col-span-3 md:hidden xl:block">

                </div>

            </div>
        </div>

    </section>
  )
}

export default Footer