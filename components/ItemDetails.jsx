import React from 'react'
import { useParams, Link } from 'react-router-dom'
import ItemList from '../ItemList'

const ItemDetails = (props) => {
    const { id } = useParams();
    const [data, setData] = React.useState({})
    const [loader, setLoader] = React.useState(true)
    // console.log(ItemList)
    console.log(typeof id)

    React.useEffect(() => {
        if (ItemList.length) {

            const item = ItemList.find((item) => item.id === id);
            console.log(item)
            setData(item)
            setLoader(false)
        }
    }, [id])




    if (loader) return <p>Loading......</p>


    return (


        <div>
            <div className="cart-section">
                <div className="image-box">
                    <img className="imagesource" src={data.imgsrc} />
                </div>
                <div className="info">
                    <span>
                        {data.name}
                    </span>
                    <span>price:${data.price}</span>

                    <div className="button-item">
                        <button className="addtocart" onClick={() => props.addToCartHandler({ price: 1000, name: "i-phone 11" })}>Add to cart</button>
                        <button className="removefromcart" onClick={() => { props.removeFromCartHandler() }}>Remove From cart</button>
                        <Link to="/"><button>Back to home</button></Link>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default ItemDetails
