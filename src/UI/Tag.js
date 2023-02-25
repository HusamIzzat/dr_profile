import React from "react";
import styled from "styled-components";

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
  return (
    <>
      {tagList.map((tag, index) => {
        return <TagStyled key={index}>{tag}</TagStyled>;
      })}
    </>
  );
};
export default Tag;
