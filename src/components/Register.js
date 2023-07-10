import React, { useState } from 'react';

import { Form, Button } from "react-bootstrap";

import axios from "axios";


export default function Register() {

    const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [email , setEmail] = useState("");
const [register, setRegister] = useState(false);
const configuration = {
    method: "post",
    url: "http://localhost:3000/api/users/add",
    data: {
      username,
      email,
      password,
    },
  };

    const handleSubmit = (e) => {
        console.log(e)
        e.preventDefault();

          axios(configuration)
          .then((result) => {
            console.log(result)
            setRegister(true);
          })
          .catch((error) => {
            console.log(error);
          });
       
      }

    return (
        <>
         <h2>Register</h2>
      <Form onSubmit={(e)=>handleSubmit(e)}>
        
        <Form.Group controlId="formBasicUsername">
          <Form.Label>username</Form.Label>
          <Form.Control type="text" placeholder="Enter username"  name="username"
            value={username} 
            onChange={(e) => setUsername(e.target.value)}

            />
        </Form.Group>

        
        <Form.Group controlId="formBasicEmail">
          <Form.Label>email</Form.Label>
          <Form.Control type="email" placeholder="Enter email"  name="email"
            value={email} 
            onChange={(e) => setEmail(e.target.value)}

            />
        </Form.Group>
       
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"  name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </Form.Group>

       
        <Button variant="primary"
          type="submit"
          onClick={(e) => handleSubmit(e)}>
          Submit
        </Button>
      </Form>   
      
      {register ? (
          <p className="text-success">You Are Registered Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Registered</p>
        )}
        </>
    )
}