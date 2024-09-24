"use client";

import Head from 'next/head';
import VisionMissionSection from './components/VisionSection';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Music Temple</title>
        <meta name="description" content="Indian Music Edutech Company" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Satisfy&family=Yellowtail&display=swap" rel="stylesheet"></link>
      </Head>

      <header className="bg-black text-white p-6">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <img src="/logo.png" alt="Music Temple" className="h-14 rounded-md" />
          <ul className="flex space-x-6">
            <li className='text-yellow-700'>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        </nav>
      </header>

      <main className="bg-gray-100">


      <section className=" w-full h-screen text-center flex flex-col bg-[#000000] justify-space">
        <div className="flex justify-center items-start z-1">
          <img src="/mt.png" alt="Music Temple" className="h-60 rounded-md" />
        </div>

        <div className="absolute inset-0 flex justify-center items-center z-0">
          <img 
            src="/logobacky.png" 
            alt="Background Image" 
            className="w-1/2 opacity-10 transition duration-500 hover:opacity-40 hover:scale-105"
          />
        </div>

        <div>
          <p className="text-6xl text-white btn-shine">Indian Music for All</p>
        </div>

        <div className="flex flex-col justify-center items-center h-full">
          <p className="text-3xl  text-[#a7a7a7] pt-10">A Global Music Edutech Company</p>
          <div className='bg-white p-0.2 rounded-3xl neon-border-3 mt-4'>
          <div className='flex justify-center items-center bg-[#000000] rounded-3xl'>
          <p className="mt-2 text-xl font-light text-[#e1d3b1] pb-2 pl-4">Incubated by </p>
          <img src="/pravartak.png" alt="Music Temple" className="h-16 rounded-md pl-4 pr-2" />          
          </div></div>        

        </div>
      </section>



        <VisionMissionSection />

        <section
  className="bg-center bg-repeat"
  style={{
    backgroundImage: 'url(/logogray.png)',
    backgroundSize: '20px 20px', // Adjust the size of the tiles
  }}
>
  <div className="w-screen h-screen text-[#0764ac] flex flex-col justify-center items-center p-10 inset-0 bg-gradient-to-t from-white/100 to-transparent">
    <div className="p-1 bg-white rounded-2xl shadow-lg w-1/2 h-2/3 neon-border-2">
      {/* Smaller width and height for the image container */}
      <img
        src="/ds.jpg"
        alt="Harmonizing Heritage"
        className="object-cover h-full w-full rounded-2xl"
      />
    </div>

    <div className="relative text-center mb-6 mt-10 p-4 rounded-3xl w-full">
      {/* Add gradient background with transparency */}
      <div
        className="absolute rounded-3xl z-0 pointer-events-none"
      ></div>
      <h3 className="text-6xl font-bold relative z-10">
  Harmonizing Heritage <span className="font-cursive italic ">with</span> Innovation
</h3>



      <p className="mt-4 text-3xl relative z-10">
        Music Temple’s Visionary Expansion into the Future of Music Education
      </p>
    </div>
  </div>
</section>

        {/* Gamaka Box Notation System with Vertical Sections */}




        <section
  className="min-h-screen w-full flex flex-col bg-[#071523] text-white items-center p-8"
  style={{
    backgroundImage: "url('/blue-purple-1.svg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  }}
>
  <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 w-full">
    {/* Card for Image and First Text Section */}
    <div className="w-full md:w-1/2 bg-[#ffffff14] backdrop-blur-sm rounded-2xl shadow-lg p-6 h-[650px] flex flex-col transition-transform duration-300 hover:rotate-3 hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.4)]">
      <div className="h-2/5 bg-white p-0.5 rounded-2xl">
        <img
          src="/mtt.jpg"
          alt="Harmonizing Heritage"
          className="object-cover h-full w-full rounded-2xl"
        />
      </div>
      <div className="text-left mt-4 h-3/5 overflow-y-auto">
        <h3 className="text-lg text-white font-bold mb-4">Music Temple</h3>
        <p className="text-white leading-relaxed">
          Established in 2015 by Ramesh Vinayakam, it originated as The Music Temple Academy dedicated to unraveling the intricacies of Indian music, particularly ragas and Gamakas. The pivotal innovation, the Gamaka Box Notation System (GBNS), invented in 2010, revolutionized this endeavor by notating Gamakas, previously considered unwritable. This breakthrough facilitated the recording, preservation, analysis, and teaching of Indian music across diverse genres: Carnatic, Hindustani, Folk, and Film Music.
        </p>
      </div>
    </div>

    {/* Card for Second Text Section */}
    <div className="w-full md:w-1/2 bg-[#ffffff14] backdrop-blur-sm rounded-2xl shadow-lg p-6 h-[650px] flex flex-col transition-transform duration-300 hover:rotate-3 hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.4)]">
      <div className="text-left h-full overflow-y-auto">
        <p className="text-white leading-relaxed pb-10">
          Above all, it facilitated access to Indian music for all, which has been overly dependent on the rote system. This educational research organization, now known as Music Temple Private Limited, has evolved to focus on developing platforms for Indian music education, including apps, Learning Management Systems (LMS), and collaborations with educational institutions. Incubated by IIT Madras in 2022, the initiative garnered patronage from Mr. R. Thiagarajan, Founder & Chairman of the Shriram Group, marking significant milestones in its journey.
        </p>
        <div className="h-2/5 bg-white p-0.5 rounded-2xl">
          <img
            src="/c2.jpg"
            alt="Harmonizing Heritage"
            className="object-cover h-full w-full rounded-2xl"
          />
        </div>
      </div>
    </div>

    {/* Card for Third Text Section */}
    <div className="w-full md:w-1/2 bg-[#ffffff14] backdrop-blur-sm rounded-2xl shadow-lg p-6 h-[650px] flex flex-col transition-transform duration-300 hover:rotate-3 hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.4)]">
      <div className="text-left h-full overflow-y-auto">
        <div className="h-1/5 bg-white p-0.5 rounded-2xl">
          <img
            src="/c1.jpg"
            alt="Harmonizing Heritage"
            className="object-cover h-full w-full rounded-2xl"
          />
        </div>

        <p className="mt-4 text-white leading-relaxed">
          At Music Temple, our expansion blueprint is centered around seamlessly intertwining age-old musical traditions with cutting-edge technological advancements. By harmonizing the time-honored essence of Indian classical music with state-of-the-art innovations, we are poised to amplify our reach and impact globally.
        </p>
        <p className="mt-4 text-white leading-relaxed">
          Our strategic growth revolves around leveraging modern technologies to simplify traditional music education, ensuring its accessibility to a diverse global audience. As we expand, we remain committed to pioneering new tools, like the Gamaka Box, and integrating technological breakthroughs that preserve the richness of tradition while fostering an environment ripe for creative exploration and evolution.
        </p>
      </div>
    </div>
  </div>
</section>






<section 
  className="min-h-screen w-full flex flex-col justify-end text-white p-8 relative"
  style={{ 
    backgroundImage: "url('/rv.jpg')", 
    backgroundSize: "contain", 
    backgroundPosition: "center",

  }}
>
  {/* Black-to-transparent gradient overlay */}
  <div 
    className="absolute inset-0" 
    style={{
      background: "linear-gradient(to top, rgba(0, 0, 0, 1) 15%, transparent 100%)"
    }}
  ></div>

  {/* Content */}
  <div className="relative text-left pr-10 mb-16"> {/* Adjusted for two columns */}
    <span className="bg-white text-gray-800 text-sm font-semibold rounded-lg px-4 py-1 inline-block mb-4">
      About the Founder
    </span> {/* Label container with rounded borders */}
    <h3 className="text-3xl text-white font-bold mb-2">Ramesh Vinayakam</h3> {/* Adjusted size for Ramesh Vinayakam text */}
    <h3 className="text-xl text-white font-bold mb-6">
      Researcher | Music Director | Singer | Lyricist | Composer | Arranger
    </h3> {/* Adjusted size */}
    <p className="mt-4 text-2xl text-white leading-relaxed"> {/* Adjusted font size */}
      Ramesh Vinayakam is a prolific Indian Music Director known for his soul-stirring compositions that blend traditional elements with modern sensibilities, enchanting listeners worldwide. He is also the inventor of the <span className="font-bold text-pink-900">Gamaka Box Notation System</span>, a groundbreaking invention in the music fraternity, enriching musical expression.
    </p>
  </div>
</section>

<section className="min-h-screen w-full flex flex-col items-center justify-center text-white p-20 bg-[#1d051a]">
  <div className="w-full flex justify-center mb-12">
    <h1 className="text-6xl font-bold text-pink-200">Music Temple Offerings</h1>
  </div>

  <div className="flex flex-wrap justify-center md:w-1/2 space-x-4 mb-8 md:mb-0">
    {[
      "Music Learning Through GBNS",
      "Gamaka Box Certification Program",
      "Gamaka Box Software",
      "Gamaka Box Innovation and Research",
      "Gamaka Box Education Series / Channel",
      "Gamaka Box Curriculum for Vocal / Instrumental",
      "Events",
      "Music Labels",
      "Music Videos"
    ].map((offering) => (
      <div
        key={offering}
        className="bg-[#ffffff1c] text-white rounded-lg p-2 m-2 shadow-lg transition-transform transform hover:text-black hover:scale-105 hover:bg-gray-100 hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.4)]"
      >
        <h3 className="text-xl font-semibold">{offering}</h3>
      </div>
    ))}
  </div>
</section>




<section className="min-h-screen w-full flex flex-col items-center text-white p-10 bg-[#020b0e]">
  <h2 className="text-4xl mb-8 text-gray-600"><span className='font-semibold text-blue-200'>Gamaka Box</span> presentation at IIT Madras by RV</h2>

  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:pr-16 md:pl-16 ">
    {Array.from({ length: 6 }).map((_, index) => (
      <div 
        key={index} 
        className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.4)] hover:bg-gray-100"
      >
        <img 
          src={`gb${index + 1}.jpg`} 
          alt={`Presentation Image ${index + 1}`} 
          className="w-full h-full p-0.5 rounded-xl"
        />
      </div>
    ))}
  </div>
</section>

<section className="min-h-screen w-full flex flex-col items-center justify-center text-white p-8 bg-[#a6ccee]">
  <div className="max-w-3xl text-center">
    <h2 className="text-5xl font-bold mb-6 text-gray-800">
      Let your passion for music thrive at <span className="text-blue-500">Music Temple!</span>
    </h2>

    <p className="text-xl text-gray-800 mb-10">
      “Connect with us, share your journey, and delve into the rich world of melodies. Your voice matters as we shape the future of musical education together. Join our community, and let’s create, explore, and celebrate the magic of music!”
    </p>

    <a href="/contact" className="inline-block bg-white text-gray-800 rounded-full px-8 py-4 text-lg font-semibold shadow-lg transition-transform transform hover:scale-110 hover:shadow-2xl hover:bg-blue-500 hover:text-white">
      GET IN TOUCH
    </a>
  </div>
</section>



<footer className="bg-[#000000] text-white p-6">
  <div className="max-w-screen-lg mx-auto text-center">
    <h3 className="text-xl font-bold mb-4">MUSIC TEMPLE PRIVATE LIMITED</h3>

    <p className="mb-4">
      IITM Pravartak Technologies Foundation<br />
      B Block, 5th, IITM Research Park, B5-01, Kanagam Road, Taramani, Chennai – 600 113. India
    </p>

    <div className="mb-4">
      <a href="/terms" className="text-gray-800 hover:underline mx-2">Terms of Use</a>
      <a href="/privacy" className="text-gray-800 hover:underline mx-2">Privacy Policy</a>
    </div>

    <p className="text-sm">©2023 Music Temple Private Limited. All rights reserved.</p>
  </div>
</footer>









      </main>
    </div>
  );
}
