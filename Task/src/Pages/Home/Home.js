import React from 'react'
import Slide from '../../components/Slide/Slide'
import './Home.style.css'


export default function Home() {
  return (
    <div className="homeContainer">
    <div className="container1">
      <div className="jumbotron jumbotron-fluid">
          <h1>Clothes Store</h1>
          <p>Welcome To the the <b>#N°1 Selling</b> Clothes store in Tunisia.</p>
          </div>
      <br />
      <Slide />
      <br />
    </div>
   </div>
  )
}
