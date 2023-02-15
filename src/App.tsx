import { useState } from 'react'
import { test } from '@/common/olaaaa'

import './styles.css'

export const App = () => {
  const [state, setState] = useState({ count: 0 })

  const increment = () => setState({ count: state.count + 1 })

  const decrement = () => {
    setState({ count: state.count - 1 })
    test(state.count)
  }

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <h2>
        ENV {process.env.TESTE} - {process.env.AGORA_VAI_EN}
      </h2>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}
