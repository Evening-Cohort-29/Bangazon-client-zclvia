import { useEffect } from 'react'
import CardLayout from '../components/card-layout'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { ProductCard } from '../components/product/card'
import { StoreCard } from '../components/store/card'
import { useAppContext } from '../context/state'
import { getUserProfile } from '../data/auth'

export default function Profile() {
  const { profile, setProfile } = useAppContext()

  useEffect(() => {
    getUserProfile().then((profileData) => {
      if (profileData) {
        setProfile(profileData)
      }
    })
  }, [])

  return (
    <>
      <CardLayout title="Favorite Stores" width="is-full">
        <div className="columns is-multiline">
          {
            profile.favorites?.map(favorite => (
              <StoreCard store={favorite} key={favorite.id} width="is-one-third" />
            ))
          }
        </div>
        <></>
      </CardLayout>
      <CardLayout title="Products you've recommended" width="is-full">
        <div className="columns is-multiline">
          {
            profile.recommended_by?.map(recommendation => (
              <ProductCard product={recommendation.product} key={recommendation.product.id} width="is-one-third" />
            ))
          }
        </div>
        <></>
      </CardLayout>
      <CardLayout title="Products recommended to you" width="is-full">
        <div className="columns is-multiline">
          {
            profile.recommendations?.map(recommendation => (
              <ProductCard product={recommendation.product} key={recommendation.product.id} width="is-one-third" />
            ))
          }
        </div>
        <></>
      </CardLayout>

      <CardLayout title="Products you've liked" width="is-full">
        <div className="columns is-multiline">
          {
            profile.likes?.map(product => (
              <ProductCard product={product} key={product.id} width="is-one-third" />
            ))
          }
        </div>
        <></>
      </CardLayout>
    </>
  )
}

Profile.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      <section className="container">{page}</section>
    </Layout>
  )
}
