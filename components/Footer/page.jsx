import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between">
            <div>
              <p className="text-white">© 2021 Your Company. All rights reserved.</p>
            </div>
            <div>
              <a href="#" className="text-white">Privacy Policy</a>
              <a href="#" className="text-white ml-4">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer