import { createRoot } from 'react-dom/client'

import './styles/index.scss'

import { WeatherForecast } from './modules'

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(<WeatherForecast />)
