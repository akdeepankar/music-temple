import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function TermsOfUse() {
  return (
    <div className='bg-[#040a16] min-h-screen flex flex-col items-center'>
      <Head>
        <title>Terms of Use - Music Temple</title>
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
      <main className="w-full max-w-7xl flex-grow px-4 pt-10 text-left">
        <section className="w-full max-w-7xl">
          <h1 className="text-white text-4xl font-bold mb-8 text-center">Terms of Use</h1>
          <div className="text-white space-y-4">
            <h2 className="text-2xl font-semibold">Terms of Use</h2>
            <p>Last updated: December 19, 2023</p>
            <p>Please read these terms of use (“Terms”, “Terms of Use”) carefully before using the <a href="https://staging.musictemple.in" className="text-yellow-500 hover:underline">https://staging.musictemple.in</a> (the “Service”) operated by Music Temple Private Limited (“us”, “we”, or “our”).</p>
            <p>Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who wish to access or use the Service.</p>
            <p>By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.</p>

            <h2 className="text-2xl font-semibold">Accounts</h2>
            <p>When you create an account with us, you must provide accurate, complete, and current information at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>
            <p>You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.</p>

            <h2 className="text-2xl font-semibold">Intellectual Property</h2>
            <p>The Service and its original content, features, and functionality are and will remain the exclusive property of Music Temple Private Limited and its licensors. The Service is protected by copyright, trademark, and other laws of both India and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Music Temple Private Limited.</p>

            <h2 className="text-2xl font-semibold">Links To Other Web Sites</h2>
            <p>Our Service may contain links to third-party websites or services that are not owned or controlled by Music Temple Private Limited.</p>
            <p>Music Temple Private Limited has no control over, and assumes no responsibility for the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that Music Temple Private Limited shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.</p>

            <h2 className="text-2xl font-semibold">Changes</h2>
            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days’ notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>

            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us:</p>
            <ul className="list-disc ml-5">
              <li>By email: <a href="mailto:support@staging.musictemple.in" className="text-yellow-500 hover:underline">support@staging.musictemple.in</a></li>
              <li>By visiting this page on our website: <a href="https://staging.musictemple.in/contact" className="text-yellow-500 hover:underline">Contact – Music Temple</a></li>
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
