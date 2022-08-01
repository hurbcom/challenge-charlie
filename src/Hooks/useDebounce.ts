import { useRef } from 'react'

export const useDebounce = (func: Function, wait: number) => {
  const timeoutRef = useRef<number>()

  return (...args: any) => {
    window.clearTimeout(timeoutRef.current)
    timeoutRef.current = window.setTimeout(() => func(...args), wait)
  }
}
