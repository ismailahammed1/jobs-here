import React from 'react'
import {  FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <Link className="link link-hover">Branding</Link>
    <Link className="link link-hover">Design</Link>
    <Link className="link link-hover">Marketing</Link>
    <Link className="link link-hover">Advertisement</Link>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <Link className="link link-hover">About us</Link>
    <Link className="link link-hover">Contact</Link>
    <Link className="link link-hover">Jobs</Link>
    <Link className="link link-hover">Press kit</Link>
  </nav>
  <nav>
    <h1 className="  text-gray-700 text-start font-bold text-2xl"> Jobs Here</h1>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">
  <Link>
  <FaFacebook className='text-4xl text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400'/>
  </Link>
  <Link>
  <FaInstagram className='text-4xl text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400'/>
  </Link>
  <Link>
  <FaTwitter className='text-4xl text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400'/>
  </Link>
  <Link>
  <FaLinkedin className='text-4xl text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400'/>
  </Link>
  <Link>
  <FaGithub className='text-4xl text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400'/>
  </Link>
    </div>
  </nav>
</footer>
  )
}

export default Footer