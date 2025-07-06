import { useEffect, useState } from "react"

import Tablecoin from "../modules/Tablecoin"
import Pagination from "../modules/Pagination"
import { getCoinList } from "../../services/cryptoApi"

function HomePage() {
  const [coins, setCoins] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(() => {
    setIsLoading(true)
    const fetchData = async () => {
      const res = await fetch(getCoinList(page))
      const json = await res.json()
      console.log(json)
      setCoins(json)
      setIsLoading(false)
    }
    fetchData()
  }, [page])
  return (
    <div>
      <Tablecoin coins={coins} isLoading={isLoading} />
      <Pagination page={page} setPage={setPage} />
    </div>
  )
}

export default HomePage
