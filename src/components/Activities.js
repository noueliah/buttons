import React from "react";
import { useEffect, useState } from "react";

function Activities() {
  function loadActivity() {
    fetch("http://www.boredapi.com/api/activity")
      .then((response) => response.json()) // esto lo convierte a json
      .then((data) => setActivity(data.activity));
  }

  const [activity, setActivity] = useState([]);
  useEffect(() => {
    loadActivity();
  }, []);
  return (
    <div>
      <h1>{activity}</h1>
      <button onClick={loadActivity}>something else</button>
    </div>
  );
}

export default Activities;
