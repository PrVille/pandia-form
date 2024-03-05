import styled, { keyframes, css } from "styled-components"

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`

export const StyledButton = styled.button<{ $loading?: boolean }>`
  background-color: #128559;
  color: white;
  padding: 10px 30px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  filter: brightness(1);
  transition: filter 150ms ease-in-out;

  &:hover {
    filter: brightness(0.9);
  }

  ${(props) =>
    props.$loading &&
    css`
      pointer-events: none;
      animation: ${pulse} 2s infinite;
    `}
`

export const StyledButtonGroup = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 20px;

  & :first-child {
    border-radius: 4px 0px 0px 4px;
  }

  & :last-child {
    border-radius: 0px 4px 4px 0px;
  }

  & :nth-child(n + 2) {
    margin-left: -1px;
  }
`

export const StyledButtonGroupButton = styled(StyledButton)<{
  $isActive: boolean
}>`
  width: 100%;
  padding: 10px;
  border-width: 1px;
  border-style: solid;
  border-radius: 0px;
  border-color: ${(props) => (props.$isActive ? "#128559" : "inherit")};
  background-color: ${(props) => (props.$isActive ? "#128559" : "white")};
  color: ${(props) => (props.$isActive ? "white" : "inherit")};
`
