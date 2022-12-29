import React from "react";
import { useEffect, useState } from "react";

function Activities() {
  function loadActivity() {
    setIsLoading(true);
    fetch("http://www.boredapi.com/api/activity")
      .then((response) => response.json()) // esto lo convierte a json
      .then((data) => {
        setActivity(data.activity);
        setIsLoading(false);
      });
  }

  const [activity, setActivity] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    loadActivity();
  }, []);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h1>{activity}</h1>
      <button onClick={loadActivity}>something else</button>
    </div>
  );
}

export default Activities;
