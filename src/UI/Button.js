import styled from "styled-components";
const Button = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  border: ${(props) => (props.border ? "1px solid #d9ded7" : "none")};
  border-radius: 5px;
  font-size: 0.9em;
  font-weight: 300;
  cursor: pointer;
  outline: none;
`;
export default Button;
