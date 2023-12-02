import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Burger from "../../assets/hero/hero-2.png"
import { Link } from 'react-router-dom'

function Section1() {
  return (
    <section className='hero_section'>
        <Container>
            <Row>
                <Col lg={7} className="mb-5 mb-lg-0">
                    <div className='position-relative'>
                        <img src={Burger} className='img-fluid' alt="Hero"/>
                        <div className='price_badge'>
                            <div className='badge_text'>
                                <h4 className='h4_xs'>only</h4>
                                <h4 className='h3_lg'>Rs.1999</h4>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={5}>
                    <div className='hero_text text-center'>
                        <h1 className='text-white'>Cheesy Pizza</h1>
                        <h2 className='text-white'>Special Christmas Offer</h2>
                        <p className='text-white pt-2 pb-4'>
                        Cheesy Bites Pizza: Irresistibly indulgent, our pizza features a tantalizing 
                        crust filled with gooey, melted cheese for a burst of flavor in every bite.
                        </p>
                        <Link to="/" className='order_now btn'>
                            Order Now
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Section1
