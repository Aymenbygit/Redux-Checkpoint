import React from 'react'
import { useSelector } from "react-redux";
import Task from "./Task";
import Fade from 'react-reveal/Fade';
import TransitionGroup from 'react-transition-group/TransitionGroup';

const ListTask = () => {
  const my_tasks = useSelector(state => state.todoReducer)
    return (
        <div className="col-12 mb-2">
        <TransitionGroup >       
            <div className="col-12 mb-2">
            {my_tasks.map(el=>
            <Fade key={el.id} collapse bottom>
            <Task task={el} />
            </Fade>
            )}
            </div>
            </TransitionGroup>
        </div>
    )
}

export default ListTask
