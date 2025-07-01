export default function Table({ headers, footers = [], children }) {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            {
              headers.map((header, i) => <th key={`header--${i}`}>{header}</th>)
            }
          </tr>
        </thead>
        <tfoot>
          <tr>
            {
              footers.map((footer, i) => <th key={`footer--${i}`}>{footer}</th>)
            }
          </tr>
        </tfoot>
        <tbody>
          {children}
        </tbody>
      </table>
    </>
  )
}
