import { useEffect, useState } from "react";

export function useGetCurrentPosition() {
  const [pos, setPos] = useState({
    latitude: 0,
    longitude: 0
  })

  const [error, setError] = useState(false)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setPos({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude
      })
    },
    (erro) => {
      setError(true)
      console.log(erro)
    })
  }, [])

  return {
    pos,
    error
  }
}
