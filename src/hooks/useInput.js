import { useEffect, useState } from 'react'

const enterKeyCode = 13

function useInput(initialText = '', onCityChanged) {
  const [text, setText] = useState(initialText)

  useEffect(() => {
    setText(initialText)
  }, [initialText])

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
