import { useSearchParams } from "react-router-dom";

function SortBy() {
  const [searchParams, setSearchParams] = useSearchParams();
  function handleChange(value) {
    searchParams.set("sortBy", value);
    setSearchParams(searchParams);
  }
  return (
    <div>
      <select onChange={(e) => handleChange(e.target.value)}>
        <option value="price-asc">Sort By Price (Low To High)</option>
        <option value="price-desc">Sort By Price (High To Low)</option>
        <option value="rating-asc">Sort By Rating (Low To High)</option>
        <option value="rating-desc">Sort By Rating (High To Low)</option>
      </select>
    </div>
  );
}

export default SortBy;
