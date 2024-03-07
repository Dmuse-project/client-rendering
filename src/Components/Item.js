import React, { Fragment } from "react";
import classes from "./List.module.css";

const Item = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <Fragment>
      <li  onClick={deleteHandler} className={classes.item}>{props.children}</li>
    </Fragment>
  );
};

export default Item;
