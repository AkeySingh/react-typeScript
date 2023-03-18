import { useRef, useState, useEffect } from 'react'
import { border } from '@mui/system'

const btnStyle = {
  backgroundColor: 'lightgrey',
  color: 'black',
  padding: '10px 50px',
  border: '1px solid black',
  borderRadius: '4px',
  cursor: 'pointer',
}

export const UserRef = () => {
  const [counter, setCounter] = useState(0)
  const counterBtn = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    counterBtn.current?.focus()
  }, [])

  const incrementCounter = () => {
    console.log(counterBtn.current?.innerHTML)
    setCounter(counter + 1)
  }
  return (
    <>
      <h1>Use of useRef hook </h1>

      <h2>
        <button className='btn-couter' onClick={incrementCounter} style={btnStyle} ref={counterBtn}>
          {counter}
        </button>
      </h2>
    </>
  )
}
