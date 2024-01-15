// AddToCart.js
import React, { useState, useEffect } from 'react';
import '../../styles/AddToCart.css';
import Header from '../../components/Layouts/Header';
import Footer from '../../components/Layouts/Footer';

const menuItems = [
  // ... (your existing menu items)
  {
    id: 1,
    name: 'pizza',
    price: 900,
    image: 'https://images.pexels.com/photos/13814644/pexels-photo-13814644.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with your food image URL
  },
  {
    id: 2,
    name: 'Burger',
    price: 540,
    image: 'https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with your food image URL
  },
  {
    id: 3,
    name: 'dum briyani',
    price: 1065.99,
    image: 'https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with your food image URL
  },
  {
    id: 4,
    name: 'noodles',
    price: 985,
    image: 'https://images.pexels.com/photos/2204771/pexels-photo-2204771.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with your food image URL
  }, {
    id: 5,
    name: 'noodles',
    price: 1090.99,
    image: 'https://images.pexels.com/photos/128408/pexels-photo-128408.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with your food image URL
  },
  {
    id: 6,
    name: 'Sause chicken ',
    price: 1030.99,
    image: 'https://images.pexels.com/photos/10361458/pexels-photo-10361458.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with your food image URL
  },
  {
    id: 7,
    name: 'Chicken devil',
    price: 750,
    image: 'https://images.pexels.com/photos/8284645/pexels-photo-8284645.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with your food image URL
  },
  {
    id: 8,
    name: 'chicken rice',
    price: 850,
    image: 'https://media.istockphoto.com/id/1333127665/photo/chicken-biryani-spicy-indian-malabar-biryani-hyderabadi-biryani-dum-biriyani-pulao-golden.jpg?b=1&s=612x612&w=0&k=20&c=VHIOPgQU2Hrxjeo_GNR-GX8ba3Embdxbz7gkvqOHAjg=', // Replace with your food image URL
  },
  {
    id: 9,
    name: 'noodles',
    price: 799,
    image: 'https://images.pexels.com/photos/7474163/pexels-photo-7474163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Replace with your food image URL
  },
  {
    id: 10,
    name: 'pizza',
    price: 1000,
    image: 'https://images.pexels.com/photos/13814644/pexels-photo-13814644.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with your food image URL
  },
  {
    id: 11,
    name: 'Burger',
    price: 720.99,
    image: 'https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with your food image URL
  },
  {
    id: 12,
    name: 'noodles',
    price: 550.99,
    image: 'https://images.pexels.com/photos/2092906/pexels-photo-2092906.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with your food image URL
  },
];

function AddToCart() {
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
            {menuItems.map((item) => (
              <div key={item.id} className="menu-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p className={expandedItem === item.id ? 'expanded' : 'collapsed'}>{item.description}</p>
                  {expandedItem === item.id && (
                    <p className="expanded-description">Delicious {item.name} with all the fixings.</p>
                  )}
                  <p>Rs {item.price.toFixed(2)}</p>

                  <div className="buttons-container1">
                    <button1 onClick={() => addToCart(item)}>Add to Cart</button1>
                    <div className="button1-space" />
                    <button1 onClick={() => toggleDescription(item.id)}>
                      {expandedItem === item.id ? 'View Less' : 'View More'}
                    </button1>

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
                <td><button className="delete-button" onClick={() => removeCartItem(cartItem.id)}>Delete</button></td>
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
