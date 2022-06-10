import * as React from "react";
import { Heading, Input, Stack } from "@chakra-ui/react";

function InputForm({ setTodo }) {
  const input = React.useRef("");
  function handleSubmit(event) {
    event.preventDefault();

    const inputValue = input.current.value;
    const resetInput = event.target.reset();

    if (inputValue === "") {
      return resetInput;
    } else {
      setTodo((prevValue) => [
        ...prevValue,
        { id: new Date().valueOf(), value: inputValue, checked: false },
      ]);
    }
    return resetInput;
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
          placeholder="Input to do item"
        ></Input>{" "}
        <br></br>
      </Stack>
    </form>
  );
}

export { InputForm };
