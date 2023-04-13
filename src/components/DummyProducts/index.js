import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function DummyProducts() {
  const [prod, setProds] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products?limit=100");
    const { products } = await response.json();
    console.log(products);
    console.log(products);
    setProds(products);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <div className="dog-container">
        {prod.map((item) => {
          const { id, thumbnail } = item;
          return (
            <div key={id} className="dog-list">
              <Link to={`/projects/dummy/${id}`}>
                <img alt="title" src={thumbnail} width={199} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
