import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";

import {
    DashBoardStyle,
    Page
  } from './styles'
  
const RoutesApp = () => { 

  return(
    <BrowserRouter>
      <DashBoardStyle> 
          <Page>
            <Routes>
              <Route path="/" element={""} />
              <Route
                path="*"
                element={<Navigate to="/" replace />}
              />
            </Routes>
          </Page>
      </DashBoardStyle> 
    </BrowserRouter>
  )
}
  
export default RoutesApp;
  