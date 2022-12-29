import PropTypes from "prop-types";

export function Today({
  backgroundColor,
  temperature,
  kind,
  wind,
  humidity,
  pressure,
  icon,
}) {
  return (
    <div
      className="today"
      style={{
        backgroundColor: `${backgroundColor}dd`,
      }}
    >
      <div style={{ overflow: "hidden" }}>
        <span className="icon" data-icon={icon} />
      </div>
      <div className="info">
        <div style={{ fontWeight: "bold" }}>HOJE</div>
        <div style={{ fontWeight: "bold" }}>{temperature}</div>
        <div style={{ height: "50px" }} />
        <div>{kind}</div>
        <div>
          Vento:
          {wind}
        </div>
        <div>
          Humidade:
          {humidity}
        </div>
        <div>
          Pressão:
          {pressure}
        </div>
      </div>
    </div>
  );
}

Today.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  temperature: PropTypes.node.isRequired,
  kind: PropTypes.string.isRequired,
  wind: PropTypes.string.isRequired,
  humidity: PropTypes.string.isRequired,
  pressure: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
