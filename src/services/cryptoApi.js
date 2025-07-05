const BASE_URL = "https://api.coingecko.com/api/v3"
const API_KEY = "CG-pk4n22HVZrhptQTJx5GvCi6t"

const getCoinList = () => {
  return `${BASE_URL}/coins/markets?vs_currency=usd&x-cg-demo-api-key${API_KEY}=&per_page=20&page=1`
}

export { getCoinList }
