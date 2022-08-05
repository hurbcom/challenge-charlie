
export const getLocalByCoordinate = async (getCurrentyCityByCoordinate:any,setIsLoading:React.Dispatch<React.SetStateAction<boolean>>, local:IGeoLocation, setResponse:React.Dispatch<React.SetStateAction<string>>) => {
    const getDescriptionLocation = async (lat: number, lng: number) => {
        return await getCurrentyCityByCoordinate.Get(lat as number, lng as number);
    };    
    await setIsLoading(true)
    if (local.loaded) {
      Promise.all([
        getDescriptionLocation(
          local.coordinates?.lat as number,
          local.coordinates?.lng as number
        ),
      ]).then((i) => {
        setResponse(i[0] as string)
        setIsLoading(false)
      })
      .catch((i) => {
        setResponse('Brasil')
        setIsLoading(false)});
    }
  }