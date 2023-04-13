import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Doggie() {
  const [dog, setDog] = useState([]);
  const fetchDogs = async () => {
    const response = await fetch("https://api.thedogapi.com/v1/breeds");
    const data = await response.json();
    console.log(data.slice(0, 80));
    setDog(data.slice(0, 80));
  };
  useEffect(() => {
    fetchDogs();
  }, [dog]);
  return (
    <div className="dog-container">
      {dog.map((item) => {
        const {
          id,
          image: { url },
          name
        } = item;
        return (
          <div key={id} className="dog-list">
            <Link to={`/projects/doggie/${name}`}>
              <img alt="title" src={url} width={199} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
