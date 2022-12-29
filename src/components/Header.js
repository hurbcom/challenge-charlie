import PropTypes from "prop-types";

export function Header({ cityName }) {
  return (
    <div className="header">
      <span className="icon" data-icon="(" />
      <span
        style={{
          marginBottom: "15px",
        }}
      >
        {cityName}
      </span>
    </div>
  );
}

Header.propTypes = {
  cityName: PropTypes.string.isRequired,
};
