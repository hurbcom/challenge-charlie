import { useState, createContext, useContext, useEffect } from 'react';
import getImage from '../service/backgroundBing'

  const AuthContext = createContext({});

  export const AuthProvider = ({ children }) => {
    const [lat, setLat] = useState(null)
    const [lon, setLon] = useState(null)   
    const [backgroundUrl, setBackgroundUrl] = useState(null)
    
    useEffect(() => {
      getImage(setBackgroundUrl)
    }, [])

    useEffect(() => {
      navigator.geolocation.getCurrentPosition(function(position) {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
      })
    }, [])

  return (
    <AuthContext.Provider value={{lat, setLat, lon, setLon, backgroundUrl}}>
      {children}
    </AuthContext.Provider>
  )};
  
  export function useAuth(){
    const context = useContext(AuthContext);
    return context;
  }
  
  export default AuthContext