
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../../styles/Foodform.css"; 
import {useState} from 'react';
import {  useEffect } from 'react';
import axios from 'axios';

function Section4() {
  
     
  const [foodname, setFoodname] = useState('');
  const [foodprice, setFoodprice] = useState("");
  const [foodimage, setFoodimage] = useState("");
  const [foodItems, setFoodItems] = useState([]);

  
  useEffect(() => {
    (async () => await Load())();
    }, []);
    
    //With error handling
    async function Load() {
      try {
        const result = await axios.get("http://127.0.0.1:8000/foodForm");
        setFoodname(result.data);
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
      try
          {
           await axios.post("http://127.0.0.1:8000/foodForm",
          {
          
           foodname:foodname,
           foodprice:foodprice,
           foodimage:foodimage
  
          
          });
            alert("Your food has added Successfully");
            setFoodname("");
            setFoodprice("");
            setFoodimage("");
            
            Load();
  
        
          
          }
      catch(err)
          {
            alert("Sorry !!! Your food is not added");
          }
     }

     async function DeleteFood(id)
     {
        
          await axios.delete("http://127.0.0.1:8000/student/" + id);
          alert("Food deleted Successfully");
          setFoodname("");
          setFoodprice("");
          setFoodimage("");
          Load();
    
    
     }






  return (


    <section className='food_order_section'> 
     <div className="food-form-container">
     <div className="top-bar"></div>





         
    <Form>
      <Form.Group className="mb-3" controlId="formBasicFoodName">
        <Form.Label>Food Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Food Name" 
        id="foodname"
                  value={foodname}
                  onChange={(event) =>
                  {
                    setFoodname(event.target.value);   }}   
                />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="Enter Price" 
        id="foodprice"
        value={foodprice}
        onChange={(event) =>
        {
          setFoodprice(event.target.value);   }}  
        />
      </Form.Group>

      <Form.Group controlId="formBasicPhoto">
        <Form.Label>Upload Photo</Form.Label>
        <Form.Control type="file" 
         accept="image/png, image/jpeg"  onChange={this.handleImageChange} required

        
        
        />
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


    <table className="table table-dark" align="center">
        <thead>
          <tr>
            <th scope="col">Food Id</th>
            <th scope="col">Food Name</th>
            <th scope="col">Food Price</th>
            <th scope="col">Food Appearance</th>
            <th scope="col">Option</th>
          </tr>
        </thead>
        
        <tbody>
         
          {foodItems.map((food) => (
            <tr key={food.id}>
              <th scope="row">{food.id}</th>
              <td>{food.foodname}</td>
              <td>{food.foodprice}</td>
              <td>{food.foodimage}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => DeleteFood(food.id)}
                >
                

                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Section4;