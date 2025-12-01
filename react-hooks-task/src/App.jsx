import { useContext } from 'react'
import { ThemeProvider, ThemeContext } from './ThemeContext'
import { useTasks } from './useTasks'
import TaskForm from './TaskForm'
import TaskList from './TaskList'
import ThemeSwitcher from './ThemeSwitcher'
import './App.css'

function AppContent() {
  // Step 8: Import this hook in your main App component and use it
  const { tasks, addTask, toggleTask, deleteTask } = useTasks()
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`app ${theme}`}>
      <header className={`app-header ${theme}`}>
        <h1>Task Manager</h1>
        <ThemeSwitcher />
      </header>
      
      <main className="app-main">
        <TaskForm onAddTask={addTask} />
        <TaskList 
          tasks={tasks} 
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
        />
      </main>
    </div>
  )
}

function App() {
  // Step 6: Wrap your App component with the ThemeProvider
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
