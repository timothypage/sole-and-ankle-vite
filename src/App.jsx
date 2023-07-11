import { useState } from 'react'
import './App.css'

import PreHeader from '/src/components/PreHeader'
import Header from '/src/components/Header'
import ShoeNav from '/src/components/ShoeNav'

function App() {

  return (
    <>
      <PreHeader />
      <Header />
      <main>
        <ShoeNav />
      </main>
    </>
  )
}

export default App
