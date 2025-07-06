import { useEffect, useState } from "react"

import Tablecoin from "../modules/Tablecoin"
import { getCoinList } from "../../services/cryptoApi"

function HomePage() {
  const [coins, setCoins] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(getCoinList())
      const json = await res.json()
      setCoins(json)
      setIsLoading(false)
    }
    fetchData()
  }, [])
  return (
    <div>
      <Tablecoin coins={coins} isLoading={isLoading} />
    </div>
  )
}

export default HomePage
