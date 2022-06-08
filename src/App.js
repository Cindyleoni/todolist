import "./App.css";
import * as React from "react";
import {
  ChakraProvider,
  Container,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { TodoItem } from "./todoitem";

function InputForm({ todo, setTodo }) {
  const input = React.useRef("");
  function handleSubmit(event) {
    event.preventDefault();

    const exist = todo.findIndex((x) => x.value === input.current.value) !== -1;
    if (exist) {
      alert("Sudah ada");
    } else {
      setTodo((prevValue) => [
        ...prevValue,
        { value: input.current.value, checked: false },
      ]);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={8} direction="column">
        <Heading as="h1" textAlign="center" marginTop="2.5rem">
          TO DO LIST
        </Heading>
        <Input
          ref={input}
          htmlSize={20}
          width="auto"
          // variant="flushed"
          placeholder="Input to do item"
        ></Input>{" "}
        <br></br>
      </Stack>
    </form>
  );
}

function Box() {
  const [todo, setTodo] = React.useState(() => {
    const localItem = window.localStorage.getItem("todo");
    return localItem !== null ? JSON.parse(localItem) : [];
  });

  function handleChecked(value) {
    const temp = [...todo];
    const index = todo.findIndex((x) => x.value === value);
    temp[index].checked = !temp[index].checked;
    setTodo(temp);
  }

  const complete = todo.filter((item) => {
    return item.checked === true;
  });

  const incomplete = todo.filter((item) => {
    return item.checked === false;
  });

  function handleClick(value) {
    const deleteItem = todo.filter((item) => {
      return item.value !== value;
    });
    setTodo(deleteItem);
  }

  React.useEffect(() => {
    window.localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  return (
    <div>
      <InputForm todo={todo} setTodo={setTodo} />
      <TodoItem
        todo={incomplete}
        onChecked={handleChecked}
        onDelete={handleClick}
      />
      <br />
      -------------------------------------------------
      <br />
      <br />
      <TodoItem
        todo={complete}
        onChecked={handleChecked}
        onDelete={handleClick}
      />
    </div>
  );
}

function App() {
  return (
    <ChakraProvider>
      <Container maxW="1400px" centerContent>
        <Box />
      </Container>
    </ChakraProvider>
  );
}

export default App;
