import React from 'react'

const App = () => {

function btnClicked(){
  console.log("Button Clicked")
}

  return (
    <div>
      <button 
      onClick={btnClicked}
      className='active:scale-95 bg-emerald-600 text-white px-5 py-3 rounded font-bold m-2'>
        Click to Download</button>
    </div>
  )
}

export default App