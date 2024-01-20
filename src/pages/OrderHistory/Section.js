import React, { useEffect } from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import "../../styles/orderHistory.css"


function Section() {
    
    
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
                                        <td>Date</td>
                                        <td>Address</td>
                                        <td>Contact</td>
                                        <td>Price</td>
                                        <td>Delivery Status</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>16 Dec 2023</td>
                                        <td>No 17, main street, Badulla</td>
                                        <td>0711111111</td>
                                        <td>Rs. 3825</td>
                                        <td>Pending</td>
                                    </tr>
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
