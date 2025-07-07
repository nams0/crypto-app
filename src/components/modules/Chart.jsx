import styles from "./Chart.module.css"

import { AiOutlineCloseSquare as Close } from "react-icons/ai"

function Chart({ chart, setChart }) {
  return (
    <div className={styles.container}>
      <Close className={styles.close} onClick={() => setChart(null)} />
      <div className={styles.chart}></div>
    </div>
  )
}

export default Chart
