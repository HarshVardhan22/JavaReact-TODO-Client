import React, { useState, useEffect} from "react";
import { Button } from "react-bootstrap";
import firebaseDb from "../firebase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

const Form = () => {

  const [task, setTask] = useState("");
  const [id,setId] = useState();
  const handleTask = (e) => {
    setTask([e.target.value]);
  };

  const addTask = (e) => {
    e.preventDefault();
    addOrEdit(task);
    setTask("");
  };

  const addOrEdit = (obj) => {
    firebaseDb.child("task").push(obj, (err) => {
      if (err) console.log(err);
    });
  };

  const update = (id,e) =>{
    console.log(id);
    console.log(e.target.value);
    e.target.value="";
  }

  const [taskObject, setTaskObject] = useState({});
  useEffect(() => {
    firebaseDb.child("task").on("value", (snapshot) => {
      if (snapshot.val() != null)
        setTaskObject({
          ...snapshot.val(),
        });
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
            style={{width:"100px",marginLeft:"40%"}}
          >Add</button>
        </div>
       
        <div>
        {Object.keys(taskObject).map((id) => {
        return (         
            <div className="row">            
              <div className="col-6 offset-3">
              <input
                className="form-control mt-2 text-dark"
                type="text"
                style={{ backgroundColor: "#FF0000" }}
                value={taskObject[id][0]}
                onChange={(e)=>{update(id,e)}}
              />
              </div>
              {/* <FontAwesomeIcon icon={faPen} style={{marginTop:"3%",marginRight:"3%"}}/> */}
              <FontAwesomeIcon icon={faTrash} style={{marginTop:"3%"}}/>
            </div>                   
        );
      })} 
        
        </div>
      </form>
      
      

    </>
  );
};
export default Form;
