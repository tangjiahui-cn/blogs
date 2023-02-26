import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      你好啊! 欢迎来到我的博客！
    </div>
  )
}

export default App
