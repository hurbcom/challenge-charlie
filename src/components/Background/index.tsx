import { ReactNode, useEffect, useState } from 'react';
import { BackgroundContainer } from './styles';


interface BackgroundProps {
  children: ReactNode
}
export function Background({ children }: BackgroundProps) {
  const [background, setBackground] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    async function fetchBackgroundFromBing() {
      const corsUrl = "https://api.allorigins.win/get?url=";
      const bingUrl = "https://www.bing.com";
      const url = corsUrl + encodeURIComponent(bingUrl + "/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR");
      try {
        const result = await fetch(url)
        const data = await result.json()
        const parsedJson = JSON.parse(data.contents)
        const imgUrl = bingUrl + parsedJson.images[0].url;
        if (imgUrl as string) {
          setBackground(imgUrl)
          console.log(imgUrl)
        }
      } catch (e) {
        console.error("Failed to find background")
      } finally {
        setIsLoading(false)
      }
    }
    fetchBackgroundFromBing()
  }, [])


  return (
    <BackgroundContainer backgroundImage={background}>
      {children}
    </BackgroundContainer>
  )
}