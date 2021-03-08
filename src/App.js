import React, {useState} from 'react'
import './App.css';
import Addtask from "./Component/Addtask";
import ListTask from "./Component/ListTask";

function App() {
  const [filter, setFilter] = useState(false) 
  const toggle=()=> {
    setFilter(!filter)
  }
  return (
    <div className="container demo_wrap">
      {/* <img src="https://cdn.wallpapersafari.com/45/75/r2HRgQ.jpg" /> */}
      <Addtask toggle={toggle} filter={filter} />
      <ListTask filter={filter} />
    </div>
  )
}

export default App;
