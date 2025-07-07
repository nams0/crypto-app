import { useEffect, useState } from "react"

import Tablecoin from "../modules/Tablecoin"
import Pagination from "../modules/Pagination"
import { getCoinList } from "../../services/cryptoApi"
import Search from "../modules/Search"

function HomePage() {
  const [coins, setCoins] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [currency, setCurrency] = useState("usd")

  useEffect(() => {
    setIsLoading(true)
    const fetchData = async () => {
      const res = await fetch(getCoinList(page, currency))
      const json = await res.json()
      setCoins(json)
      setIsLoading(false)
    }
    fetchData()
  }, [page, currency])
  return (
    <div>
      <Search currency={currency} setCurrency={setCurrency} />
      <Tablecoin coins={coins} isLoading={isLoading} currency={currency} />
      <Pagination page={page} setPage={setPage} />
    </div>
  )
}

export default HomePage
