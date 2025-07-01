export function Header({ averageRating, ratingsLen, numberPurchased, likesLength }) {
  return (
    <div className="tile is-parent is-12">
      <div className="tile is-child">
        <section className="level has-background-primary">
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Avg. Rating</p>
              <p className="title">{averageRating}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading"># of Reviews</p>
              <p className="title">{ratingsLen}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Purchased</p>
              <p className="title">{numberPurchased} times</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Likes</p>
              <p className="title">{likesLength}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
