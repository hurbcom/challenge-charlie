import { useState } from 'react'

const enterKeyCode = 13

function useInput(onCityChanged) {
  const [text, setText] = useState('')

  function handleSubmit({ keyCode }) {
    if (keyCode === enterKeyCode) {
      onCityChanged(text)
    }
  }

  return {
    handleSubmit,
    setText,
    text,
  }
}

export default useInput
