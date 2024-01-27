import React, { useEffect, useState } from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import "../../styles/orderHistory.css"
import { useCookies } from "react-cookie";
import axios from 'axios';
function Section() {
    const [token] = useCookies(["mytoken"]);
    const [orders,setOrders] = useState([]);
    useEffect(() => {
  
        (async () => await Load())();
        }, []);
        
        //With error handling
        async function Load() {
          try {
    
            const result = await axios.get("http://127.0.0.1:8000/biteblaze/getorders/", {
              headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Token ${token["mytoken"]}`
              }
             });
    
            setOrders(result.data);
    
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
    
    return (
        <section className='order_history_section'>
            <Container>
                <Row>
                    <Col className="mt-5">
                        <div className="mt-5 mb-lg-0">
                            <h2 className="order_history_title">order History</h2>
                        </div>
                        <div>
                            <table className="order_history_table">
                                <thead>
                                    <tr>
                                        <td>Item Name</td>
                                        <td>Quentity</td>
                                        <td>Address</td>
                                        <td>Date</td>
                                        <td>Delivery Status</td>
                                    </tr>
                                </thead>
                                <tbody>
                                {orders.map((order) => (
                                    <tr key={order.id}>

                                        <td>{order.item}</td>
                                        <td>{order.quentity}</td>
                                        <td>{order.address}</td>
                                        <td>{order.date}</td>
                                        <td>Pending</td>
                                    </tr>
          ))}
                                </tbody>
                            </table>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Section
