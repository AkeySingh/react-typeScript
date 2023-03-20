import React from 'react'
import { List } from './generic/List'

const AppGeneric = () => {
  return (
    <>
      <List
        items={['akey singh', 'kajal kumari', 'rahul nepali']}
        onClick={() => console.log('On click function  is called ')}
      />
    </>
  )
}

export default AppGeneric
