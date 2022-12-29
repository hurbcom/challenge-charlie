import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { withHocs, withState } from "react-new-hoc";

export const Header = (() => {
  function Header({ isEditing, setIsEditing, cityName, setCityName }) {
    const [inputRef, setInputRef] = useState();

    useEffect(() => {
      if (!inputRef) {
        return;
      }

      inputRef.select();
      inputRef.focus();

      return () => {
        setCityName(inputRef.value);
      };
    }, [inputRef, setCityName]);

    return (
      <div
        className="header"
        onClick={(e) => {
          if (!isEditing) {
            e.preventDefault();
            e.stopPropagation();
            setIsEditing((isEditing) => !isEditing);
          }
        }}
      >
        <span
          className={["icon", isEditing && "rotating"]
            .filter(Boolean)
            .join(" ")}
          style={{ display: "flex" }}
          data-icon="("
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsEditing((isEditing) => !isEditing);
          }}
        />
        <form
          style={{
            width: "100%",
          }}
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsEditing(false);
          }}
        >
          {isEditing ? (
            <input ref={(ref) => setInputRef(ref)} defaultValue={cityName} />
          ) : (
            cityName
          )}
        </form>
      </div>
    );
  }

  Header.propTypes = {
    isEditing: PropTypes.bool.isRequired,
    setIsEditing: PropTypes.func.isRequired,
    cityName: PropTypes.string.isRequired,
    setCityName: PropTypes.func.isRequired,
  };

  return withHocs(
    withState("isEditing", { init: false }),
    withState("cityName")
  )(Header);
})();
