import React, { useState, useEffect } from "react";
import firebaseDb from "../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Form = () => {
  const [task, setTask] = useState("");

  const handleTask = (e) => {
    setTask([e.target.value]);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (task != "") addOrEdit(task);
    setTask("");
  };

  const deleteTask = (key) => {
    firebaseDb.child(`task/${key}`).remove((err) => {
      if (err) console.log(err);
    });
  };
  const addOrEdit = (obj) => {
    firebaseDb.child("task").push(obj, (err) => {
      if (err) console.log(err);
    });
  };

  const [taskObject, setTaskObject] = useState({});
  useEffect(() => {
    firebaseDb.child("task").on("value", (snapshot) => {
      if (snapshot.val() != null)
        setTaskObject({
          ...snapshot.val(),
        });
      else setTaskObject({});
    });
  }, []);

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
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-success btn-block"
            style={{ width: "100px", marginLeft: "40%" }}
          >
            Add
          </button>
        </div>

        <div>
          {Object.keys(taskObject).map((id) => {
            return (
              <div className="row" key={id}>
                <div className="col-6 offset-3">
                  <p
                    className="alert mt-2 text-dark"
                    type="text"
                    style={{ backgroundColor: "#FF0000" }}
                  >
                    {taskObject[id][0]}
                  </p>
                </div>
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => deleteTask(id)}
                  style={{ marginTop: "3%" }}
                />
              </div>
            );
          })}
        </div>
      </form>
    </>
  );
};
export default Form;
