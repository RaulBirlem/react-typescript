import Footer from "./components/Footer"
import Header from "./components/Header"

import styles from './App.module.css'

function App() {

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h2>conteudo</h2>
      </main>
      <Footer />
    </>
  )
}

export default App
