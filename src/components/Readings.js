import React from "react";

const Readings = ({ readings }) => {
  console.log(readings);
  return (
    <>
      <h2>All usage listings are in units of kw.</h2>
      {Object.entries(readings.attributes.readings.kw).map(([date, value]) => (
        <p key={date}>{`${date} usage amount -> ${parseFloat(value).toFixed(2)}`}</p>
      ))}
    </>
  );
};

export default Readings;
