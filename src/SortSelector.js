import "./SortSelector.css";
import "./Dropdown.css";
import "./TopBarMenu.css";

function SortSelector(props) {
  // TODO: pass this down from app instead of just putting it here (maybe??)
  const SORT_TYPES = ["created", "priority", "text"];

  return (
    <div id="sort-div">
      <label htmlFor="sort-types" className="sorting_text">Sorting by:</label>
      <select
        name="sort-types"
        id="sort-types"
        onChange={(e) => props.onChangeSortType(e.currentTarget.value)}
      >
        {SORT_TYPES.map((sortType) => (
          <option value={sortType}>{sortType}</option>
        ))}
      </select>
    </div>
  );
}

export default SortSelector;