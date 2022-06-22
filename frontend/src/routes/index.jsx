import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/homePage";
import { DashBoardStyle, Page} from './styles'
import { useAuth } from "../context/auth";
const RoutesApp = () => { 

  const { backgroundUrl } = useAuth()
  
  return(
    <BrowserRouter>
      <DashBoardStyle> 
          <Page backgroundUrl={backgroundUrl}>
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route
                path="*"
                element={<Navigate to="/home" replace />}
              />
            </Routes>
          </Page>
      </DashBoardStyle> 
    </BrowserRouter>
  )
}
  
export default RoutesApp;
  