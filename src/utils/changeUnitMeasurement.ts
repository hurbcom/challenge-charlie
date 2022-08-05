export const changeUnitMeasurement = (unit:any,setUnit:any,setUnitMeasurement:React.Dispatch<React.SetStateAction<IUnitMensure>>) => {
    if (unit === "metric") {
      setUnit("imperial");
      setUnitMeasurement({
        temperature: "F",
        speed: "Mph",
      });
    } else if (unit === "imperial") {
      setUnit("metric");
      setUnitMeasurement({
        temperature: "C",
        speed: "Km/h",
      });
    }   
  };