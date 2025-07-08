import { useEffect, useState } from "react"
import { marketChart, searchCoin } from "../../services/cryptoApi"

import { RotatingLines } from "react-loader-spinner"

import styles from "./Search.module.css"

function Search({ currency, setCurrency, setChart }) {
  const [text, setText] = useState("")
  const [coins, setCoins] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const showHandler = async (coin) => {
    try {
      const res = await fetch(marketChart(coin.id))
      const json = await res.json()
      setChart({ ...json, coin })
    } catch (error) {
      alert(error.message)
      setChart(null)
    }
  }

  useEffect(() => {
    const controller = new AbortController()

    setCoins([])
    if (!text) return
    const search = async () => {
      try {
        const res = await fetch(searchCoin(text), { signal: controller.signal })
        const json = await res.json()
        console.log(json)
        if (json.coins) {
          setCoins(json.coins)
        } else alert(json.status.error_message)
      } catch (error) {
        if (error.name !== "AbortError") alert(error.message)
      }
      setIsLoading(false)
    }

    setIsLoading(true)
    search()

    return () => controller.abort()
  }, [text])

  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>
      {text && (
        <div className={styles.searchResult}>
          {isLoading && (
            <RotatingLines
              width="50px"
              height="50px"
              strokeWidth="2"
              strokeColor="#3874ff"
            />
          )}
          <ul>
            {coins.map((coin) => (
              <li key={coin.id} onClick={() => showHandler(coin)}>
                <img src={coin.thumb} alt={coin.name} />
                <p>{coin.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Search
