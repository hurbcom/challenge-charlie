import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import ProvidersForTests from './testProviders'

const mockGeolocation = {
    getCurrentPosition: jest.fn(),
    watchPosition: jest.fn(),
}

global.navigator.geolocation = mockGeolocation

const customRender = (ui) => render(ui, { wrapper: ProvidersForTests })

export * from '@testing-library/react'
export { customRender as render }
