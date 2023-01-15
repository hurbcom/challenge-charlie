import { createContext, Dispatch, SetStateAction } from 'react'

type UseStateType<T> = [T, Dispatch<SetStateAction<T>>]

type Location = {
  lat: number
  long: number
}

export type LayoutContextStore = {
  address: UseStateType<string>
  location: Location | undefined
}

const LayoutContext = createContext<LayoutContextStore | undefined>(undefined)

export default LayoutContext
