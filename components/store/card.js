import Link from 'next/link'

export function StoreCard({ store, width= "is-half" }) {
  return (
    <div className={`column ${width}`}>
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            {store.name}
          </p>
        </header>
        <div className="card-content">
          <p className="content">
            Owner: {store.seller.first_name} {store.seller.last_name}
          </p>
          <div className="content">
            {store.description}
          </div>
        </div>
        <footer className="card-footer">
          <Link href={`stores/${store.id}`} className="card-footer-item">View Store</Link>
        </footer>
      </div>
    </div>
  )
}
