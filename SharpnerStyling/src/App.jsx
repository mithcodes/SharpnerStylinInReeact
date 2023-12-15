import { useState } from 'react'

import Expense from './components/Expense';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Expense></Expense>  
    
    </>
  )
}

export default App
