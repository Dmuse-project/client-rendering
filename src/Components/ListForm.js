import React, { Fragment } from "react";
import classes from "./List.module.css";

import Item from "./Item"

const ListForm = (props) => {
  return (
    <Fragment>
      <ul className={classes.list}>
        {props.items.map((item) => {
          return (
            <Item id={item.id} key={item.id} onDelete={props.onDeleteList}>
              Hello {item.name}, you are {item.age} years old!
            </Item>
          );
        })}
      </ul>
    </Fragment>
  );
};

export default ListForm;
