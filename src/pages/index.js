import * as React from "react"
 /* import { 
  container,
  aboutMe,
  imageProfilePicture,
  imageCropper,
  list,
  listSpan
} from '../styles/styles.scss' */

import '../styles/styles.scss'

import Header from '../components/header'
import About from '../components/about'
import Intro from '../components/intro'




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
        </div>
      </div>  
    </main>
  )
}

export default IndexPage
