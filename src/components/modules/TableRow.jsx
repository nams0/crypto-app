import chartUp from "../../assets/chart-up.svg"
import chartDown from "../../assets/chart-down.svg"

import styles from "./TableRow.module.css"

function TableRow({
  coin: {
    name,
    image,
    symbol,
    total_volume,
    current_price,
    price_change_percentage_24h: price_change,
  },
  currency,
  setChart,
}) {
  const showHandler = () => {
    setChart(true)
  }
  return (
    <tr>
      <td>
        <div className={styles.symbol} onClick={showHandler}>
          <img src={image} alt={symbol} />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>
        {currency === "usd" && <span className={styles.currency}>$</span>}
        {currency === "eur" && <span className={styles.currency}>€</span>}
        {currency === "jpy" && <span className={styles.currency}>¥</span>}
        {current_price.toLocaleString()}
      </td>
      <td className={price_change > 0 ? styles.success : styles.error}>
        {price_change.toFixed(2)}%
      </td>
      <td>{total_volume.toLocaleString()}</td>
      <td>
        <img src={price_change > 0 ? chartUp : chartDown} alt={name} />
      </td>
    </tr>
  )
}

export default TableRow
