import { useState } from "react";

const FilterBar = ({ onLocationFilter, onDestinationFilter, onDateFilter }) => {
  const [filters, setFilters] = useState({
    destination: "",
    location: "",
    from: "",
  });

  const handleInput = (field) => (event) => {
    const { value } = event.target;

    setFilters({
      ...filters,
      [field]: value,
    });

    switch (field) {
      case "destination":
        onDestinationFilter(value);
        break;
      case "location":
        onLocationFilter(value);
        break;
      case "from":
        onDateFilter(value, "from");
        break;
      case "to":
        break;
      default:
        break;
    }
  };

  return (
    <div className="card-transparent">
      <h5 className="text-primary">Search Here</h5>
      <div className="row my-5">
        <div className="col-sm-3 my-2">
          <label htmlFor="location" className="text-primary">location</label>
          <input
            type="text"
            className="form-control input-lg text-primary"
            id="location"
            onChange={handleInput("location")}
          />
        </div>
        <div className="col-sm-3 my-2">
          <label htmlFor="destination" className="text-primary">destination</label>
          <input
            type="text"
            className="form-control input-lg text-primary" 
            id="destination"
            onChange={handleInput("destination")}
          />
        </div>
        <div className="col-sm-3 my-2">
          <label htmlFor="startDate" className="text-primary">Date</label>
          <input
            type="date"
            className="form-control input-lg text-primary"
            id="startDate"
            onChange={handleInput("from")}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
