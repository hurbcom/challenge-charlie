function WeatherFieldLocation({ location, handleChange }) {
  return (
    <div className="weatherField">
      <input
        type="text"
        name="weatherLocation"
        className="weatherFieldBox"
        placeholder="Digite uma localização"
        value={location}
        onChange={handleChange}
      />
    </div>
  )
}

export default WeatherFieldLocation;