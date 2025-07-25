import { useEffect, useState } from "react"

import { getCoinList } from "../../services/cryptoApi"
import Tablecoin from "../modules/TableCoin"
import Pagination from "../modules/Pagination"
import Search from "../modules/Search"
import Chart from "../modules/Chart"

function HomePage() {
  const [coins, setCoins] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [currency, setCurrency] = useState("usd")
  const [chart, setChart] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    const fetchData = async () => {
      try {
        const res = await fetch(getCoinList(page, currency))
        const json = await res.json()
        setCoins(json)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [page, currency])
  return (
    <div>
      <Search
        currency={currency}
        setCurrency={setCurrency}
        setChart={setChart}
      />
      <Tablecoin
        coins={coins}
        isLoading={isLoading}
        currency={currency}
        setChart={setChart}
      />
      <Pagination page={page} setPage={setPage} />
      {!!chart && (
        <Chart chart={chart} setChart={setChart} currency={currency} />
      )}
    </div>
  )
}

export default HomePage
