import { Link } from "react-router-dom";
import Card from "../Card/Card";

export default function Cards({ allCountries }) {
  const countriesList = allCountries;

  return (
    <div>
      {countriesList?.map((country) => (
        <Card key={country.id} country={country} />
      ))}
    </div>
  );
}
