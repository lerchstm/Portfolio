import * as React from "react"

import '../styles/styles.scss'

import Header from '../components/header'
import About from '../components/about'
import Intro from '../components/intro'
import Career from "../components/carrer"
import Footer from "../components/footer"




// markup
const IndexPage = () => {
  return (
    <main>
      <title>Mika's Portfolio </title>
      <Header/>
        <div className="container">
        <Intro/>
        <About/>
        <Career/>
        </div>
        <Footer/>
    </main>
  )
}

export default IndexPage
