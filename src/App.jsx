import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-content">
      <Navbar />
    </div>
  )
}

export default App
