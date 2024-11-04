import { useState } from 'react'
import './App.css'
import Header from './Header'
import Side from './Side'
import Home from './Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='grid-container'>
      <Header/>
      <Side/>
      <Home/>
    </div>
  )
}

export default App
