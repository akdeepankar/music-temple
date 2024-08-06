import Head from 'next/head';
import Link from 'next/link';
import Spline from '@splinetool/react-spline';

export default function Contact() {

  return (
    <div className='bg-[#040a16] min-h-screen flex flex-col items-center'>
      <Head>
        <title>Music Temple</title>
      </Head>
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
          <Link href="/contact" className="text-green-300 hover:text-gray-300">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
    <main className="w-full max-w-7xl p-4">
  <section className="text-center w-full max-w-7xl">
    <h1 className="text-pink-900 text-3xl md:text-4xl lg:text-5xl font-bold pt-16 mb-8">Get in Touch</h1>
  </section>

  <section className="bg-[#ffffff14] p-6 rounded-lg text-white text-center w-full max-w-7xl mt-8">
    <p className="text-2xl mb-6">
      We'd love to hear from you! Whether you have a question about our courses, need assistance, or just want to talk, we're here to help.
    </p>

    <div className="mb-8">
      <h3 className="text-xl font-bold mb-2">Email</h3>
      <p className="text-lg">
        <a href="mailto:support@musictemple.in" className="text-blue-200 hover:underline">support@musictemple.in</a>
      </p>
    </div>

    <div className="mb-8">
      <h3 className="text-xl font-bold mb-2">Phone</h3>
      <p className="text-lg">
        +91 98417 28747 (Messages Only)
      </p>
    </div>

    <div className="mb-8">
      <h3 className="text-xl font-bold mb-2">Address</h3>
      <p className="text-lg">
        Music Temple Private Limited<br />
        Block-05-01, 5th Floor, IITM Research Park Pravartak, Kanagam Road, Taramani,<br />
        Chennai – 600 113.
      </p>
    </div>
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
