import React,{Fragment, useState} from "react";
import classes from "./AddForm.module.css";

const AddForm =(props) => {

const [nameInput , setNameInput]= useState("");
const [ageInput, setAgeInput]= useState("");
const [isValid , setIsValid]= useState(true);


const nameInputHandler = (event) => {
if(event.target.value.trim().length > 0 ){
  setIsValid(true)
  
  setNameInput(event.target.value)
}
}

const ageInputHandler = (event) => {
if(event.target.value.trim().length > 0 ){
  setIsValid(true)
  
  setAgeInput(event.target.value)
}
}


const submitHandler= (event) => {
event.preventDefault();

if(nameInput.trim().length === 0 || ageInput.trim().length === 0){
  setIsValid(false);
  return;

}

props.onAddList(nameInput, ageInput)

setNameInput("")
setAgeInput("")
}




  return(
    <Fragment>
      <form onSubmit={submitHandler}>
        <div className={classes.grid}>
        <div className={`${classes.form__container} ${!isValid && classes.invalid}`}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" onChange={nameInputHandler}  value={nameInput}/>
        </div>

        <div className={`${classes.form__container} ${!isValid && classes.invalid}`}>
          <label htmlFor="age">Age</label>
          <input id="age" type="number"  min="0" onChange={ageInputHandler}  value={ageInput}/>
        </div>
        </div>

        <div className={classes.btn__container}>
          <button className={classes.btn}>Submit</button>
        </div>
       
      </form>

    </Fragment>
  )
}

export default AddForm;