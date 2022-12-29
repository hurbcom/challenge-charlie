import PropTypes from "prop-types";

export function Today({ temperature, kind, wind, humidity, pressure }) {
  return (
    <div className="today">
      <div style={{ overflow: "hidden" }}>
        <span className="icon" data-icon="B" />
      </div>
      <div className="info">
        <div style={{ fontWeight: "bold" }}>HOJE</div>
        <div style={{ fontWeight: "bold" }}>{temperature}</div>
        <div style={{ height: "50px" }} />
        <div>{kind}</div>
        <div>Vento: {wind}</div>
        <div>Humidade: {humidity}</div>
        <div>Pressão: {pressure}</div>
      </div>
    </div>
  );
}

Today.propTypes = {
  temperature: PropTypes.string.isRequired,
  kind: PropTypes.string.isRequired,
  wind: PropTypes.string.isRequired,
  humidity: PropTypes.string.isRequired,
  pressure: PropTypes.string.isRequired,
};
