import * as React from "react"
/* import { 
  container,
  aboutMe,
  imageProfilePicture,
  imageCropper,
  list,
  listSpan
} from '../styles/layout.module.scss' */

import '../styles/styles.scss'

import Header from '../components/header'

import profilePicture from "../images/me.jpg"
import {
  MdPerson,
  MdPlace,
  MdInfo
} from "react-icons/md"


// markup
const IndexPage = () => {
  return (
    <main /*className={container>}*/>
      <title>Mika's Portfolio </title>
      <div>
        <Header/>
      </div>
      <div /*className={aboutMe}*/ >
        <div /*className={ imageCropper}*/>
        <img
        /*className={imageProfilePicture}*/
        alt="Thats Me"
        src={profilePicture}></img>
        </div>
     
        <p>
          <h1>Facts</h1>
        <ul /* className={list} */ > 
          <li> <span /* className={listSpan}*/>  <MdPerson /></span>my Name is Mika Lerchster</li>
          <li>  <span /*className={listSpan}*/> <MdInfo /></span>im 20 Years old</li>
          <li> <span /* className={listSpan}*/> <MdPlace /></span>based in Carinthia (Austria)</li>
        </ul>
        </p>
      </div>
      <h1>My career</h1>

      
      
    </main>
  )
}

export default IndexPage
