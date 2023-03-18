import React from 'react'
import './App.css'
import { Box } from './HooksComponents/Context/Box'
import { ThemeContextProvider } from './HooksComponents/Context/ThemeProviderContext'

export const AppContext = () => {
  return (
    <>
      <div className='App'>
        <ThemeContextProvider>
          <Box />
        </ThemeContextProvider>
      </div>
    </>
  )
}
