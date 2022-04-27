import React from 'react'
import logoRouen from '../images/logorouen.png'
function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between max-w-3xl p-4 mx-auto shadow-2xl">
  <a className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-lg"
    href="/" >
    <img src={logoRouen} alt='logo univ'/>
  </a>

  <ul className="flex items-center space-x-2 text-sm font-medium text-gray-500">
    <li className="hidden lg:block">
      <a className="px-3 py-2 rounded-lg" href="/"> Home </a>
    </li>

    <li><a className="px-3 py-2 rounded-lg" href=""> Projects </a></li>

    <li>
    
    </li>
  </ul>
</nav>

    </>
  )
}

export default Navbar