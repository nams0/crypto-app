const getCurrencySymbol = (currency) => {
  const currencySymbol = { usd: "$", eur: "€", jpy: "¥" }
  return currencySymbol[currency]
}

export { getCurrencySymbol }
