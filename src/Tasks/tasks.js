import React, {useState} from 'react'
import './tasks.css'

const Tasks = (props) => {
  let status = props.status
  let display = props.display
  const style = [{display: "block"},{display: "none"}]

return(
      <div className="tasks">
      <p>{props.task}</p>
      <input type="text" onChange={props.input} value={props.value} style={display ? style[0] : style[1]} placeholder='Edit your task'/>
      <button className="completed" style={display ? style[0] : style[1]} onClick={props.save}>Save</button>
      <button className='edit' style={display ? style[1] : style[0]} onClick={props.edit}>Edit</button>
      <button className={status ? 'completed' : 'pending'} onClick={props.changeStatus}>{status ? 'Completed' : 'Pending'}</button>
      <button className='del' onClick={props.delete}>Remove</button>
      </div>
)
}
export default Tasks
