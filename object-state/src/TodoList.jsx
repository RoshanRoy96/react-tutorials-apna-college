import { useState } from "react";

function TodoList() {
    let [todos, setTodos] = useState(["sample task"]);
    let [newTodo, setNewtodo] = useState("");

    let addnewTask = () => {
        setTodos([...todos, newTodo]);
        setNewtodo("");
    }

    let updateTodoValue = (event) => {
        setNewtodo(event.target.value);
    }
  return (
    <div>
      <input type="text" placeholder="add a task" value = {newTodo} onChange={updateTodoValue} />
      <br /><br />
      <button onClick={addnewTask}>Add Task</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <hr />
      <h4>Tasks Todo</h4>
      <ul>
        {todos.map((todo) => {
            return <li>{todo}</li>
        })}
      </ul>
    </div>
  );
}

export default TodoList;
