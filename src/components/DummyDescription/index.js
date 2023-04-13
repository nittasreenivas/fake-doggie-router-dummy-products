import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export default function DummyDescription() {
  const [prod, setProd] = useState({});
  const { id } = useParams();
  console.log("id:::", id);
  useEffect(() => {
    const fetchSingleProd = async () => {
      let response = await fetch(
        `https://dummyjson.com/products/${id}?limit=100`
      );
      let data = await response.json();
      console.log("data:", data);
      setProd(data);
    };
    fetchSingleProd();
  }, [id]);
  return (
    <div className="single-prod">
      <h3> {prod?.title} </h3>
      <img alt="" src={prod?.thumbnail} width={250} />
      <p> {prod?.description} </p>
      <h4> {prod?.brand} </h4>
      <h4>${prod?.price} </h4>
    </div>
  );
}
