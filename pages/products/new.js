import { useRouter } from 'next/router'
import { useRef } from 'react'
import Layout from '../../components/layout'
import Navbar from '../../components/navbar'
import { addProduct } from '../../data/products'
import ProductForm from '../../components/product/form'
export default function NewProduct() {
  const formEl = useRef()
  const router = useRouter()

  const saveProduct = () => {
    const { name, description, price, category, location, quantity  } = formEl.current
    const product = {
      name: name.value,
      description: description.value,
      price: price.value,
      categoryId: category.value,
      location: location.value,
      quantity: quantity.value
    }
    addProduct(product).then((res) => router.push(`/products/${res.id}`))
  }

  return (
    <ProductForm
      formEl={formEl}
      saveEvent={saveProduct}
      title="Add a new product"
      router={router}
    ></ProductForm>
  )
}

NewProduct.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  )
}
