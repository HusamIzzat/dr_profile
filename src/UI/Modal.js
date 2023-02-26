import React from "react";
import "./Modal.css";
import { useState } from "react";

import { SlClose } from "react-icons/sl";
const Modal = (props) => {
  //   const closeModal = () => {
  //     props.onClick();
  //   };
  return (
    <div className="backdrop" onClick={props.onClose}>
      <div className="modal">
        <div className="Modal__header">
          <h2>{props.title}</h2>
          <SlClose></SlClose>
        </div>
        <div className="Modal__body">{props.children}</div>
      </div>
    </div>
  );
};
export default Modal;
