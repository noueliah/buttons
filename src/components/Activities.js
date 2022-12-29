import React from "react";
import { useEffect, useState } from "react";

function Activities() {
  function loadActivity() {
    setIsLoading(true);
    fetch("http://www.boredapi.com/api/activity")
      .then((response) => response.json()) // esto lo convierte a json
      .then((data) => {
        setActivities([...activities, data.activity]);
        setIsLoading(false);
      });
  }

  const [activities, setActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    loadActivity();
  }, []);
  if (activities.length === 0) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <ul>
        {activities.map((activity) => {
          return <li key={activity.key}>{activity}</li>;
        })}
      </ul>
      <button disabled={isLoading} onClick={loadActivity}>
        something else
      </button>
    </div>
  );
}

export default Activities;
