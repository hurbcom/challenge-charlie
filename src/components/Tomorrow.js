import PropTypes from "prop-types";

export function Tomorrow({
  backgroundColor,
  className = "tomorrow",
  title = "AMANHÃ",
  temperature,
}) {
  return (
    <div
      className={className}
      style={{
        backgroundColor: `${backgroundColor}dd`,
      }}
    >
      <div>{title}</div>
      <div>{temperature}</div>
    </div>
  );
}

Tomorrow.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  className: PropTypes.oneOf(["tomorrow", "after-tomorrow"]),
  title: PropTypes.string,
  temperature: PropTypes.node.isRequired,
};
