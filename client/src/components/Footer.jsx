import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white  py-6 px-4 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-center">
        {/* Autify Logo/Text */}
        <div className="text-xl font-bold text-black mb-2 md:mb-0">
          Autify
        </div>

        {/* Copyright */}
        <div className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Komal Hasija. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer

