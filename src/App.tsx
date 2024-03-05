import { useState, FormEvent } from "react"
import styled from "styled-components"

const StyledApp = styled.main``

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: auto;
`

const StyledLabel = styled.label`
  margin-bottom: 10px;
`

const StyledInput = styled.input`
  margin-bottom: 20px;
`

const StyledSelect = styled.select`
  margin-bottom: 20px;
`

const StyledButton = styled.button`
  background-color: green;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
`

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
    <StyledApp>
      <StyledForm onSubmit={handleSubmit}>
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
          <option value="">Valitse alta</option>
          <option value="biisi">biisi</option>
        </StyledSelect>

        <StyledLabel>Sävellaji*</StyledLabel>
        <StyledInput
          type="range"
          min={-2}
          max={2}
          value={formState.key}
          onChange={({ target }) =>
            setFormState({ ...formState, key: Number(target.value) })
          }
          required
        />

        <StyledLabel>
          Sallin tietojeni tallennuksen karaokejärjestelmään
        </StyledLabel>
        <StyledInput
          type="checkbox"
          checked={formState.consent}
          onChange={({ target }) =>
            setFormState({ ...formState, consent: target.checked })
          }
        />

        <StyledButton type="submit">Ilmoittaudu</StyledButton>
      </StyledForm>
    </StyledApp>
  )
}

export default App
