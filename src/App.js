import './App.css';
import Addtask from "./Component/Addtask";
import ListTask from "./Component/ListTask";

function App() {
  return (
    <div className="container demo_wrap">
      {/* <img src="https://cdn.wallpapersafari.com/45/75/r2HRgQ.jpg" /> */}
      <Addtask/>
      <ListTask/>
    </div>
  )
}

export default App;
