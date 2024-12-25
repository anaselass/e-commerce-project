import PropTypes from "prop-types";

const ShopFiltering = ({ filters, filterBy, setFilterBy, clearFilter }) => {
  return (
    <div className="space-y-5 flex-shrink-0 w-full lg:w-[150px]">
      <h3>Filter</h3>

      {/* Ctegories Filter */}
      <div className="flex flex-col space-y-2">
        <h4 className="text-lg font-medium">Category</h4>
        <hr />
        {filters.Categories.map((category) => (
          <label
            key={category}
            className="capitalize cursor-pointer flex items-center space-x-2"
          >
            <input
              type="radio"
              name="category"
              id="category"
              value={category}
              checked={filterBy.Categories === category}
              onChange={(e) =>
                setFilterBy({ ...filterBy, Categories: e.target.value })
              }
            />
            <span>{category}</span>
          </label>
        ))}
      </div>

      {/* Color Filter */}
      <div className="flex flex-col space-y-2">
        <h4 className="text-lg font-medium">Colors</h4>
        <hr />
        {filters.Colors.map((Color) => (
          <label
            key={Color}
            className="capitalize cursor-pointer flex items-center space-x-2"
          >
            <input
              type="radio"
              name="Color"
              id="Color"
              value={Color}
              checked={filterBy.Colors === Color}
              onChange={(e) =>
                setFilterBy({ ...filterBy, Colors: e.target.value })
              }
            />
            <span>{Color}</span>
          </label>
        ))}
      </div>

      {/* Price Range */}
      <div className="flex flex-col space-y-2">
        <h4 className="text-lg font-medium">Colors</h4>
        <hr />
        {filters.PriceRange.map((Range) => (
          <label
            key={Range.lable}
            className="capitalize cursor-pointer flex items-center space-x-2"
          >
            <input
              type="radio"
              name="Range"
              id="Range"
              value={`${Range.min} to ${Range.max}`}
              checked={filterBy.PriceRange === `${Range.min} to ${Range.max}`}
              onChange={(e) =>
                setFilterBy({ ...filterBy, PriceRange: e.target.value })
              }
            />
            <span>{Range.lable}</span>
          </label>
        ))}
      </div>

      {/* Clear Filter */}
      <button
        className="bg-primary py-1 px-4 text-white rounded"
        onClick={clearFilter}
      >
        Clear all filters
      </button>
    </div>
  );
};

ShopFiltering.propTypes = {
  filters: PropTypes.shape({
    Categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    Colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    PriceRange: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  filterBy: PropTypes.shape({
    Categories: PropTypes.string.isRequired,
    Colors: PropTypes.string.isRequired,
    PriceRange: PropTypes.string.isRequired,
  }).isRequired,
  setFilterBy: PropTypes.func.isRequired,
};

export default ShopFiltering;
