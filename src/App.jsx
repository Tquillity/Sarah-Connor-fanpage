import { useState } from 'react'
import SaraQuiz from './components/SaraQuiz'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <SaraQuiz />
      </div>

    </>
  )
}

export default App
