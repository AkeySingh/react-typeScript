import React, { useReducer, memo } from 'react'

/**
 * -------------------------------------useReducer example
 */

// Application State
interface CounterState {
  counter: number
  random: number
}

// Actions
type Increment = { type: 'increment'; payload: number }
type Random = { type: 'random' }
type AppActions = Increment | Random

// Reducer
function CounterReducer(state: CounterState, action: AppActions) {
  switch (action.type) {
    case 'increment':
      return { ...state, counter: state.counter + action.payload }
    case 'random':
      return { ...state, random: Math.random() }
    default:
      return state
  }
}

// Root Component
export function Counter() {
  const [state, dispatch] = useReducer(CounterReducer, { counter: 0, random: 0 })

  return (
    <div className='comp'>
      <h1>Demo: React useReducer</h1>

      <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>
        <h3>"Increment" Action</h3>
      </button>

      <button onClick={() => dispatch({ type: 'random' })}>
        <h3>"Random" Action</h3>
      </button>
      <Parent>
        <Child1 value={state.counter} />
        <Child2 value={state.random} />
      </Parent>
    </div>
  )
}

// Parent Component
const Parent = ({ children }: any) => {
  console.log(' Dashboard: render')
  return (
    <div className='comp'>
      <h3>
        Dashboard
        {children}
      </h3>
    </div>
  )
}

// Child Component
const Child1 = memo((props: { value: number }) => {
  console.log('  Panel1: render')
  return <div className='comp'>Count: {props.value}</div>
})

// Child Component
const Child2 = memo((props: { value: number }) => {
  console.log('  Panel 2: render')
  return <div className='comp'>Random Value: {props.value}</div>
})
