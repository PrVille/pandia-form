import { useState, FormEvent } from "react"
import styled, { createGlobalStyle } from "styled-components"

import chevronDown from "./assets/chevron-down.svg"
import check from "./assets/check.svg"

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0 auto;
    font-family: Arial, Helvetica, sans-serif;
    color: dimgray;
  }
`

const StyledApp = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledTitle = styled.h4`
  margin-bottom: 20px;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  border-width: 1px;
  border-style: solid;
  border-radius: 8px;
  max-width: 360px;
  margin: auto;
`

const StyledLabel = styled.label`
  font-size: 0.75em;
  font-weight: 700;
  margin-bottom: 5px;
`

const StyledInput = styled.input`
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

const StyledSelect = styled.select`
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

const StyledButton = styled.button`
  background-color: #128559;
  color: white;
  padding: 10px 30px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  filter: brightness(1);

  &:hover {
    filter: brightness(0.9);
  }
`

const StyledButtonGroup = styled.div`
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

const StyledButtonGroupButton = styled(StyledButton)<{ $isActive: boolean }>`
  width: 100%;
  padding: 10px;
  border-width: 1px;
  border-style: solid;
  border-radius: 0px;
  border-color: ${(props) => (props.$isActive ? "#128559" : "inherit")};
  background-color: ${(props) => (props.$isActive ? "#128559" : "white")};
  color: ${(props) => (props.$isActive ? "white" : "inherit")};
`

const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
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

const StyledConsentWrapper = styled.div`
  label {
    margin: 0px;
  }

  display: flex;
  flex-direction: row-reverse;
  column-gap: 8px;
  align-items: center;
  margin-bottom: 20px;
`

const songs = ["Song 1", "Song 2", "Song 3"]

interface FormState {
  name: string
  song: string
  key: number
  consent: boolean
}

const App = () => {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    song: "",
    key: 0,
    consent: false,
  })

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    console.log(formState)
  }

  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <StyledForm onSubmit={handleSubmit}>
          <StyledTitle>Ilmoittautumislomake</StyledTitle>

          <StyledLabel>Nimi tai nimimerkki*</StyledLabel>
          <StyledInput
            type="text"
            value={formState.name}
            onChange={({ target }) =>
              setFormState({ ...formState, name: target.value })
            }
            required
          />

          <StyledLabel>Biisi*</StyledLabel>
          <StyledSelect
            value={formState.song}
            onChange={({ target }) =>
              setFormState({ ...formState, song: target.value })
            }
            required
          >
            <option value="" hidden>
              Valitse alta
            </option>
            {songs.map((song, index) => (
              <option key={index} value={song}>
                {song}
              </option>
            ))}
          </StyledSelect>

          <StyledLabel>Sävellaji*</StyledLabel>
          <StyledButtonGroup>
            {[-2, -1, 0, 1, 2].map((key) => (
              <StyledButtonGroupButton
                $isActive={key === formState.key}
                type="button"
                key={key}
                onClick={() => setFormState({ ...formState, key })}
              >
                {key > 0 ? "+" + key : key}
              </StyledButtonGroupButton>
            ))}
          </StyledButtonGroup>

          <StyledConsentWrapper>
            <StyledLabel>
              Sallin tietojeni tallennuksen karaokejärjestelmään
            </StyledLabel>
            <StyledCheckbox
              checked={formState.consent}
              onChange={({ target }) =>
                setFormState({ ...formState, consent: target.checked })
              }
            />
          </StyledConsentWrapper>

          <StyledButton type="submit">Ilmoittaudu</StyledButton>
        </StyledForm>
      </StyledApp>
    </>
  )
}

export default App
