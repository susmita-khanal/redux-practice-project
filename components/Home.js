import React from 'react';
import "./Home.css"
import Cart from "./Cart";
import  ItemList from '../ItemList'

const Home = (props) => {
    console.log(ItemList)
  return (
    <div>
     
      <div className="home-image">
      
      <h1>Home Container</h1>
      <div className="cart-icon">
      <span>{props.data.length}</span>
          <img  className="icon" src="https://static.vecteezy.com/system/resources/previews/000/496/007/original/vector-add-to-cart-icon-design.jpg"/>
      </div>
      {ItemList.map((item) => {
        return (

          <Cart data={item} addToCartHandler={props.addToCartHandler} removeFromCartHandler={props.removeFromCartHandler}/>
        )
      })}
      
    </div>
    </div>
  )
}

export default Home
