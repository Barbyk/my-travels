import React from "react";

const travel = ({ destination, country, photo, distance }) => (
  <figure>
    <img src={photo} alt={photo} />
    <figcaption>
      <blockquote>{destination}</blockquote>
      <cite>{country}</cite> <br/>
      <cite>{distance}</cite>
    </figcaption>
  </figure>
);

export default travel;
