import React from 'react'

const Header: React.FC = () => {
  return (
    <div className="flex p-2 border-b items-center">
      <h1>plathome</h1>
      <button className="ml-auto py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded">
        menu
      </button>
    </div>
  )
}

export default Header
