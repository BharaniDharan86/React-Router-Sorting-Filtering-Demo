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

// const [searchFilter, setSearchFilter] = useState([]);

// useEffect(() => {
//   const params = searchParams.getAll(filter);
//   setSearchFilter(params);
// }, [filter, searchParams]);

// function handleClick(value) {
//   let updatedFilter = [...searchFilter];

//   if (!updatedFilter.includes(value)) {
//     updatedFilter.push(value);
//   } else if (updatedFilter.includes(value)) {
//     updatedFilter = updatedFilter.filter((item) => item !== value);
//   }
//   searchParams.set(filter, updatedFilter);
//   setSearchParams(searchParams);
//   setSearchFilter(updatedFilter);
// }
