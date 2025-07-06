import TableRow from "./TableRow"

import { RotatingLines } from "react-loader-spinner"

import styles from "./Tablecoin.module.css"

function Tablecoin({ coins, isLoading }) {
  console.log(coins)
  return (
    <div className={styles.container}>
      {isLoading ? (
        <RotatingLines strokeColor="#3774ff" strokeWidth="2" />
      ) : (
        <table className={styles.table}>
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
      )}
    </div>
  )
}

export default Tablecoin
