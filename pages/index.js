import Image from 'next/image'
import React from 'react'
import { Carousel, Container, Section, SosialSection, Work, } from '../components'

function Home() {
  return (
    <div className='w-full'>
      <Section id={"home"}>
        <Carousel />
      </Section>
      <section id='about'>
        <Container className={"py-20"}>
          <div className='flex justify-start gap-12 items-center lg:flex-row flex-col'>
            <Image src={"/imayye.jpg"} height={600} width={600} objectFit="cover" />
            <div>
              <h1 className='text-xl font-medium mb-5'>Hey there! I'm Fatimah Azzara 👋</h1>
              <p className='leading-8'>I'm a student at a University in the South Kalimantan. Game and Sleep are things I like, but there are some things I hate including peanuts.</p>
            </div>
          </div>
          <a href='https://instagram.com/imayye_/'>
            <img src='/imayye-ig.jpg' alt='Imayye Feed Instagram' className='w-full h-full lg:mt-20 mt-10 hover:scale-105 transition-all' />
          </a>
        </Container>
      </section>
      <Section id={"Live Stream"}>
         <Container>
          <h1 className='text-center text-xl font-medium mb-3'>⭐ Some of My Latest Live Streams ⭐</h1>
           <p className='text-center mb-20'> Thankyou for watching, like and subscribe 😊</p>
            <div data-aos="zoom-in" className='flex flex-wrap justify-center lg:-mx-4 -mx-2'>
            <Work />
          </div>
        </Container>
      </Section>
      <SosialSection />
      <footer className='flex justify-center py-2'>
        <span className='mb-5 text-xs'>Copyright © 2023 <a href='https://lrmn.vercel.app/' className='text-gray-800 font-medium dark:text-gray-200'>L RMN</a></span>
      </footer>
    </div>
  )
}

export default Home
