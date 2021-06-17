import React,{useState,useEffect} from "react";
import Form from "./Form";
import Task from "./Task";
import firebaseDb from "../firebase";
const MainPage = () => {

    const[taskObject,setTaskObject] = useState({});

    useEffect(()=>{
        firebaseDb.child('task').on('value',snapshot=>{
            if(snapshot.val()!=null)
            setTaskObject({
                ... snapshot.val()
            })
        })
    },[])

    const addOrEdit = obj => {
        firebaseDb.child("task").push(
            obj,
            err => {
                if(err)
                console.log(err);
            }
        )
    }
  return (
    <>
      <div className="jumbotron text-light jumbotron-fluid" style={{backgroundColor:"#161616"}}>
        <h1>To-Do List</h1>
      </div>
      <div className="row">
        <div className="col-6 offset-3">
          <Form addOrEdit={addOrEdit}/>
        </div>
       
      </div>
      <div className="row">
          <div className="col-6 offset-3">
          {
            Object.keys(taskObject).map(id=>{
                return <p className="alert" style={{backgroundColor:"#FF0000"}}>{taskObject[id][0]}</p>
            })
        }
          </div>
      </div>
    </>
  );
};

export default MainPage;
