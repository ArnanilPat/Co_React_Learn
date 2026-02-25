import React from 'react'

const Card = (props) => {

    
  return (
    <div className='bg-white m-2 p-2 rounded shadow-md w-fit'>
       <h1 className='text-2xl  font-semibold'> 
         {props.user} is {props.age} years old.
       </h1>
    </div>
  )
}

export default Card