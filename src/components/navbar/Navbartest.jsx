import React from 'react'

const Navbartest = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">My Website</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Login
        </button>
      </div>
    </nav>
  )
}

export default Navbartest