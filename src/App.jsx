import './App.css';
import ToDoData from './components/ToDoData/ToDoData';
import IncompleteData from "./components/incompleteData/IncompleteData";

function App() {
  return (
    <div className="container mt-5">
      <div className="custom-grid">
        <div className="">
          <IncompleteData />
        </div>
        <div className="">
          <ToDoData />
        </div>
        <div className="">
          <ToDoData />
        </div>
        <div className="">
          <ToDoData />
        </div>
        <div className="">
          <ToDoData />
        </div>
      </div>
    </div>
  );
}

export default App;
