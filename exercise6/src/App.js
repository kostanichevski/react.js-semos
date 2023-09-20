import { Form } from "./components/Form";
import { Todo } from "./components/Todo";
import { useState } from "react";
import { useEffect } from "react";
import { SimpleForm } from "./components/SimpleForm";
function App() {
  // let listOfTodos = [
  //   { text: "Learn React", done: false },
  //   { text: "Go to the gym", done: false },
  // ];

  // // const [todos, setTodos] = useState(listOfTodos);
  // const [newTodo, setNewTodo] = useState("");
  // // const [todos, setTodos] = useState([
  // //   { text: "Learn React", done: false },
  // //   { text: "Go to the gym", done: false },
  // // ]);
  // const [todos, setTodos] = useState([
  //   { id: 1, text: "Learn React", done: false },
  //   { id: 2, text: "Go to the gym", done: false },
  // ]);

  // useEffect(() => {
  //   console.log(newTodo);
  // }, [newTodo]);

  // let addTodo = () => {
  //   let newTodoObject = {
  //     id: todos.length + 1,
  //     text: newTodo,
  //     done: false,
  //   };

  //   //ja kopira sodrzinata na todos listata vo nova
  //   // potoa vo novata go stava i plus noviot objekt
  //   // i ja setira taa nova lista vo todos preku setTodos
  //   setTodos([...todos, newTodoObject]);

  //   //slednava sintaksa go pravi istoto kako i pogore no na podolg nacin
  //   // let newTodosList = [...todos];
  //   // newTodosList.push(newTodoObject);
  //   // setTodos(newTodosList);
  // };

  // function markTodoAsDone(todo) {
  //   console.log(todo);
  //   setTodos([
  //     ...todos.map(
  //       (item) =>
  //         item.id === todo.id // go barame kliknatiot element
  //           ? { id: item.id, text: item.text, done: !item.done }
  //           : //dokolku e najden kreirame nov objekt so promenet done status
  //             item // dokolku ne e najden si ostanuva istiot item
  //     ),
  //   ]);
  // }
  return (
    <div className="App">
      <h1>Welcome to class 6</h1>
      {/* <input
        placeholder="enter new todo"
        value={newTodo}
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
      />
      <button onClick={addTodo}>Add ToDo</button>
      <hr />
      <Todo listOfTodos={todos} markTodoAsDone={markTodoAsDone} /> */}
      <SimpleForm />
    </div>
  );
}

export default App;
