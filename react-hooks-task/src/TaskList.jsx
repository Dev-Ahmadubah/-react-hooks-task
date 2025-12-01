import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  const { theme } = useContext(ThemeContext)

  if (tasks.length === 0) {
    return (
      <div className={`task-list empty ${theme}`}>
        <p>No tasks yet. Add one above!</p>
      </div>
    )
  }

  return (
    <div className={`task-list ${theme}`}>
      {tasks.map(task => (
        <div 
          key={task.id} 
          className={`task-item ${task.completed ? 'completed' : ''} ${theme}`}
        >
          <span className="task-title">{task.title}</span>
          <div className="task-actions">
            <button
              onClick={() => onToggleTask(task.id)}
              className={`toggle-btn ${task.completed ? 'done' : 'not-done'} ${theme}`}
            >
              {task.completed ? '✓ Done' : 'Mark Done'}
            </button>
            <button
              onClick={() => onDeleteTask(task.id)}
              className={`delete-btn ${theme}`}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TaskList

