import React from 'react'
// import { UseStateHooks } from './HooksComponents/UseStateHooks'
// import { User } from './HooksComponents/User'
import './App.css'
// import { Counter } from './HooksComponents/Counter'
import { UserRef } from './HooksComponents/UseRef'

export const AppHooks = () => {
  return (
    <>
      <div className='App'>
        {/* <UseStateHooks /> */}

        {/* <User /> */}

        {/* <Counter /> */}
        <UserRef />
      </div>
    </>
  )
}
