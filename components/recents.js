import { useEffect, useState } from "react";
import { ProductCard } from "./product/card";
import { getProducts } from "../data/products";

export default function RecentProductsBar({ category }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(`category=${category.id}&quantity=5`)
      .then(setProducts);
  }, [category]);

  return (
    <div style={{ position: "relative", marginTop: "3.5rem"}}>
      {/* Tab in top left */}
      <div
        style={{
          position: "absolute",
          top: "-1.2rem",
          left: "1rem",
          background: "#fff",
          padding: "0.3rem 1rem",
          borderRadius: "1rem",
          borderLeft: "2px solid #ffd600",
          borderTop: "2px solid #ffd600",
          borderRight: "2px solid #ffd600",
          borderBottom: "none",
          fontWeight: "bold",
          zIndex: 1,
        }}
      >
        NEW in {category.name}
      </div>
      {/* Outlined container */}
      <div
        className="columns"
        style={{
          border: "2px solid #ffd600",
          borderRadius: "0.5rem",
          padding: "1rem",
          margin: "2px",
        }}
      >
        {products.map((product) => (
          <ProductCard 
            product={product} 
            key={product.id}
            width="is-one-fifth"
          />
        ))}
      </div>
    </div>
  )

}
