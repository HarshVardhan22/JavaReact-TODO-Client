import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Form = (props) => {
  const [task, setTask] = useState("");
  const [taskArr, setTaskArr] = useState([]);

  const handleTask = (e) => {
    setTask([e.target.value]);
  };

//   const handleTaskArr = () => {
//     setTaskArr([...taskArr, task]);
//     setTask("");
//   };

  const addTask = (e) => {
    e.preventDefault();
    props.addOrEdit(task);
    setTask("");
  };

  return (
    <>
      <form onSubmit={addTask}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="task"
            value={task}
            onChange={handleTask}
          />
          {taskArr}
          {/* <Button className="btn-danger mt-2" onClick={handleTaskArr}>
            Add
          </Button> */}
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-success btn-block"
            style={{width:"100px",marginLeft:"40%"}}
          >Add</button>
        </div>
      </form>
    </>
  );
};
export default Form;
