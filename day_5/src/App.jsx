import React from 'react'
import Men from './components/Men'
import Women from './components/Women'

const App = () => {

  const [gender, setGender] = React.useState("Male");

  const toggleGender = () => {
    setGender(gender === "Male" ? "Female" : "Male");
  };

  return (
    <div className='bg-gray-800 min-h-screen flex flex-col items-center justify-center gap-10'>

      <h1 className='text-white text-3xl font-bold text-center'>{gender}</h1>

      <button onClick={toggleGender} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 mx-auto block'>
        Change Gender
      </button>

   {gender === "Male" ? <Men /> : <Women />}
    </div>
  )
}

export default App