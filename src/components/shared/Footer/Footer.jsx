import React from 'react'
import {  FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import jobs from "../../../assets/Icon/jobs-64.png"

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10">
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
    <h1 className="  text-gray-700 text-start font-bold text-2xl flex gap-2">
      <img src={jobs} alt="" className='h-10 w-10' /> Jobs Here</h1>

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
</footer>
  )
}

export default Footer