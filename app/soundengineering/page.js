import Head from 'next/head';
import Link from 'next/link';
import Spline from '@splinetool/react-spline';
import Image from 'next/image';


export default function SoundEngineering() {
  const cards = [
    {
      title: 'Certification',
      image: '/certificate.png',
      details: 'Provided by IITM Pravartak'
    },
    {
      title: 'Mode',
      image: '/workspace.png',
      details: 'IITM Pravartak campus every weekend'
    },
    {
      title: 'Hands-on Studio Experience',
      image: '/equalizer.png',
      details: 'Work with the latest equipment'
    },
    {
      title: 'Real-Life Project',
      image: '/project.png',
      details: 'Gain industry exposure'
    },
    
  ];

  return (
    <div className='bg-[#040a16] min-h-screen flex flex-col items-center'>
      <Head>
        <title>Music Temple</title>
      </Head>
      <nav className="bg-[#ffffff14] p-4 m-3 rounded-lg w-full max-w-7xl mt-12 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Link href="/">
        <Image 
      src="/logo.png" 
      alt="Logo" 
      width={64} 
      height={64} 
      className="w-full object-cover rounded-lg " />
        </Link>
      </div>
      <ul className="flex flex-wrap justify-center space-x-4">
        <li>
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="/soundengineering" className="text-green-300 hover:text-gray-300">
            Sound Engineering
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-white hover:text-gray-300">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
      <main className="w-full max-w-7xl">
        <section className="px-4 text-center w-full max-w-7xl">
          <h1 className="mb-2 pt-16">
            <span className="bg-green-500 text-white text-sm font-bold py-1 px-3 rounded-full inline-block mb-5">New Course Launched !</span>
            <span className="text-pink-900 text-3xl md:text-4xl lg:text-8xl font-bold block">Sound Engineering</span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-6">
            <span className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold">Certification Course</span>
          </h2>
          <Image src="/se.jpg" alt="Sound Engineering Course" className="w-full h-70 object-cover rounded-lg mb-4" width={1500} height={1500}  />
          <p className="text-lg md:text-xl lg:text-2xl mb-6 mt-16 text-white">
            Music Temple, in association with IITM Pravartak, is proud to launch a comprehensive Sound Engineering Course starting on August 3, 2024. This certification program is designed to provide a deep understanding of sound engineering through a structured four-module curriculum. The one-year full certification program will cost students ₹ 2.4 lakhs. Special student discounts allowed, check out announcements from time to time. A student can either take up one module for 3 months or take up one full-year program and get the full certification which will be best suited for better career placements in the industry.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 text-center w-full max-w-7xl mt-8">
          {cards.slice(0, 4).map((card, index) => (
            <div key={index} className="bg-[#ffffff14] rounded-lg shadow-lg flex flex-col items-start pr-5 pl-5 pt-10 text-white">
              <Image src={card.image} alt={card.title} className="w-20 h-20 rounded-lg self-center " width={500} height={500}  />
              <div className='mt-auto pt-5'>
              <p className="text-gray-300 text-start">{card.details}</p>
              <h3 className="font-bold text-3xl mb-4 text-blue-200 text-start">{card.title}</h3>
              </div>
            </div>
          ))}
        </section>
        
        <section className='pt-10'>
        <Image src='/inside.png' alt='Brochure' className="w-full  rounded-lg self-center " width={3000} height={3000}  />
        <Image src='/Outside.png' alt='Brochure' className="w-full  rounded-lg self-center pt-10 " width={3000} height={3000}  />
        </section>

    
     
      </main>

      <footer className='bg-gray-800 text-white py-8 mt-10 w-full'>
        <div className='max-w-5xl mx-auto text-center'>
          <p className='mb-2'>Copyright © 2024 <a href="https://musictemple.in" className='text-yellow-500 hover:underline'>Music Temple</a></p>
          <p className='mb-2'>
            <a href='/privacy-policy' className='text-yellow-500 hover:underline'>Privacy Policy</a> | 
            <a href='/terms-of-service' className='text-yellow-500 hover:underline'>Terms of Use</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
