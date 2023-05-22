import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import WeatherPage from './weather/pages/WeatherPage'

export default function () {
  return (
    <BrowserRouter>
      <ToastContainer />
      <section id='content'>
        <Routes>
          <Route path='/' element={<WeatherPage />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </section>
    </BrowserRouter>
  )
}
