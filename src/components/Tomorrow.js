import PropTypes from "prop-types";

export function Tomorrow({
  className = "tomorrow",
  title = "AMANHÃ",
  temperature,
}) {
  return (
    <div className={className}>
      <div>{title}</div>
      <div>{temperature}</div>
    </div>
  );
}

Tomorrow.propTypes = {
  className: PropTypes.oneOf(["tomorrow", "after-tomorrow"]),
  title: PropTypes.string,
  temperature: PropTypes.string.isRequired,
};
