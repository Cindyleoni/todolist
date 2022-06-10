import "./App.css";
import * as React from "react";
import { ChakraProvider, Container } from "@chakra-ui/react";
import { MainContainer } from "./MainContainer";

function App() {
  return (
    <ChakraProvider>
      <Container maxW="1400px" centerContent>
        <MainContainer />
      </Container>
    </ChakraProvider>
  );
}

export default App;
