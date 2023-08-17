import './App.css';
import ToDoData from './components/ToDoData/ToDoData';
import IncompleteData from "./components/incompleteData/IncompleteData";
import DoingData from "./components/DoingData/DoingData";
import UnderReview from "./components/UnderReview/UnderReview";
import CompletedData from "./components/CompletedData/CompletedData";;

function App() {
  return (
    <section className="mx-1 my-1">
      <div className="custom-grid overflow-auto">

        <IncompleteData />


        <ToDoData />


        <DoingData />


        <UnderReview />


        <CompletedData />

      </div>
    </section>
  );
}

export default App;
