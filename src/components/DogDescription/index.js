import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export default function DogDescription() {
  const { name } = useParams();
  console.log("name", name);
  const [dog, setDog] = useState({});
  useEffect(() => {
    const fetchDog = async () => {
      const response = await fetch(
        `https://api.thedogapi.com/v1/breeds/search?q=${name}`
      );
      const data = await response.json();
      console.log(data[0]);
      setDog(data[0]);
    };
    fetchDog();
  }, [name]);
  return (
    <div className="single-prod">
      <h3> {dog?.name} </h3>
      <img
        alt="doggie"
        src={`https://cdn2.thedogapi.com/images/${dog?.reference_image_id}.jpg`}
        width={350}
      />
      <h3> {dog?.bred_for} </h3>
      <h3> {dog?.breed_group} </h3>
      <h3> {dog?.life_span} </h3>
      <h3> {dog?.temperament} </h3>
      <p> {dog?.temperament} </p>
    </div>
  );
}
