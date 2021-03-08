import React, {useState} from 'react'
import { useDispatch,useSelector } from "react-redux";
import {add_task} from "../Actions/actions"
import { v4 as uuidv4 } from "uuid";

const Addtask = ({toggle,filter}) => {
  const dispatch = useDispatch();
  const my_tasks = useSelector(state => state.todoReducer);
const [addNewTask, setaddNewTask] = useState({
    id:uuidv4(),
    text:"",
    complete:false,
    isEdited: false
}) 

const no_empty = (addNewTask.text !== "");

const handleChange = (e) => {
    setaddNewTask({...addNewTask,[e.target.name]:e.target.value})
}
const handlesave = () =>{
    dispatch(add_task(addNewTask))
    setaddNewTask({
        id:uuidv4(),
        text:"",
        complete:false,
        isEdited: false
    });
}


    return (
        <div className="col-10">
            <div className="input-group mt-4 mb-1">
            <input className="form-control"  value={addNewTask.text} name="text" placeholder="add new task..." type="text"  onChange={handleChange}  />
            <div className="input-group-append">
            <button className="btn btn-outline-success" onClick={no_empty ? handlesave : null  } >Add</button>
            {/* <button className=" md-2 btn btn-outline-primary" onClick={toggle}  >All</button> */}
            <button className=" md-2 btn btn-outline-primary" onClick={toggle}  >{filter?"Completed":"All Tasks"}</button>
        </div>
        </div>
            <small className="form-text text-muted">
                Tasks Count: {my_tasks.length}
            </small>
                          
        </div>
    )
}
// const mapDispatchToProps = dispatch => {
//     return {
//         addNewTask : task => dispatch (add_task(task))
//     }
// }

export default Addtask
