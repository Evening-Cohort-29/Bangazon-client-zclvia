import Link from "next/link";
import { ProductCard } from "../product/card";

export function StoreCard({ store, width = "is-half" }) {
  return (
    <div className={`column ${width}`}>
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">{store.name}</p>
        </header>
        <div className="card-content">
          <div className="content">
            <p>
              <strong>Owner:</strong> {store.seller?.first_name}{" "}
              {store.seller?.last_name}
            </p>
            <p>
              <strong>Products for sale:</strong> {store.product_count}
            </p>
            <p>{store.description}</p>
          </div>

          {/* Products Section */}
          {store.products && store.products.length > 0 && (
            <div className="content">
              <h4 className="title is-6">Products</h4>
              <div className="columns is-multiline">
                {store.products.map((product) => (
                  <ProductCard
                    product={product}
                    key={product.id}
                    width="is-one-third"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
        <footer className="card-footer">
          <Link href={`stores/${store.id}`} className="card-footer-item">
            View Store
          </Link>
        </footer>
      </div>
    </div>
  );
}
