import React from 'react'
import {Link} from 'react-router-dom'

const Cart = (props) => {
  return (
    <div>
       <div className="cart-section">
      <div className="image-box">
              <img className="imagesource" src="https://pngimg.com/uploads/phone_hand/phone_hand_PNG15.png"/>
          </div>
          <div className="info">
          <span>
            {props.data.name}
          </span>
          <span>price:${props.data.price}</span>
          
      <div className="button-item">
      <Link to={`/item/${props.data.id}`} ><button className="viewitem" >view Item</button></Link>
     <button className="addtocart" onClick={()=>props.addToCartHandler({price:1000, name:"i-phone 11"})}>Add to cart</button>
     <button className="removefromcart" onClick={()=>{props.removeFromCartHandler()}}>Remove From cart</button>
     </div>
     </div>
      </div>
    </div>
  )
}

export default Cart
