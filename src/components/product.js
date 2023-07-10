import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios";
import UpdateProduct from './UpdateProduct';



export default function Product(props) {
  
  const deleteData = async (id) => {
    try {
     const response =  await axios.delete(`http://127.0.0.1:3000/api/products/delete/${id}`); 
  
       if(response.status === 200){
        window.location.reload();
       }
      console.log('load data')
    } catch (error) {
      console.error(error);
    }
  }
  const [isEditOpen, setEditOpen] = useState(false);
  const [selectedProduct, setselectedProduct] = useState();
  
  const handleEditFormClose = () => {
    setEditOpen(false);
  };
  const onEdit =(ele)=>{
    setselectedProduct(ele);
    setEditOpen(true);
  }
  return (
    <div>
 <Card style={{ width: '18rem' }}>
      <Card.Img className='cardimage'  variant="top" src={props.ele.image} />
      <Card.Body>
        <Card.Title>{props.ele.category}</Card.Title>
        <Card.Text>{props.ele.name}</Card.Text>
        <Card.Text>{props.ele.price}</Card.Text>
        <Button variant="primary" style={{margin: "5px"}} onClick={()=>onEdit(props.ele)}>update</Button>
        <Button variant="primary" className='btn btn-danger' style={{margin: "5px"}}
        onClick={()=>deleteData(props.ele.id)} >delete</Button>
      </Card.Body>
    </Card>   
    {isEditOpen && (
        <UpdateProduct
          ele={selectedProduct}
          onClose={handleEditFormClose}
        />
      )}
     </div>
  )
}
