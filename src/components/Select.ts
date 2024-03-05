import styled from "styled-components"
import chevronDown from "../assets/chevron-down.svg"

export const StyledSelect = styled.select`
  width: 100%;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  padding: 15px 10px;
  margin-bottom: 15px;
  appearance: none;
  -webkit-appearance: none;
  background: url(${chevronDown});
  background-repeat: no-repeat;
  background-position-x: calc(100% - 4px);
  background-position-y: center;
  background-size: 24px;
  cursor: pointer;

  &:focus {
    outline-color: #128559;
  }
`
