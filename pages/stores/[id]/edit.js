import { useRouter } from 'next/router'
import { useRef, useEffect, useState } from 'react'
import Layout from '../../../components/layout'
import Navbar from '../../../components/navbar'
import { editStore, getStoreById } from '../../../data/stores'
import StoreForm from '../../../components/store/form'

export default function EditStore() {
  const [store, setStore] = useState({})
  const nameEl = useRef()
  const descriptionEl = useRef()
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    if (id) {
      getStoreById(id).then(storeData => {
        if (storeData) {
          setStore(storeData)
        }
      })
    }
  }, [id])

  useEffect(() => {
    nameEl.current.value = store.name
    descriptionEl.current.value = store.description
  }, [nameEl, descriptionEl, store])

  const saveStore = () => {
    editStore({
      id: store.id,
      name: nameEl.current.value,
      description: descriptionEl.current.value
    }).then(() => {
      router.push(`/stores/${store.id}`)
    })
  }

  return (
    <StoreForm nameEl={nameEl} descriptionEl={descriptionEl} saveEvent={saveStore} router={router} title="Update your store">
      <p>Update your store's name and description</p>
    </StoreForm>
  )
}

EditStore.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  )
}
