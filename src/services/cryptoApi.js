const BASE_URL = "https://api.coingecko.com/api/v3"
const API_KEY = "CG-mcH5R3ped7MEjZ6nTBJKo29D"

const getCoinList = (page) => {
  return `${BASE_URL}/coins/markets?vs_currency=usd&x-cg-demo-api-key${API_KEY}=&per_page=20&page=${page}`
}

export { getCoinList }
