import { useState } from 'react'

type UserProps = {
  name: string
  email: string
}

export const User = () => {
  //   const [user, setUser] = useState<UserProps | null>(null)

  const [user, setUser] = useState<UserProps>({} as UserProps)
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  const handleLoggedInOut = () => {
    setIsLoggedIn(!isLoggedIn)
    if (isLoggedIn === true) {
      setUser({
        name: 'Akey',
        email: 'akey@example.com',
      })
    } else {
      setUser({
        name: '',
        email: '',
      })
    }
  }

  return (
    <>
      <div>
        <button onClick={handleLoggedInOut}>{isLoggedIn ? 'log in' : 'log out'}</button>
        <h2>User Profile</h2>
        <div>
          <h4>Name : {user.name}</h4>
          <h4>Email : {user.email}</h4>
        </div>
      </div>
    </>
  )
}
