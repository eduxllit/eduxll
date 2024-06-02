import React from 'react'

const Loader = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
          <div className="rounded-md h-20 w-20 border-4 border-t-4 border-blue-500 animate-spin absolute self-center"></div>
    </div>
  )
}

export default Loader