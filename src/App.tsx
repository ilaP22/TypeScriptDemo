import AddToDo from "./components/addtodo";
import Navbar from "./components/navbar";
import Todos from "./components/todos";
import "./App.css";

const App = () => {
  return (
    <main>
      <h1>TASK TRACKER</h1>
      <br />
      <Navbar />
      <AddToDo />
      <Todos />
    </main>
  );
};

export default App;
