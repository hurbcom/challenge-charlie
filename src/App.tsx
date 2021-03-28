import { useEffect, useState } from "react"
import styled from "styled-components"
import ForecastCard from "./Components/ForecastCard"
import { apiFetch } from "./Utils"
import { BING_IMAGE } from "./Utils/urls"

function App() {
  const [backgroundImage, setBackgroundImage] = useState<string>('')

  useEffect(() => {
    apiFetch(BING_IMAGE)
      .get()
      .then(response => response.json())
      .then(url => {
        setBackgroundImage(`url(${url})`)
      })
  }, [])

  return (
    <StyledApp backgroundImage={backgroundImage}>
      <ForecastCard />
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div<{ backgroundImage: string }>`
    background-position: center;
    background-size: cover;
    background-color: rgba(34,34,34,.9);
    background-image: ${({ backgroundImage }) => backgroundImage}
`
