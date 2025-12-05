import { useState, useContext } from 'react'
import { ThemeContext } from './ThemeContext'


function TaskForm({ onAddTask }) {
  const { theme } = useContext(ThemeContext)
 
  const [title, setTitle] = useState('')
  const [error, setError] = useState('')

  
  const handleChange = (e) => {
    setTitle(e.target.value)
    
    if (error) {
      setError('')
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault() 
    
    
    if (title.trim() === '') {
      setError('Please enter a task title')
      return
    }

    
    onAddTask(title)
    
    
    setTitle('')
    setError('')
  }

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="form-group">
      
        <input
          type="text"
          value={title}
          onChange={handleChange}
          placeholder="Enter a new task..."
          className={`task-input ${theme}`}
        />
       
        {error && <p className="error-message">{error}</p>}
      </div>
      
      <button type="submit" className={`add-task-btn ${theme}`}>
        Add Task
      </button>
    </form>
  )
}

export default TaskForm

