import React from 'react'
import { Link } from 'react-router-dom'
import logoRouen from '../images/logorouen.png'
function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between max-w-3xl p-4 mx-auto shadow-2xl">
  <a className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-lg"
    href="/" >
    <img src={logoRouen} alt='logo univ'/>
  </a>

  <div className="flex items-center space-x-2 text-sm font-medium text-gray-500">
    <div className="hidden lg:block">
      <Link  to="/article" className="px-3 py-2 rounded-lg" href="/"> 
        Article 
       </Link>
    </div>

    <div className="hidden lg:block">
      <Link  to="/help" className="px-3 py-2 rounded-lg" href="/"> 
           help
       </Link>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar