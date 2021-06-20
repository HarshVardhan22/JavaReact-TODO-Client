import React from "react";
import Form from "./Form";

import firebaseDb from "../firebase";

const MainPage = () => {
  
  const addOrEdit = (obj) => {
    firebaseDb.child("task").push(obj, (err) => {
      if (err) console.log(err);
    });
  };


  return (
    <>
      <div
        className="jumbotron text-light jumbotron-fluid"
        style={{ backgroundColor: "#161616" }}
      >
        <h1>To-Do List</h1>
      </div>
      <div className="row">
        <div className="col-6 offset-3">
          <Form addOrEdit={addOrEdit} />
        </div>
      </div>
      
    </>
  );
};

export default MainPage;
