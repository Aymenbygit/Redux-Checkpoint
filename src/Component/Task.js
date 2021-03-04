import React,{useState} from 'react'
import { useDispatch } from "react-redux";
import {delete_task, complete_task, edit_task, update_task} from "../Actions/actions"
// import { v4 as uuidv4 } from "uuid";


const Task = props => {
  const dispatch = useDispatch();
  const [field, setfield] = useState(props.task.text)
  return (
        <div className="col-4">
          {props.task.isEdited ? <input className="form-control input_up"  value={field} name="text" type="text" onChange={(e)=> setfield(e.target.value)} /> : <h4 className="card-body justify-content-between">{props.task.text}</h4>}
            <button className="col-4 mb-1 btn btn-danger" onClick={()=> {dispatch(delete_task(props.task.id))}} >Delete</button>
            <button className="col-4 mb-1 btn btn-info" onClick={()=> props.task.isEdited ? dispatch(update_task(props.task.text=field,props.task.isEdited=false)) : dispatch(edit_task(props.task.id)) } >{props.task.isEdited ? 'Save Edit' : 'Edit'}</button>
            <button className={props.task.complete ? 'col-4 mb-1 btn btn-warning'  : 'col-4 mb-1 btn btn-success'} onClick={()=> {dispatch(complete_task(props.task.id))}}> {props.task.complete ? 'Undo' : 'Complete'} </button>
        </div>
    )
}

export default Task
