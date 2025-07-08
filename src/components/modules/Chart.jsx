import { useState } from "react"
import Graph from "./Graph"
import { getCurrencySymbol } from "../helpers/currencySymbol"

import styles from "./Chart.module.css"

import { AiOutlineCloseSquare as Close } from "react-icons/ai"

function Chart({ chart, setChart, currency }) {
  const [type, setType] = useState("prices")
  const typeHandler = (event) => {
    if (event.target.tagName === "BUTTON") {
      const type = event.target.innerText.toLowerCase().replace(" ", "_")
      setType(type)
    }
  }
  return (
    <div className={styles.container}>
      <Close className={styles.close} onClick={() => setChart(null)} />
      <div className={styles.chart}>
        <div className={styles.name}>
          <img src={chart.coin.image} />
          <p>{chart.coin.name}</p>
        </div>
        <div className={styles.graph}>
          <Graph chart={chart} type={type} />
        </div>
        <div className={styles.types} onClick={() => typeHandler(event)}>
          <button className={type === "prices" ? styles.selected : null}>
            Prices
          </button>
          <button className={type === "market_caps" ? styles.selected : null}>
            Market Caps
          </button>
          <button className={type === "total_volumes" ? styles.selected : null}>
            Total volumes
          </button>
        </div>
        <div className={styles.details}>
          <div>
            <p>Prices:</p>
            <span>
              {getCurrencySymbol(currency)}
              {chart.coin.current_price}
            </span>
          </div>
          <div>
            <p>ATH:</p>
            <span>
              {getCurrencySymbol(currency)}
              {chart.coin.ath}
            </span>
          </div>
          <div>
            <p>Market Cap:</p>
            <span>{chart.coin.market_cap}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chart
