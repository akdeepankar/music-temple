
'use client';
import Spline from '@splinetool/react-spline/next';
import React from 'react';
import Head from 'next/head';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper';
import { Container } from 'postcss';
import Link from 'next/link';


const testimonials = [
  {
    image: "/TM1.jpg",
    testimonial: "You have achieved what we have not achieved so far!",
    name: "John Lalgudi G. Jayaraman",
    company: "Violin Legend"
  },
  {
    image: "/TM2.webp",
    testimonial: "This is history; this is making history; this will create history!",
    name: "Aruna Sairam",
    company: "Vice-President, Sangeet Natak Academy"
  },
  {
    image: "/TM3.jpg",
    testimonial: "It’s totally mind-boggling even to think what was presented. It’s a great gift to Carnatic Music!",
    name: "Sudha Raghunathan",
    company: "Sangita Kalanidhi"
  },
  {
    image: "/TM4.jpg",
    testimonial: "Gamaka Box is a breakthrough in the system of notation and is a great boon to the students of South Indian Classical Music!”",
    name: "V. S. Narasimhan",
    company: "Founder, Madras String Quartet"
  },
  {
    image: "/TM5.webp",
    testimonial: "Totally Scientific methodology of notation!",
    name: "Pandit Ajoy Chakraborti",
    company: "Ace Hindustani Singer"
  },
  {
    image: "/TM6.webp",
    testimonial: "It enables students to actually visualise Gamakas. It is something unheard of you know. That’s its uniqueness!",
    name: "N. Rajam",
    company: "Ace Hindustani Violinist"
  },
  {
    image: "/TM7.jpeg",
    testimonial: "Gamaka Box Notation has proved that even students total foreign to classical music can play authentic music off the paper!",
    name: "P. S. Narayanswami",
    company: "Sangita Kala Acharya"
  },
  {
    image: "/TM8.jpeg",
    testimonial: "Gamaka Box is a precious jewel!",
    name: "Dr. Jeremy Woodruff",
    company: "Composition Istanbul University"
  },
  {
    image: "/TM9.jpeg",
    testimonial: "Gamaka Box is here to stay!",
    name: "Ludwig Pesch",
    company: "Author, South Indian Music, Oxford University Press"
  }
];

const videoData = [
  { src: "https://www.youtube.com/embed/FHUZtoG2ZmM", title: "Vaathapi Ganapathim – Maerz Musik Festival (March Music Festival)" },
  { src: "https://www.youtube.com/embed/Vr8gQ8Bl__k", title: "Gamaka Box Effect!- South Indian Todi Raga in – North Indian Sarod – Abhishek Borkar" },
  { src: "https://www.youtube.com/embed/5CO0GMD8DTc", title: "Memory Space Chennai – Berlin Workshop With Ramesh Vinayakam" },
  { src: "https://www.youtube.com/embed/xmRkNA6-yE0", title: "German Musicians Rehearsing Khamboji Through Gamaka Box Notation" },
  { src: "https://www.youtube.com/embed/h5wQMFDCsVU", title: "Gamaka Box Effect- English Violinist Alice Baron Plays Todi Gamakas off the paper!" },
  { src: "https://www.youtube.com/embed/MhS2nr1Hwl4", title: "Gamaka Box Effect! – Shanakarabharanam Varnam – Sight Reading by Guitarist Matt Bacon" }
];


const TestimonialSection = () => {
  const duplicatedTestimonials = [...testimonials];

  return (
    <div className="bg-[#050d1c] w-full py-8">
      <section className="text-center w-full max-w-6xl mx-auto">
        <h2 className="text-lg md:text-xl lg:text-3xl font-medium mb-12">
          <span className="text-white">Indian & Western Musicians on </span>
          <span className="text-yellow-500">Gamaka Box Notation System (GBNS)</span>
        </h2>
        <div className="overflow-x-auto lg:overflow-hidden ">
        <div className="flex flex-nowrap lg:grid lg:grid-cols-3 lg:gap-4 lg:auto-rows-fr">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-full sm:min-w-0 bg-[#ffffff13] p-6 shadow-lg rounded-lg flex flex-col items-center m-2"
            >
              <img
                src={testimonial.image}
                alt={`User ${index + 1}`}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <div className="text-center">
                <p className="text-sm mb-3 text-white font-semibold">"{testimonial.testimonial}"</p>
                <p className="font-semibold text-base text-white">{testimonial.name}</p>
                <p className="text-xs text-white">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>
    </div>
  );
};






const YouTubeSection = () => {
  return (
    <div className="bg-[#010302] w-full py-8 justify-center flex">
    <section className=' text-center w-full max-w-5xl pt-10'>
      <h2 className="text-lg md:text-xl lg:text-3xl font-medium mb-10">
        <span className="text-yellow-500">Gamaka Box Notation System </span>
        <span className="text-white">Videos</span>
      </h2>
      <div className="overflow-x-auto lg:overflow-hidden">
        <div className="flex flex-nowrap lg:grid lg:grid-cols-3 lg:gap-4 lg:auto-rows-fr">
          {videoData.map((video, index) => (
            <div key={index} className="flex flex-col items-center flex-shrink-0 w-60 lg:w-full lg:h-64">
              <iframe
                src={video.src}
                title={`Video ${index + 1}`}
                className="w-full h-32 lg:h-40 object-cover rounded-lg pl-5"
                allowFullScreen
              ></iframe>
              <p className="mt-2 text-sm text-gray-300">{video.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section></div>
  );
};


export default function Home() {
  return (
    <div className='bg-[#040a16] min-h-screen flex flex-col items-center'>
      <Head>
        <title>Music Temple</title>
      </Head>

      <div className='fixed'>


      </div>


      <div className="fixed top-0 left-0 right-0 bg-[#030811] text-green-300 text-center py-2 z-50">
        <Link href="/soundengineering" className="block w-full">
          Launching Sound Engineering One-year Certification Program by IITM Pravartak starting from August 3, 2024!
        </Link>
      </div>

      <nav className="bg-[#ffffff14] p-4 m-3 rounded-lg w-full max-w-7xl mt-12 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <img src="logo.png" alt="Logo" className="h-9 w-auto rounded-lg" />
        </Link>
      </div>
      <ul className="flex flex-wrap justify-center space-x-4">
        <li>
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="/soundengineering" className="text-white hover:text-gray-300">
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
      <Spline
    scene="https://prod.spline.design/hj2eZPuXhJV8cVjk/scene.splinecode" 
    className="w-full h-80 md:h-96 lg:h-[600px]"
    />
 
      </main>
      <section className="px-4 py-8 text-center w-full max-w-7xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 pt-16">
          <span className="text-white">Welcome to </span>
          <span className="text-yellow-500">Music Temple</span>
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-6">
          <span className="text-white"> Incubated as a Music Edutech by </span>
          <span className="text-[#344362]">IIT M Pravartak!</span>
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl mb-6 text-white">Your ultimate destination for comprehensive music education and innovation.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-[#ffffff14] text-gray-900 p-4 rounded-lg shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <img src="/wave.svg" alt="Card 1" className="w-full h-40 object-cover rounded-lg mb-4" />
            <p className="text-gray-400 text-md font-semibold">At Music Temple, we blend tradition with technology to offer an unparalleled learning experience in Indian classical music, film music, and folk music.</p>
          </div>
          <div className="bg-[#ffffff14] text-gray-900 p-4 rounded-lg shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <img src="/course.svg" alt="Card 2" className="w-full h-40 object-cover rounded-lg mb-4" />
            <p className="text-gray-400 text-md font-semibold">Explore our courses, discover our revolutionary Gamaka Box Notation System (GBNS), the only patented music notation system for Indian Music.</p>
          </div>
          <div className="bg-[#ffffff14] text-gray-900 p-4 rounded-lg shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <img src="/dj.svg" alt="Card 3" className="w-full h-40 object-cover rounded-lg mb-4" />
            <p className="text-gray-400 text-md font-semibold">Join us in transforming the way music is learned and appreciated.</p>
          </div>
        </div>
      </section>
      <div className='justify-center w-full bg-[#0e030b]'>
      <section className='py-4 justify-center text-center w-full max-w-5xl mx-auto Pb-5'>
        <h2 className="text-lg md:text-xl lg:text-3xl font-medium mb-10 mt-5 ">
          <span className="text-[#f9f9fb]">Western Musicians playing Indian Music using </span>
          <span className="text-yellow-700 font-bold">GBNS</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 justify-center py-4">
          <img src="/mt1.png" alt="Card 1" className="w-full h-full object-cover rounded-lg" />
          <img src="/mt2.png" alt="Card 2" className="w-full h-full object-cover rounded-lg" />
          <img src="/mt3.png" alt="Card 3" className="w-full h-full object-cover rounded-lg col-span-2" />
        </div>
      </section>
    </div>

      <YouTubeSection />
      <TestimonialSection />
        <div className='text-center w-full max-w-5xl mx-auto rounded-2xl mt-10 pr-10 pl-10'>
        <img src="/notation.png" alt="Card 1" className="w-full object-cover rounded-lg mb-4" />
        <h2 className="text-lg md:text-xl lg:text-xl font-medium mb-10 mt-8">
          <span className="text-white">WITH </span>
          <span className="text-yellow-500">GBNS</span>
          <span className="text-white">, WE ARE TAKING INDIAN MUSIC TO EVERYONE!</span>
        </h2>
        <h2 className="text-lg md:text-xl lg:text-3xl text-white font-medium mb-10">
          Be part of the music revolution with our GBNS, which is going to transform the lives of many people!
        </h2>
        <h2 className="text-lg md:text-xl lg:text-xl text-white font-medium mb-10">
          Discover your musical potential through our cutting-edge courses and tools. Whether you’re diving into Indian classical music using our patented Gamaka Box Notation System or honing your skills in sound engineering, we’ve got you covered. Begin your musical journey with us today!
        </h2>
        <div className='flex justify-center mt-8'>
          <button className='bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500'>
            Get Started
          </button>
        </div>
      </div>
      <footer className='bg-gray-800 text-white py-8 mt-10 w-full'>
        <div className='max-w-5xl mx-auto text-center'>
          <p className='mb-2'>Copyright © 2024 https://musictemple.in</p>
          <p className='mb-2'>
            <a href='/privacy-policy' className='text-yellow-500 hover:underline'>Privacy Policy</a> | 
            <a href='/terms-of-service' className='text-yellow-500 hover:underline'> Terms of Use</a>
          </p>
        </div>
      </footer>
    </div>
  );
}