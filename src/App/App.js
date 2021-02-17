import TodoList from "../TodoList/TodoList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Todo List App</h1>
      <div className="AppContainer">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
