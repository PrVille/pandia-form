import { useState, FormEvent } from "react"
import styled from "styled-components"
import GlobalStyles from "./styles/global"
import {
  StyledButton,
  StyledButtonGroup,
  StyledButtonGroupButton,
} from "./components/Button"
import { StyledErrorMessage, StyledLabel } from "./components/Label"
import {
  StyledCheckbox,
  StyledFileInput,
  StyledFileInputOverlay,
  StyledFileInputWrapper,
  StyledInput,
} from "./components/Input"
import { StyledSelect } from "./components/Select"
import { ErrorState, FormState } from "./types/global"

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
  padding: 10px;
  margin: auto;
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

const songs = [
  "Smells Like Teen Spirit",
  "Black Hole Sun",
  "Come as You Are",
  "Enter Sandman",
  "Man in the Box",
  "Everlong",
  "Under the Bridge",
  "Killing in the Name",
  "November Rain",
  "Alive",
]

const App = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [formState, setFormState] = useState<FormState>({
    name: "",
    song: "",
    key: 0,
    consent: false,
    file: null,
  })
  const [errorState, setErrorState] = useState<ErrorState>({
    name: "",
    song: "",
  })

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    setErrorState({
      name: formState.name ? "" : "Anna nimi tai nimimerkki!",
      song: formState.song ? "" : "Valitse biisi!",
    })

    if (!formState.name || !formState.song) return

    setLoading(true)

    // Simulate submit
    setTimeout(() => {
      console.log(formState)
      setLoading(false)
    }, 3000)
  }

  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <StyledForm onSubmit={handleSubmit}>
          <StyledTitle>Ilmoittautumislomake</StyledTitle>

          <StyledLabel>Nimi tai nimimerkki*</StyledLabel>
          {errorState.name && (
            <StyledErrorMessage>{errorState.name}</StyledErrorMessage>
          )}
          <StyledInput
            type="text"
            value={formState.name}
            onChange={({ target }) =>
              setFormState({ ...formState, name: target.value })
            }
          />

          <StyledLabel>Kasvokuva</StyledLabel>
          <StyledFileInputWrapper>
            <StyledFileInputOverlay>
              {formState.file ? formState.file.name : "+ Tuo kasvokuva"}
            </StyledFileInputOverlay>
            <StyledFileInput
              accept=".jpg,.jpeg,.png"
              onChange={({ target }) =>
                setFormState({
                  ...formState,
                  file: target.files ? target.files[0] : null,
                })
              }
            />
          </StyledFileInputWrapper>

          <StyledLabel>Biisi*</StyledLabel>
          {errorState.song && (
            <StyledErrorMessage>{errorState.song}</StyledErrorMessage>
          )}
          <StyledSelect
            value={formState.song}
            onChange={({ target }) =>
              setFormState({ ...formState, song: target.value })
            }
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

          <StyledButton type="submit" $loading={loading}>
            Ilmoittaudu
          </StyledButton>
        </StyledForm>
      </StyledApp>
    </>
  )
}

export default App
