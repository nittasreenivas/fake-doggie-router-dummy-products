import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export default function FakeDescription() {
  const [prod, setProd] = useState({});
  const { id } = useParams();
  console.log("id", id);

  useEffect(() => {
    const fetchProd = async () => {
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/products/${id}`
      );
      const data = await response.json();
      console.log(data);
      setProd(data);
    };
    fetchProd();
  }, [id]);
  return (
    <div className="single-prod">
      <h3>{prod?.title} </h3>
      <img alt="fake" src={prod?.images} width={350} />
      <p>{prod?.description} </p>
      <h4> ${prod?.price} </h4>
    </div>
  );
}
