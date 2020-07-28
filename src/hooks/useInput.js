import { useState } from 'react'

function useInput() {
  const [text, setText] = useState('')

  return {
    setText,
    text,
  }
}

export default useInput
