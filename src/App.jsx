import { useState } from 'react'
import styles from './App.module.css'

import PreHeader from '/src/components/PreHeader'
import Header from '/src/components/Header'
import ShoeNav from '/src/components/ShoeNav'
import ShoeType from '/src/components/ShoeType'
import ShoeList from '/src/components/ShoeList'

function App() {

  return (
    <>
      <PreHeader />
      <Header />
      <main>
        <ShoeNav />
        <section className={styles.shoes}>
          <ShoeType className={styles.shoeType} />
          <ShoeList className={styles.shoeList} />
        </section>
      </main>
    </>
  )
}

export default App
