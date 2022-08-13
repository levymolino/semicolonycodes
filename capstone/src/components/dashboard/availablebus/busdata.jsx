import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import axios from "axios";
import PersonItem from './filteredResult';
import FilterBar from "./FilterBar";

const isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

function BusData() {
  const [data, setAPIData] = useState([]);
  const [allData, setData] = useState(data);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:1300/bus/",
    })
      .then((res) => {
        setAPIData(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const handleFilterLocation = (location) => {
    const filteredData = data.filter((item) => {
      if (item.location.toLowerCase().includes(location.toLowerCase())) {
        return item;
      }
    });

    setData(filteredData);
  };

  const handleFilterDestination = (destination) => {
    const filteredData = data.filter((item) => {
      if (item.destination.toLowerCase().includes(destination.toLowerCase())) {
        return item;
      }
    });

    setData(filteredData);
  };

  const handleFilterDate = (date, field) => {
    const filteredData = data.filter((item) => {
      if (field === "from" && dayjs(item.date).isSameOrAfter(dayjs(date))) {
        return item;
      }
    });

    setData(filteredData);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <FilterBar
            onLocationFilter={handleFilterLocation}
            onDestinationFilter={handleFilterDestination}
            onDateFilter={handleFilterDate}
          />
        </div>
        <div className="col-sm-9">
          <div className="row mt-5">
            {allData.map((item) => (
              <PersonItem item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusData;
