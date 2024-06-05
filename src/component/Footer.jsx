import React from 'react'
import { FaSlackHash } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='mt-auto py-2'>
      <div className='d-flex flex-column align-items-center gap-2'>
        <FaSlackHash size={32} />
        <div>Copyright &copy; {currentYear} All rights reserved</div>
      </div>
    </footer>
  )
}

export default Footer