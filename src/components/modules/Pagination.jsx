import styles from "./Pagination.module.css"

import { AiFillForward as Forward } from "react-icons/ai"
import { AiFillBackward as Backward } from "react-icons/ai"

function Pagination({ page, setPage }) {
  const previousHandler = () => {
    if (page <= 1) return
    setPage((page) => page - 1)
  }

  const nextHandler = () => {
    if (page >= 10) return
    setPage((page) => page + 1)
  }

  return (
    <div className={styles.pagination}>
      <Backward className={styles.firstlast} onClick={() => setPage(1)} />
      <button
        onClick={previousHandler}
        className={page === 1 ? styles.disabled : null}
      >
        Previous
      </button>
      <p
        className={page === 1 ? styles.selected : null}
        onClick={() => setPage(1)}
      >
        1
      </p>
      <p
        className={page === 2 ? styles.selected : null}
        onClick={() => setPage(2)}
      >
        2
      </p>
      {page > 2 && page < 9 && (
        <>
          <span>...</span>
          <p className={styles.selected}>{page}</p>
        </>
      )}
      <span>...</span>
      <p
        className={page === 9 ? styles.selected : null}
        onClick={() => setPage(9)}
      >
        9
      </p>
      <p
        className={page === 10 ? styles.selected : null}
        onClick={() => setPage(10)}
      >
        10
      </p>
      <button
        onClick={nextHandler}
        className={page === 10 ? styles.disabled : null}
      >
        Next
      </button>
      <Forward className={styles.firstlast} onClick={() => setPage(10)} />
    </div>
  )
}

export default Pagination
