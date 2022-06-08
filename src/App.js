import "./App.css";
import * as React from "react";
import { ChakraProvider, Input } from "@chakra-ui/react";
import { TodoItem } from "./todoitem";

function InputForm({ todo, setTodo }) {
  const input = React.useRef("");
  function handleSubmit(event) {
    event.preventDefault();

    const exist = todo.findIndex(x => x.value==input.current.value) !== -1
    if (exist){    
      alert("Sudah ada")
    } else {
      setTodo((currentValue) => [...currentValue, {value: input.current.value, checked: false}]);
    }
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

  function handleChecked(value) {
    const temp = [...todo]
    const index = todo.findIndex(x => x.value === value)
    temp[index].checked = !temp[index].checked
    setTodo(temp)
  }

  const complete = todo.filter((item) => {
    return item.checked === true
  })

  const incomplete = todo.filter((item) => {
    return item.checked === false
  })

  return (
    <div>
      <InputForm todo={todo} setTodo={setTodo} />
      <TodoItem todo={incomplete} onChecked={handleChecked} />
      <br />================================<br/>
      <TodoItem todo={complete} onChecked={handleChecked} />
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
