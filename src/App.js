
import React, {useState} from 'react'
import './App.css';
import Tasks from './Tasks/tasks'

function App() {

  const [task, setTask] = useState('')
  const [display, setDisplay] = useState('')
  const [editTask, setEditTask] = useState('')
  const [tasks, setTasks] = useState(
    [

    ])
    const changeStatus = (index) => {
      let newarr=[...tasks]
      newarr[index].status = !newarr[index].status
      setTasks(newarr)
    }

    const myChangeHandler = (event) => {
      setTask(event.target.value)
    }

    const addTask = (inptask) => {
      const ml = new Date()
    let newtask = [{id: ml.getTime(), display: false, status:false, task: inptask}, ...tasks]
      setTasks(newtask)
    }

    const deleteHandler = (index) => {
      let newarr=[...tasks]
      newarr.splice(index, 1)
      setTasks(newarr)
    }


    const editHandler = (index) => {
      let editTask = [...tasks]
      editTask[index].display = true
        setTasks(editTask)
    }

    const editedtask = (event) => {
      setEditTask(event.target.value)
    }

    const saveHandler = (index, input) => {
      let editTask = [...tasks]
      editTask[index].task = input
      editTask[index].display = false
      setTasks(editTask)
      setEditTask('')
    }

  return (
    <div className="App">
    <div className="form">
    <label htmlFor="task">Add your task</label>
    <input name='task' type="text" onChange={myChangeHandler} value={task}/>
    <button onClick={() => addTask(task)} >Add your task</button>
    </div>
    {tasks.map((lang, index) => (
      <Tasks task={lang.task} status={lang.status} value={editTask} input={editedtask}
       display={lang.display} edit={() => editHandler(index)} save={() => saveHandler(index, editTask)}
        delete={() => deleteHandler(index)} changeStatus={() => changeStatus(index)}  key={index}/>
  ))}
    </div>
  );
}

export default App;
