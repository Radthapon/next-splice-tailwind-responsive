import Image from 'next/image'
import Hero from './Hero/Hero'
import Featured from './Featured/Featured'
import FindSound from './FindSound/FindSound'
import Pluging from './Pluging/Pluging'
import Studio from './Studio/Studio'
import Creators from './Creators/Creators'
import GoodSounds from './GoodSounds/GoodSounds'
import Footer from './Footer/Footer'

export default function Home() {
  return (
   <main>
    <Hero/>
    <Featured/>
    <FindSound/>
    <Pluging/>
    <Studio/>
    <Creators/>
    <div className="relative">
      <GoodSounds/>
      <div className="absolute top-[90%] md:top-[82%] left-0 right-0">
      <Footer/>
    </div>
    </div>

   </main>
  )
}
