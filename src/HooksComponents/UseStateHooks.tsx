import { useState } from 'react'

export const UseStateHooks = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLoggedIn = () => {
    setIsLoggedIn(true)
  }

  const handleLoggedOut = () => {
    setIsLoggedIn(false)
  }

  return (
    <>
      <div style={{ padding: '40px' }}>
        <h1> Hello!</h1>
        <div>
          {isLoggedIn ? (
            <button onClick={handleLoggedOut}> Log Out </button>
          ) : (
            <button onClick={handleLoggedIn}> Log In </button>
          )}

          {isLoggedIn ? <h2>You are Logged In successfully on this application </h2> : <h2>Please LogIn</h2>}
        </div>
      </div>
    </>
  )
}
