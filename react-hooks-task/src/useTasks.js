import { useState, useEffect } from 'react'

export function useTasks() {
  
  const [tasks, setTasks] = useState([])

  
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks')
    if (savedTasks) {
      try {
        const parsedTasks = JSON.parse(savedTasks)
        if (Array.isArray(parsedTasks)) {
          setTimeout(() => {
            setTasks(parsedTasks)
          }, 0)
        }
      } catch (error) {
        console.error('Error loading tasks from localStorage:', error)
      }
    }
  }, []) 

  
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks]) 

  
  const addTask = (title) => {
    const newTask = {
      id: Date.now(), 
      title: title.trim(),
      completed: false
    }
    setTasks([...tasks, newTask])
  }

  
  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  // Step 7: Return an object with tasks and functions to manage tasks
  return {
    tasks,
    addTask,
    toggleTask,
    deleteTask
  }
}

