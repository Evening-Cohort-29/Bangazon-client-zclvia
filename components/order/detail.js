import Table from "../table"

export default function CartDetail({ cart, removeProduct }) {
  const headers = ['Product', 'Price', '']
  const footers = ['Total', cart.total, '']

  return (
    <Table headers={headers} footers={footers}>
      {
        cart.products?.map(product => {
          return (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <span className="icon is-clickable" onClick={() => removeProduct(product.id)}>
                  <i className="fas fa-trash"></i>
                </span>
              </td>
            </tr>
          )
        })
      }
    </Table>
  )
}
