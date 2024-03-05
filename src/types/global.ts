export interface FormState {
  name: string
  song: string
  key: number
  consent: boolean
  file: File | null
}

export interface ErrorState {
  name: string
  song: string
}
