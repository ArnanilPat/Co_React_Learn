import React from 'react'
import Card from './components/Card'
import Button from './Components/Button'


const App = () => {

  return (
   <div className='p-3 h-screen bg-black'>
      <Card user='John Doe' age={30} />
      <Card user='Jane Smith' age={25} />
      <Card user='Alice Johnson' age={28} />

      <Button text ='Buy Now' />
      <Button text ='Add to Cart' />
    
   </div>
  )
}

export default App