import chartUp from "../../assets/chart-up.svg"
import chartDown from "../../assets/chart-down.svg"

import styles from "./TableRow.module.css"

import { marketChart } from "../../services/cryptoApi"
import { getCurrencySymbol } from "../helpers/currencySymbol"

function TableRow({ coin, currency, setChart }) {
  const {
    id,
    name,
    image,
    symbol,
    total_volume,
    current_price,
    price_change_percentage_24h: price_change,
  } = coin

  const showHandler = async () => {
    try {
      const res = await fetch(marketChart(id))
      const json = await res.json()
      setChart({ ...json, coin })
    } catch (error) {
      alert(error.message)
      setChart(null)
    }
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
        <span className={styles.currency}>{getCurrencySymbol(currency)}</span>
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
