import React from 'react'
import {  FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { GrWorkshop } from 'react-icons/gr'

const Footer = () => {
  return (
    <footer className=" bg-base-300 ">
 <div className='max-w-7xl mx-auto footer sm:footer-horizontal text-base-content p-10 '>
   <nav className='ml-10'>
    <h6 className="footer-title">  Browse Jobs
    </h6>
    <Link className="link link-hover">Account</Link>
    <Link className="link link-hover"> Browse Categories
    </Link>
    <Link className="link link-hover">Resume</Link>
    <Link className="link link-hover"> Job List
    </Link>
  </nav>
  <nav>
    <h6 className="footer-title">Home</h6>
    <Link className="link link-hover">About us</Link>
    <Link className="link link-hover">Contact</Link>
    <Link className="link link-hover"> FAQ
    </Link>
    <Link className="link link-hover">Pricing</Link>
  </nav>
  <nav>
<h1 className='font-bold'>Information
</h1>
<h2 className='font-semibold'>Phone:+101 984 754</h2>
<h1 className='font-semibold'>
 Email:info@jovie.com
</h1>
<h1 className='font-semibold'> Address:123, Denver, USA</h1>
   
  </nav>
  <nav>
   
       <Link to="/" className="flex items-center">
              <GrWorkshop className="h-8 w-8 md:h-10 md:w-10 text-red-700"  />
                
                <span className="text-xl md:text-2xl text-red-700 ml-2 font-bold">JobsHere</span>
              </Link>
<h1>Find Your Dream</h1>
    <div className="grid grid-flow-col gap-4">
  <Link>
  <FaFacebook className='text-3xl text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400'/>
  </Link>
  <Link>
  <FaInstagram className='text-3xl text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400'/>
  </Link>
  <Link>
  <FaTwitter className='text-3xl text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400'/>
  </Link>
  <Link>
  <FaLinkedin className='text-3xl text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400'/>
  </Link>
  <Link>
  <FaGithub className='text-3xl text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400'/>
  </Link>
    </div>
  </nav>
 </div>
</footer>
  )
}

export default Footer