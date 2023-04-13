import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function FakeProducts() {
  const [prod, setProd] = useState([]);
  const fetchProducts = async () => {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await response.json();
    console.log(data.slice(0, 80));
    setProd(data.slice(0, 80));
  };
  useEffect(() => {
    fetchProducts();
  }, [prod]);
  return (
    <div className="dog-container">
      {prod.map((item) => {
        const { id, images } = item;
        return (
          <div key={id} className="dog-list">
            <Link to={`/projects/fake/${id}`}>
              <img alt="fake" src={images[0]} width={199} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
