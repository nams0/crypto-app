import styles from "./Layout.module.css"

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Crypto App</h1>
        <p>
          <a href="https://github.com/nams0" target="_blank">Nams0</a> | React.js
        </p>
      </header>
      {children}
      <footer className={styles.footer}><p>Developed by Amirhossein with ❤️</p></footer>
    </>
  )
}

export default Layout
