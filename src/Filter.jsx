/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */

import { useSearchParams } from "react-router-dom";
const buttonStyle = {
  padding: "10px",
  margin: "5px",
  backgroundColor: "#3498db",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};
function Filter({ filter, options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(value) {
    searchParams.set(filter, value);
    setSearchParams(searchParams);
  }
  return (
    <div>
      {options.map((option) => {
        return (
          <button style={buttonStyle} onClick={() => handleClick(option.value)}>
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

export default Filter;
