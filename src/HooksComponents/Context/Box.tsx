import React, { useContext } from 'react'
import { ThemeContext } from './ThemeProviderContext'

export const Box = () => {
  const theme = useContext(ThemeContext)
  return (
    <div style={{ backgroundColor: theme.secondary.main }}>
      <h1> This Is Theme Context Box model</h1>
    </div>
  )
}
