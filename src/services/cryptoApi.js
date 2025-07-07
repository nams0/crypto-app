const BASE_URL = "https://api.coingecko.com/api/v3"
const API_KEY = "CG-mcH5R3ped7MEjZ6nTBJKo29D"

const getCoinList = (page, currency) =>
  `${BASE_URL}/coins/markets?vs_currency=${currency}&x-cg-demo-api-key${API_KEY}=&per_page=20&page=${page}`

const searchCoin = (query) =>
  `${BASE_URL}/search?query=${query}&x-cg-demo-api-key${API_KEY}`

export { getCoinList, searchCoin }
