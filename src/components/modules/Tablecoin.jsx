import TableRow from "./TableRow"

function Tablecoin({ coins }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Cion</th>
            <th>Name</th>
            <th>Price</th>
            <th>24h</th>
            <th>Total Volume</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <TableRow key={coin.id} coin={coin} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Tablecoin
