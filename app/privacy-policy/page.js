import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Privacy() {
  return (
    <div className='bg-[#040a16] min-h-screen flex flex-col items-center'>
      <Head>
        <title>Privacy Policy - Music Temple</title>
      </Head>
      <nav className="bg-[#ffffff14] p-4 m-3 rounded-lg w-full max-w-7xl mt-12 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image 
              src="/logo.png" 
              alt="Logo" 
              width={64} 
              height={64} 
              className="w-full object-cover rounded-lg" 
            />
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
      <main className="w-full max-w-7xl flex-grow px-4 text-left">
        <section className="w-full max-w-7xl pt-10">
          <h1 className="text-white text-4xl font-bold mb-8 text-center">Privacy Policy ~ Music Temple Private Limited</h1>
          <div className="text-white space-y-4">
            <h2 className="text-2xl font-semibold">Privacy Policy</h2>
            <p>Last updated: December, 19, 2023</p>
            <p>Music Temple Private Limited (“us”, “we”, or “our”) operates the <a href="https://staging.musictemple.in" className="text-yellow-500 hover:underline">https://staging.musictemple.in</a> website (the “Service”).</p>
            <p>This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>
            <p>We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.</p>

            <h2 className="text-2xl font-semibold">Information Collection and Use</h2>
            <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>

            <h2 className="text-2xl font-semibold">Types of Data Collected</h2>

            <h3 className="text-xl font-semibold">Personal Data</h3>
            <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (“Personal Data”). Personally identifiable information may include, but is not limited to:</p>
            <ul className="list-disc ml-5">
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Phone number</li>
              <li>Address, State, Province, ZIP/Postal code, City</li>
              <li>Cookies and Usage Data</li>
            </ul>

            <h3 className="text-xl font-semibold">Usage Data</h3>
            <p>We may also collect information on how the Service is accessed and used (“Usage Data”). This Usage Data may include information such as your computer’s Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.</p>

            <h2 className="text-2xl font-semibold">Use of Data</h2>
            <p>Music Temple Private Limited uses the collected data for various purposes:</p>
            <ul className="list-disc ml-5">
              <li>To provide and maintain the Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To provide customer care and support</li>
              <li>To monitor the usage of the Service</li>
              <li>To detect, prevent, and address technical issues</li>
            </ul>

            <h2 className="text-2xl font-semibold">Transfer of Data</h2>
            <p>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.</p>
            <p>If you are located outside India and choose to provide information to us, please note that we transfer the data, including Personal Data, to India and process it there.</p>

            <h2 className="text-2xl font-semibold">Your Consent</h2>
            <p>By using our Service, you consent to the collection and use of your information as described in this Privacy Policy.</p>

            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <ul className="list-disc ml-5">
              <li>By email: <a href="mailto:support@staging.musictemple.in" className="text-yellow-500 hover:underline">support@staging.musictemple.in</a></li>
              <li>By visiting this page on our website: <a href="https://staging.musictemple.in/contact" className="text-yellow-500 hover:underline">https://staging.musictemple.in/contact</a></li>
            </ul>
          </div>
        </section>
      </main>
      <footer className='bg-gray-800 text-white py-8 mt-10 w-full'>
        <div className='max-w-5xl mx-auto text-center'>
          <p className='mb-2'>Copyright © 2024 <a href="https://musictemple.in" className='text-yellow-500 hover:underline'>Music Temple</a></p>
          <p className='mb-2'>
            <Link href='/privacy-policy' className='text-yellow-500 hover:underline'>Privacy Policy</Link> | 
            <Link href='/terms-of-service' className='text-yellow-500 hover:underline'>Terms of Use</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
