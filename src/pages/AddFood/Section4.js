
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../../styles/Foodform.css"; 


function Section4() {
  return (
    <section className='food_order_section'> 
     <div className="food-form-container">
     <div className="top-bar"></div>
     
        
         
    <Form>
      <Form.Group className="mb-3" controlId="formBasicFoodName">
        <Form.Label>Food Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Food Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="Enter Price" />
      </Form.Group>

      <Form.Group controlId="formBasicPhoto">
        <Form.Label>Upload Photo</Form.Label>
        <Form.Control type="file" />
        <Form.Text className="text-light" >
          Please select a photo for food.
        </Form.Text>
      </Form.Group>

      

      <Button variant="primary" type="submit">
        Add
      </Button>
      <Button variant="primary" type="submit">
       Close
      </Button>
      <br></br>
      <br></br>

      <div className="bottom-bar"></div>
    </Form>
    </div>
    </section>
  );
}

export default Section4;
