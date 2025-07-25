const BASE_URL = "https://api.coingecko.com/api/v3"
const API_KEY = import.meta.API_KEY

const getCoinList = (page, currency) =>
  `${BASE_URL}/coins/markets?vs_currency=${currency}&x-cg-demo-api-key${API_KEY}=&per_page=20&page=${page}`

const searchCoin = (query) =>
  `${BASE_URL}/search?query=${query}&x-cg-demo-api-key${API_KEY}`

const marketChart = (coinId) =>
  `${BASE_URL}/coins/${coinId}/market_chart?vs_currency=usd&days=7&x-cg-demo-api-key${API_KEY}`

export { getCoinList, searchCoin, marketChart }
