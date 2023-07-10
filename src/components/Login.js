import React ,{useState} from 'react'
import { Form, Button } from "react-bootstrap";
import axios from "axios";

export default function Login() {

    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const configuration = {
    method: "post",
    url: "http://localhost:3000/api/auth/login",
    data: {
      username,
      password,
    },
  };


  const handleSubmit = (e) => {
    e.preventDefault();
   
    axios(configuration)
      .then((result) => {
            console.log(result , 'token')
            
            if(result.data === "not found"){
              setLogin(false)
            }else{
            
            localStorage.setItem("token" , result.data )
            localStorage.setItem("path","/")
            window.location.href = "/auth";
              
          console.log(result)
          setLogin(true);
            }

       
      })
      .catch((error) => {
        console.log(error);
      });
  }

    return (
        
        <>
         <h2>Login</h2>

              <Form onSubmit={(e)=>handleSubmit(e)}>
       
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
        </Form.Group>

        
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>

        
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Login
        </Button>
      </Form>  
      {login ? (
          <p className="text-success">You Are Logged in Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Logged in</p>
        )}
        </>
    )
}