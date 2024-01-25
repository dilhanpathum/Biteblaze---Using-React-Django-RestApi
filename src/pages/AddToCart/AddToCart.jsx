// AddToCart.js
import React, { useState, useEffect } from 'react';
import '../../styles/AddToCart.css';
import Header from '../../components/Layouts/Header';
import Footer from '../../components/Layouts/Footer';
import { useCookies } from "react-cookie";
import axios from 'axios';




// 


function AddToCart() {
  const [token] = useCookies(["mytoken"]);
  const [foodItems, setFoodItems] = useState([]);
useEffect(() => {
  (async () => await Load())();
  }, []);
  
  //With error handling
  async function Load() {
    try {
      const result = await axios.get("http://127.0.0.1:8000/biteblaze/foodform/", {
        headers: {
          'Content-Type' : 'application/json',
          'Authorization' : `Token ${token["mytoken"]}`
        }
       });
      console.log(result)
      setFoodItems(result.data);

      console.log(result.data);
    } catch (err) {
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Server responded with an error status:", err.response.status);
        console.error("Error data:", err.response.data);
      } else if (err.request) {
        // The request was made but no response was received
        console.error("No response received from server");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up the request:", err.message);
      }
    }
  }



  const [expandedItem, setExpandedItem] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [itemAddedMsg, setItemAddedMsg] = useState(null);

  useEffect(() => {
    if (itemAddedMsg) {
       const timeoutId = setTimeout(() => {
         setItemAddedMsg(null);
       }, 5000);

       //Commented out the timeout for testing
       return () => clearTimeout(timeoutId);
    }
  }, [itemAddedMsg, setItemAddedMsg]);



  const toggleDescription = (itemId) => {
    setExpandedItem(expandedItem === itemId ? null : itemId);
  };

  const addToCart = (item) => {
    const isItemInCart = cartItems.some((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      console.log(`"${item.name}" is already in the cart.`);
      setItemAddedMsg(`"${item.name}" is already in the cart.`);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
      console.log(`"${item.name}" has been added to the cart.`);
      setItemAddedMsg(`"${item.name}" has been added to the cart.`);
    }
  };


  const removeCartItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const updateQuantity = (itemId, newQuantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const placeOrder = () => {
    console.log("Order placed:", cartItems);
  };

  return (
    <>
      <Header />
      <div className="App">
        <div className="App-header">
          <h1>our crazy foods</h1>
          <h3>Elevate your dining experience with this exquisite creation that marries freshness and finesse on every plate</h3>
          <div className="menu-container">
            {foodItems.map((food) => (
              <div key={food.id} className="menu-item">
                <img src={food.foodimage} alt={food.foodname} />
                <div className="item-details">
                  <h4>{food.foodname}</h4>
                  <p className={expandedItem === food.id ? 'expanded' : 'collapsed'}></p>
                  {expandedItem === food.id && (
                    <p className="expanded-description">Delicious {food.foodname} with all the fixings.</p>
                  )}
                  <p>Rs {food.foodprice.toFixed(2)}</p>

                    <div className="buttons-container">
                      <a href='/orderForm'>
                    <button >Add to Cart</button>
                    </a>
                    <div className="button-space" />
                    <button >
                      {expandedItem === food.id ? 'View Less' : 'View More'}
                    </button>

                  </div>
                </div>
              </div>
            ))}

           

          </div>
        </div>
      </div>

     

      <Footer />
    </>
  );
}

export default AddToCart;
