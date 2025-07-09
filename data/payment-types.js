import { fetchWithResponse, fetchWithoutResponse } from "./fetcher";

export function getPaymentTypes() {
  return fetchWithResponse(`paymenttypes`, {
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  });
}

export function addPaymentType(paymentType) {
  return fetchWithResponse(`paymenttypes`, {
    method: "POST",
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(paymentType),
  });
}

export function deletePaymentType(id) {
  return fetchWithoutResponse(`paymenttypes/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  });
}
