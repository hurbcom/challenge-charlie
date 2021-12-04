function WeatherFieldLocation({ location, handleSubmit, handleChange }) {
  return (
    <div className="weatherField">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="weatherLocation"
          className="weatherFieldBox"
          placeholder="Digite uma localização"
          value={location}
          onChange={handleChange}
        />

        <button type="submit" className="weatherFieldButton">Buscar</button>
      </form>
    </div>
  )
}

export default WeatherFieldLocation;