import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../../styles/OrderForm.css";


function Section3() {
    
        return (
            <section className='place_order_section'> 
          <div className="order-form-container">
            <h1>Order Form</h1>
            <Form>
              <Form.Group className="mb-3" controlId="formSelectedItem">
                <Form.Label>Selected Item</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter selected item"
                />
              </Form.Group>
      
              <Form.Group className="mb-3" controlId="formQuantity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter quantity"
                />
              </Form.Group>
      
              <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                />
              </Form.Group>
      
              <Form.Group className="mb-3" controlId="formAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Enter address"
                />
              </Form.Group>
      
              <Form.Group className="mb-3" controlId="formContacts">
                <Form.Label>Contacts</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter contacts"
                />
              </Form.Group>
      
              <Form.Group className="mb-3" controlId="formDate">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                />
              </Form.Group>
      
              <Button
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </div>
          </section>
        );
      }
      
      export default Section3;