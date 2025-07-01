import { useState } from "react"
import Modal from "../modal"

export default function CompleteFormModal({ showModal, setShowModal, paymentTypes, completeOrder }) {
  const [selectedPayment, setSelectedPayment] = useState(0)
  return (
    <Modal showModal={showModal} setShowModal={setShowModal} title="Complete Order">
      <div className="select">
        <select value={selectedPayment} onChange={(event) => setSelectedPayment(event.target.value)}>
          <option>Select a payment type to complete your order</option>
          {
            paymentTypes.map(pt => <option key={pt.id} value={pt.id}>{pt.merchant_name} {pt.obscured_num}</option>)
          }
        </select>
      </div>
      <>
        <button className="button is-success" onClick={() => completeOrder(selectedPayment)}>Complete Order</button>
        <button className="button" onClick={() => setShowModal(false)}>Cancel</button>
      </>
    </Modal>

  )
}
