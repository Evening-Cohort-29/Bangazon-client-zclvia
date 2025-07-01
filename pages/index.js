import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Products from './products'

export default function Index() {
  return (
    <Products />
  )
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  )
}
