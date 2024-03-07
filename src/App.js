import React, { useState } from "react";
import "./App.css";
import AddForm from "./Components/AddForm";
import ListForm from "./Components/ListForm";




const App = () => {
  const [renderList, setRenderList] = useState([
    { name: "Daniel", age: 27, id: "g1" },
  ]);

  const addHandler = (userName, userAge) => {
    setRenderList((preState) => {
      const updatedState = [...preState];
      updatedState.unshift({
        name: userName,
        age: userAge,
        id: Math.random().toString(),
      });

      return updatedState;
    });
  };

  const deleteHandler = (listId) => {
    setRenderList((preState) => {
      const updatedState = preState.filter((item) => {
        return item.id !== listId;
      });

      return updatedState;
    });
  };

  let content =<p style={{textAlign: "center", fontSize:"1.6rem"}}>No user found. Maybe try logging in!</p>

 if(renderList.length > 0){
  content = <ListForm items= {renderList}  onDeleteList={deleteHandler} />
 }

  return (
    <div className="container">
      <h1>Welcome back!</h1>
      <AddForm onAddList ={addHandler}  />

      <div>{content}</div>
    </div>
  );
};

export default App;
