import React from "react";
import { TextInput } from "./lib";

function App() {
  return (
    <div style={{ width: 640, margin: "15px auto", border: "1px solid grey", padding: "10px" }}>
      <h1>Hello React</h1>
      <TextInput label="Email" placeholder="name@example.com" />
    </div>
  );
}

export default App;
