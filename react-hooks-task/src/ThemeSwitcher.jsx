import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

// Step 7: Create a simple button that toggles between light and dark themes
function ThemeSwitcher() {
  // Step 8: Use useContext in your button to read the current theme and change it
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <button 
      onClick={toggleTheme} 
      className={`theme-switcher ${theme}`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  )
}

export default ThemeSwitcher

