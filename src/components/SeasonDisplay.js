import React from "react";

export default function SeasonDisplay() {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err)
  );
  return <div>SeasonDisplay</div>;
}
