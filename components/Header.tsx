import React from 'react'

const Header: React.FC = () => {
  return (
    <nav className="flex fixed w-full items-center justify-between px-2 h-16 border-b border-gray-200">
      <h1>plathome</h1>
      <button className="ml-auto py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded">
        menu
      </button>
    </nav>
  )
}

export default Header
