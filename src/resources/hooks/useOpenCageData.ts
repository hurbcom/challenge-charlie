import axios from "axios"
import { useEffect, useState } from "react"
const KEY = '17853a063bbb4f0b91e053cd42555e33'

type Address = {
  city: ''
}

export function useOpenCageData(lat: string, long: string) {
  const [address, setAddress] = useState<Address>({
    city: ''
  })

  useEffect(() => {
    axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${lat},${long}&key=${KEY}&language=pt&pretty=1`)
      .then((response) => {
        if (response.data.results[0].geometry.lat !== 0 && response.data.results[0].geometry.lng !== 0) {
          console.log(response.data.results[0])
          setAddress({
            city: response.data.results[0].components.city ?? ''
          })
        }
      })
      .catch(e => {
        console.log(e)
      })
  }, [lat, long])

  return { address }
}
