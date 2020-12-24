import React, { useEffect, useRef } from "react";
import "./App.css";

import Button from "./components/Button";
import Icon from "./components/Icon";

function App() {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      console.log("App ref ==================");
      console.log(ref);
    }
  }, [ref]);
  return (
    <div className="App">
      <Button
        onClick={() => {
          console.log("hoge");
        }}
      >
        button
      </Button>
      <Button>button2</Button>
      <Button>button3button3button3button3button3</Button>
      <Icon name="search" width={50} height={50} />
    </div>
  );
}

export default App;
