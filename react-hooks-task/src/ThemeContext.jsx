import { createContext, useState, useContext, useEffect } from 'react'

// Step 3: Create a ThemeContext using createContext()
export const ThemeContext = createContext()

// Step 4: Create a ThemeProvider component that remembers if the theme is "light" or "dark"
export function ThemeProvider({ children }) {
  // Get initial theme from localStorage or default to 'light'
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme || 'light'
  })

  // Step 5: Add a function to switch between light and dark themes
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    // Apply theme to document body for global styling
    document.body.className = newTheme
  }

  // Apply theme to document body on mount and when theme changes
  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Custom hook to use theme context
export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}

