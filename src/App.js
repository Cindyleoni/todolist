import "./App.css";
import * as React from "react";
import { ChakraProvider, Input } from "@chakra-ui/react";
import { TodoItem } from "./todoitem";

function InputForm({setTodo }) {
  const input = React.useRef("");
  function handleSubmit(event) {
    event.preventDefault();
    setTodo((currentValue) => [...currentValue, {value: input.current.value, checked: false}]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <Input ref={input}></Input> <br></br>
      </div>
    </form>
  );
}

function Container() {
  const [todo, setTodo] = React.useState(() => {
    const localItem = window.localStorage.getItem("todo");
    return localItem !== null ? JSON.parse(localItem) : []
  });

  return (
    <div>
      <InputForm todo={todo} setTodo={setTodo} />
      <TodoItem todo={todo} />
    </div>
  );
}

function App() {
  return (
    <ChakraProvider>
      <Container />
    </ChakraProvider>
  );
}

export default App;
