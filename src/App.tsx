import { useState } from "react";
import "./App.css";
import { MantineProvider, Text } from "@mantine/core";
import MainRouter from "./Router/Router";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <MainRouter />
    </MantineProvider>
  );
}

export default App;
