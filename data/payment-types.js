import { fetchWithResponse, fetchWithoutResponse } from "./fetcher";

export function getPaymentTypes() {
  return fetchWithResponse('payment-types', {
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`
    }
  })
}

export function addPaymentType(paymentType) {
  return fetchWithResponse(`payment-types`, {
    method: 'POST',
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(paymentType)
  })
}

export function deletePaymentType(id) {
  return fetchWithoutResponse(`payment-types/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`
    }
  })
}
