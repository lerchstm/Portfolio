import * as React from "react"

import '../styles/styles.scss'

import Header from '../components/header'
import About from '../components/about'
import Intro from '../components/intro'
import Career from "../components/carrer"




// markup
const IndexPage = () => {
  return (
    <main>
      <title>Mika's Portfolio </title>
      <div>
        <Header/>
        <div className="container">
        <Intro/>
        <About/>
        <Career/>
        </div>
      </div>  
    </main>
  )
}

export default IndexPage
