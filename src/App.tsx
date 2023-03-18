import { loadavg } from 'os'
import React from 'react'
import './App.css'
import { Greet } from './components/Greet'
// import { Person } from './components/Person'
// import { PersonList } from './components/PersonList'
import { Heading } from './components/Heading'
import { Status } from './components/Status'
import { Oscar } from './components/Oscar'

function App() {
  const name = {
    fname: 'Bruce',
    lname: 'Wain',
  }

  const nameList = [
    { fname: 'Akey', lname: 'Singh' },
    { fname: 'Bruce', lname: 'Wain' },
    { fname: 'Manish', lname: 'Kumar' },
    { fname: 'Neeraj', lname: 'Pal' },
    { fname: 'Ravi', lname: 'Sankar' },
  ]
  return (
    <div className='App'>
      <Greet name='Akey_singh' messagesCount={10} isLogedIn={true} />
      {/* <Person name={name} /> */}
      {/* <PersonList names={nameList} /> */}

      {/* <Heading> Hello Heading Component </Heading>
      <Status status={'complete'} /> */}
      {/* <Oscar>
        <Heading> Heading in Oscsar child Node</Heading>
      </Oscar> */}
    </div>
  )
}

export default App
