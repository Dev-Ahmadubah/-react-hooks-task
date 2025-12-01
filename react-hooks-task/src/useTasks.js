import { useState, useEffect } from 'react'

export function useTasks() {
  // Step 4: Use useState to create a tasks variable (start with empty array [])
  const [tasks, setTasks] = useState([])

  // Step 5: Add a useEffect that runs when the page loads to get saved tasks from localStorage
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks')
    if (savedTasks) {
      try {
        setTasks(JSON.parse(savedTasks))
      } catch (error) {
        console.error('Error loading tasks from localStorage:', error)
      }
    }
  }, []) // Empty dependency array means this runs only once when component mounts

  // Step 6: Add another useEffect that saves tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks]) // Runs whenever tasks array changes

  // Function to add a new task
  const addTask = (title) => {
    const newTask = {
      id: Date.now(), // Simple ID generation using timestamp
      title: title.trim(),
      completed: false
    }
    setTasks([...tasks, newTask])
  }

  // Function to toggle task completion status
  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  // Function to delete a task
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

