import React from "react";
import Travel from "./Travel";
// src/Quotes.js
const travels = [
  {
    destination: "SEOUL!",
    country: "Corée du Sud",
    distance: "9 378 km",
    photo: "http://image.noelshack.com/fichiers/2018/39/4/1538037084-seoul.jpeg",
  },
  {
    destination: "MONT-FUJI",
    country: "Japon",
    distance: "9 844 km",
    photo: "http://image.noelshack.com/fichiers/2018/39/4/1538037079-fuji.jpeg",
  },
  {
    destination: "AURORES BOREALS",
    country: "Norvege",
    distance: "2 162 km",
    photo: "http://image.noelshack.com/fichiers/2018/39/4/1538036993-norvege.jpeg",
  },
  {
    destination: "ILE MAUI",
    country: "Ile Maui",
    distance: "9 254 km",
    photo: "http://image.noelshack.com/fichiers/2018/39/4/1538036970-maoi.jpeg",
  },
  {
    destination: "FIDJI",
    country: "Iles Fidji",
    distance: "16 820 km",
    photo: "http://image.noelshack.com/fichiers/2018/39/4/1538036962-fidji.jpeg",
  }
];

const Travels = () => (
  <div>
    {travels.map(travel => (
  <Travel destination={travel.destination} photo={travel.photo} country={travel.country} distance= {travel.distance}/>
    ))}
  </div>
);

export default Travels;