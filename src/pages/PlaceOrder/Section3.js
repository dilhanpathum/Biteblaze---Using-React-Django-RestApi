import React from 'react'
import {useState} from 'react';
import {  useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../../styles/OrderForm.css";
import axios from 'axios';
import { useCookies } from 'react-cookie';
function Section3() {

  const [item, setItem] = useState('');
  const [quentity, setQuentity] = useState("");
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState([]);
  const [token] = useCookies(["mytoken"]);
  const [id, setId] = useCookies(["id"]);

  useEffect(() => {
    (async () => await Load())();
    }, []);
    
    //With error handling
    async function Load() {
      try {
        const result = await axios.get("http://127.0.0.1:8000/biteblaze/getorders/");
        setDate(result.data);
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
      
  
  
  async function save(event)
      {
          event.preventDefault();
          let data = new FormData();
          data.append("item",item);
          data.append("quentity",quentity);
          data.append("username", username);
          data.append("address", address);
          data.append("contact", contact);
          data.append("date", date);
          data.append("userid",id['id'])
      try
          {
           await axios.post("http://127.0.0.1:8000/biteblaze/orderform/",data,{
            headers: {
            'Content-Type' : 'application/json',
            'Authorization' : `Token ${token["mytoken"]}`
          }
          // {
          
          //   item: item,
          //   quentity: quentity,
          //   username: username,
          //   address:address,
          //   contact:contact,
          //   date:date
  
  
          
          // },
          
          
         } );
            alert("Your order has registered Successfully");
            setItem("");
            setQuentity("");
            setAddress("");
            setContact("");
            setDate("");
            Load();
  
        
          
          }
      catch(err)
          {
            alert("Sorry !!! Your order Registation Failed");
          }
     }
  
  
  
  

        return (
          <section className='place_order_section'> 
          <div className="order-form-container">
            <h1>Order Form</h1>
            <Form>
              <Form.Group className="mb-3" controlId="formSelectedItem">
                <Form.Label>Selected Item</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter selected item"  id="item"
                  value={item}
                  onChange={(event) =>
                  {
                     setItem(event.target.value);      
                  }}
                />
              </Form.Group>
      
              <Form.Group className="mb-3" controlId="formQuantity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter quantity" 
                 id="quantity"
                  value={quentity}
                  onChange={(event) =>
                  {
                     setQuentity(event.target.value);   }}   
                />
              </Form.Group>
      
              <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  id="username"
                  value={username}
                  onChange={(event) =>
                  {
                     setUsername(event.target.value);     }} />
              </Form.Group>
      
      <Form.Group className="mb-3" controlId="formAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Enter address"

          id="address"
          value={address}
          onChange={(event) =>
          {
             setAddress(event.target.value);   }}

        />
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="formContacts">
                <Form.Label>Contacts</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter contacts"
                   id="tel"
                  value={contact}
                  onChange={(event) =>
                  {
                      setContact(event.target.value); }}

                />
              </Form.Group>
      

              <Form.Group className="mb-3" controlId="formDate">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"

                  id="date"
                  value={date}
                  onChange={(event) =>
                  {
                      setDate(event.target.value); }}

                />


                
              </Form.Group>
      
      
              <Button
                variant="primary"
                type="submit"

                onClick={save}
              >
                Submit
              </Button>
            </Form>
          </div>
          </section>
        );
      }
      
      export default Section3;