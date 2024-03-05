import styled from "styled-components"
import check from "../assets/check.svg"

export const StyledInput = styled.input`
  width: 100%;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  padding: 15px 10px;
  margin-bottom: 15px;

  &:focus {
    outline-color: #128559;
  }
`

export const StyledFileInputWrapper = styled.div`
  position: relative;
  width: 100%;
`

export const StyledFileInputOverlay = styled.button`
  width: 100%;
  background-color: white;
  border-radius: 4px;
  padding: 15px 10px;
  font-size: 0.75em;
  font-weight: 700;
  border-style: dashed;
  border-color: dimgray;
  border-width: 1px;
  color: dimgray;
  margin-bottom: 15px;
`

export const StyledFileInput = styled(StyledInput).attrs({ type: "file" })`
  position: absolute;
  left: 0;
  opacity: 0;
  cursor: pointer;

  &::-webkit-file-upload-button {
    display: none;
  }
`

export const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  width: 20px;
  height: 20px;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  border-width: 1px;
  border-style: solid;
  border-color: gray;
  border-radius: 4px;

  &:checked {
    background: url(${check});
  }
`
