import { useEffect, useState } from "react"

import Tablecoin from "../modules/Tablecoin"
import { getCoinList } from "../../services/cryptoApi"

function HomePage() {
  const [coins, setCoins] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(getCoinList())
      const json = await res.json()
      setCoins(json)
    }
    fetchData()
  }, [])
  return (
    <div>
      <Tablecoin coins={coins} />
    </div>
  )
}

export default HomePage
