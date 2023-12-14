/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useSearchParams } from "react-router-dom";

function SortBy({ filter, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  function handleChange(value) {
    searchParams.set(filter, value);
    setSearchParams(searchParams);
  }
  return (
    <div>
      <select onChange={(e) => handleChange(e.target.value)}>
        {options.map((option) => {
          return <option value={option.value}>{option.label}</option>;
        })}
      </select>
    </div>
  );
}

export default SortBy;
