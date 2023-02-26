import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Modal from "../UI/Modal";
import "./Tag.css";
const TagStyled = styled.div`
  background-color: #efefef;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 5px;
  display: inline-block;
  font-size: 14px;
  color: #222428;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const Tag = (props) => {
  const tagList = props.tag;
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="tagsContainer">
      {tagList.slice(0, 7).map((tag, index) => {
        return <TagStyled key={index}>{tag}</TagStyled>;
      })}
      {tagList.length > 7 && (
        <span onClick={() => setShowModal(!showModal)}>More..</span>
      )}
      {showModal && (
        <Modal onClose={() => setShowModal(!showModal)}>
          {tagList.map((tag, index) => {
            return <TagStyled key={index}>{tag}</TagStyled>;
          })}
        </Modal>
      )}
    </div>
  );
};
export default Tag;
