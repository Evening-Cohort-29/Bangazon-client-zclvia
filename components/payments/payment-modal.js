import { useRef } from "react";
import { Input } from "../form-elements";
import Modal from "../modal";

export default function AddPaymentModal({
  showModal,
  setShowModal,
  addNewPayment,
}) {
  const merchantNameInput = useRef();
  const acctNumInput = useRef();
  const expirationDateInput = useRef();

  // Get tomorrow's date as minimum expiration date
  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  };
  // Validate expiration date and submit
  const handleAddPayment = () => {
    const expirationDate = expirationDateInput.current.value;
    const accountNumber = acctNumInput.current.value;
    const merchantName = merchantNameInput.current.value;

    addNewPayment({
      account_number: accountNumber,
      merchant_name: merchantName,
      expiration_date: expirationDate,
      create_date: new Date().toISOString().split("T")[0],
    });
  };

  return (
    <Modal
      showModal={showModal}
      setShowModal={setShowModal}
      title="Add New Payment Method"
    >
      <>
        <Input
          id="merchantName"
          type="text"
          label="Merchant Name"
          refEl={merchantNameInput}
        />
        <Input
          id="accNum"
          type="text"
          label="Account Number"
          refEl={acctNumInput}
        />
        <Input
          id="expirationDate"
          type="date"
          label="Expiration Date"
          refEl={expirationDateInput}
          min={getTomorrowDate()}
        />
      </>
      <>
        <button className="button is-success" onClick={handleAddPayment}>
          Add Payment Method
        </button>
        <button className="button" onClick={() => setShowModal(false)}>
          Cancel
        </button>
      </>
    </Modal>
  );
}
