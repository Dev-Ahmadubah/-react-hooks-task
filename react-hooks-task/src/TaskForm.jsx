import { useState, useContext } from 'react'
import { ThemeContext } from './ThemeContext'

// Step 3: Create a function called TaskForm that returns JSX
function TaskForm({ onAddTask }) {
  const { theme } = useContext(ThemeContext)
  // Step 4: Use useState to remember the task title (start with empty string '')
  const [title, setTitle] = useState('')
  const [error, setError] = useState('')

  // Step 6: Add an onChange event to update the title when user types
  const handleChange = (e) => {
    setTitle(e.target.value)
    // Clear error when user starts typing
    if (error) {
      setError('')
    }
  }

  // Step 8: When button is clicked, check if title is not empty, then add the task
  const handleSubmit = (e) => {
    e.preventDefault() // Prevent form from refreshing the page
    
    // Step 10: Show an error message if user tries to add empty task
    if (title.trim() === '') {
      setError('Please enter a task title')
      return
    }

    // Add the task using the function passed from parent
    onAddTask(title)
    
    // Step 9: Clear the input field after adding a task
    setTitle('')
    setError('')
  }

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="form-group">
        {/* Step 5: Create an input field where users can type the task title */}
        <input
          type="text"
          value={title}
          onChange={handleChange}
          placeholder="Enter a new task..."
          className={`task-input ${theme}`}
        />
        {/* Step 10: Show error message if validation fails */}
        {error && <p className="error-message">{error}</p>}
      </div>
      {/* Step 7: Add an "Add Task" button */}
      <button type="submit" className={`add-task-btn ${theme}`}>
        Add Task
      </button>
    </form>
  )
}

export default TaskForm

