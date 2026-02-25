import React from 'react'

const Button = (props) => {
  return (
    < div className='text-xl text-red-500 px-6 py-3 bg-blue-500 rounded w-fit p-3 m-2 '>
        <h1>{props.text}</h1>

    </div>
  )
}

export default Button