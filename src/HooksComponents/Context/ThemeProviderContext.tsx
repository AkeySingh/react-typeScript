import React, { createContext } from 'react'
import { Theme } from './theme'

export const ThemeContext = createContext(Theme)

type ThemeContextProps = {
  children: React.ReactNode
}

export const ThemeContextProvider = ({ children }: ThemeContextProps) => {
  return <ThemeContext.Provider value={Theme}> {children} </ThemeContext.Provider>
}
