// AddToCart.js
import React, { useState, useEffect } from 'react';
import '../../styles/AddToCart.css';
import Header from '../../components/Layouts/Header';
import Footer from '../../components/Layouts/Footer';


const API_BASE_URL = 'http://localhost:8000/api'; // Replace with your Django API base URL
const getCSRFTokenFromCookie = () => {
  const cookieString = document.cookie;
  const csrfTokenCookie = cookieString
    .split('; ')
    .find(cookie => cookie.startsWith('csrftoken='));

  if (csrfTokenCookie) {
    return csrfTokenCookie.split('=')[1];
  } else {
    console.error('CSRF token cookie not found!');
    // Handle the case where the CSRF token cookie is not found
    return null;
  }
};

function AddToCart() {
  const [expandedItem, setExpandedItem] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [itemAddedMsg, setItemAddedMsg] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
// Example of using localStorage
useEffect(() => {
   // Load cart items from localStorage on component mount
   const storedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
   setCartItems(storedCart);
}, []);

useEffect(() => {
   // Save cart items to localStorage whenever the cartItems state changes
   localStorage.setItem('cartItems', JSON.stringify(cartItems));
}, [cartItems]);

  useEffect(() => {
    // Fetch menu items from Django API
    fetch(`${API_BASE_URL}/menu/`)
      .then(response => response.json())
      .then(data => setMenuItems(data))
      .catch(error => console.error('Error fetching menu items:', error));
  }, []);

  useEffect(() => {
    if (itemAddedMsg) {
      const timeoutId = setTimeout(() => {
        setItemAddedMsg(null);
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [itemAddedMsg, setItemAddedMsg]);

  const toggleDescription = itemId => {
    setExpandedItem(expandedItem === itemId ? null : itemId);
  };

const addToCart = async (item) => {
  const isItemInCart = cartItems.some((cartItem) => cartItem.id === item.id);
  // Check if the user is authenticated
  if (!isUserAuthenticated()) {
    window.alert("Please log in to add items to the cart.");

    return;
  }
  if (isItemInCart) {
    console.log(`"${item.name}" is already in the cart.`);
    setItemAddedMsg(`"${item.name}" is already in the cart.`);
  } else {
    const csrfToken = getCSRFTokenFromCookie(); // Implement this function

    // Add the item to the local cart state
    const updatedCart = [...cartItems, { ...item, quantity: 1 }];
    setCartItems(updatedCart);

    // Make a POST request to add the item to the backend database
    try {
      const response = await fetch(`${API_BASE_URL}/add-to-cart/${item.id}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken,
        },
        body: JSON.stringify({
          quantity: 1,
        }),
      });

      if (response.ok) {
        console.log(`"${item.name}" has been added to the cart.`);
        setItemAddedMsg(`"${item.name}" has been added to the cart.`);
      } else {
        console.error(`Failed to add "${item.name}" to the cart. Server returned ${response.status}`);
        // Optionally, you can rollback the local state update if the server request fails
        setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
      }
  } catch (error) {
   console.error('Error adding item to the cart:', error);
   // Optionally, you can rollback the local state update if there's a network error
   setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
}
   }
     };
// Helper function to check user authentication
const isUserAuthenticated = () => {
  return true; // Assuming the user is always authenticated for demonstration purposes
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
            {menuItems.map((item) => (
              <div key={item.id} className="menu-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p className={expandedItem === item.id ? 'expanded' : 'collapsed'}>{item.description}</p>
                  {expandedItem === item.id && (
                    <p className="expanded-description">Delicious {item.name} with all the fixings.</p>
                  )}
{/*                   <p>Rs {item.price.toFixed(2)}</p> */}
                      <p>Rs {parseFloat(item.price).toFixed(2)}</p>

                  <div className="buttons-container">
                    <button onClick={() => addToCart(item)}>Add to Cart</button>
                    <div className="button-space" />
                    <button onClick={() => toggleDescription(item.id)}>
                      {expandedItem === item.id ? 'View Less' : 'View More'}
                    </button>

                  </div>
                </div>
              </div>
            ))}



          </div>
        </div>
      </div>

      <div className="cart-container">
        <h2>Shopping Cart</h2>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((cartItem) => (
              <tr key={cartItem.id}>
                <td><img src={cartItem.image} alt={cartItem.name} style={{ width: '75px', height: '75px', borderRadius: '5px' }} /></td>
                <td>{cartItem.name}</td>
                <td>
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(cartItem.id, cartItem.quantity - 1)}>-</button>
                    <span>{cartItem.quantity}</span>
                    <button onClick={() => updateQuantity(cartItem.id, cartItem.quantity + 1)}>+</button>
                  </div>
                </td>
                <td>Rs {(cartItem.price * cartItem.quantity).toFixed(2)}</td>
                 <td>

    <button className="delete-button" onClick={() => removeCartItem(cartItem.id)}>Delete</button>

</td>

             </tr>

            ))}
            <tr className="total-items-row">
              <td colSpan="2"></td>
              <td>Total Quantity: {cartItems.reduce((total, item) => total + item.quantity, 0)}</td>
              <td>Total Price: Rs {cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</td>
              <td></td>
            </tr>
          </tbody>

        </table>
        {cartItems.length > 0 && (
          <div className="order-summary">
            {/* <p>Total: Rs {getTotalPrice()}</p> */}
            <button className="place-order-button" onClick={placeOrder}>Place Order</button>
          </div>
        )}
         {itemAddedMsg && <div className="item-added-msg">{itemAddedMsg}</div>}
      </div>

      <Footer />
    </>
  );
}

export default AddToCart;