import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function ThemeSwitcher() {
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

