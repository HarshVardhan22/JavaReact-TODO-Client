import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
const Counter=()=> {
    const [counter,setCounter] = useState(0);
    function increment(){
        setCounter(counter+1);
    }
  return (
    <div>
      <h1>Counter</h1>
      <Button className="btn-primary" onClick={increment}>{counter}</Button>
    </div>
  );
}

export default Counter;
