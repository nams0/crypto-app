const convertData = (chart, type) => {
  const convertedData = chart[type].map((item) => {
    const rawDate = String(new Date(item[0])).slice(4, 24).split(" ")
    const formatedDate = `${rawDate[0]} ${rawDate[1]} ${rawDate[3]}`
    return { date: formatedDate, [type]: item[1] }
  })
  return convertedData
}

export { convertData }
