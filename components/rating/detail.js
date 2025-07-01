import { useState, useEffect } from 'react'
import { rateProduct } from '../../data/products'
import { RatingsContainer } from './container'
import { Header } from './header'

export function Ratings({ average_rating, refresh, ratings = [], number_purchased, likes = [] }) {
  const [productId, setProductId] = useState(0)
  const saveRating = (newRating) => {
    rateProduct(productId, newRating).then(refresh)

  }

  useEffect(() => {
    if (ratings.length) {
      setProductId(ratings[0].product)
    }
  }, [ratings])

  return (
    <div className="tile is-ancestor is-flex-wrap-wrap">
      <Header 
        averageRating={average_rating}
        ratingsLen={ratings.length}
        numberPurchased={number_purchased}
        likesLength={likes.length}
      />
      <RatingsContainer ratings={ratings} saveRating={saveRating} />
    </div>
  )
}
