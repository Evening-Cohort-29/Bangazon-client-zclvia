import { useEffect, useState } from 'react'
import Layout from '../../components/layout'
import Navbar from '../../components/navbar'
import { StoreCard } from '../../components/store/card'
import { getStores } from '../../data/stores'


export default function Stores() {
  const [stores, setStores] = useState([])

  useEffect(() => {
    getStores().then(data => {
      if (data) {
        setStores(data)
      }
    })
  }, [])

  return (
    <>
      <h1 className="title">Stores</h1>
      <div className="columns is-multiline">
      {
        stores.map(store => (
          <StoreCard store={store} key={store.id} />
        ))
      }
      </div>
    </>
  )
}

Stores.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  )
}
