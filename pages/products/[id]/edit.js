import { useRouter } from 'next/router'
import { useRef, useEffect, useState } from 'react'
import Layout from '../../../components/layout'
import Navbar from '../../../components/navbar'
import { editProduct, getProductById } from '../../../data/products'
import ProductForm from '../../../components/product/form'
import { useAppContext } from '../../../context/state'

export default function NewProduct() {
  const formEl = useRef()
  const router = useRouter()
  const [product, setProduct] = useState()
  const { profile } = useAppContext()
  const { id } = router.query

  useEffect(() => {
    if (id && profile) {
      getProductById(id).then(productData => {
        if (productData) {
          if (productData.store.id === profile.store?.id) {
            setProduct(productData)
          } else {
            router.back()
          }
        }
      })
    }
  }, [id, profile])

  useEffect(() => {
    if (product) {
      const { name, description, price, category, location, quantity } = formEl.current

      name.value = product.name
      description.value = product.description
      price.value = product.price
      category.value = product.category.id
      location.value = product.location
      quantity.value = product.quantity
    }
  }, [formEl, product])


  const saveProduct = () => {
    const { name, description, price, category, location, quantity } = formEl.current

    const product = {
      name: name.value,
      description: description.value,
      price: price.value,
      categoryId: category.value,
      location: location.value,
      quantity: quantity.value
    }

    editProduct(id, product).then(() => router.push(`/products/${id}`))
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
