import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import * as React from 'react'
import { Route, Router, Routes } from 'react-router-dom'

const customRender = (
  ui: React.ReactElement,
  {
    location = '/',
    path = '/',
  } = {},
) => {
  const history = createMemoryHistory()
  const wrapper = ({ children }) => (
    <div id='root'>
      <Router
        location={location}
        navigator={history}
      >
        <Routes>
          <Route path={path} element={children} />
        </Routes>
      </Router>
    </div>
  )

  return {
    ...render(ui, { wrapper }),
    history,
  }
}

export * from '@testing-library/react'
export { customRender as render }
