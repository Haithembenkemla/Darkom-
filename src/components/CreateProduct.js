import React, { useState } from 'react';

import { Form, Button } from "react-bootstrap";


import axios from "axios";


export default function CreateProduct() {

  const [category,setcategory]=useState("")
  const [name,setname]=useState("")
  const [image,setimage]=useState("")
  const [price,setprice]=useState("")

const[file,setfile]=useState(null)
 const uploadImage= async ()=>{
  // e.preventDefaults()
  const form = new FormData
  form.append('file',file)
  form.append('upload_preset','haithembk')
  // https://api.cloudinary.com/v1_1

  const response = await axios.post("https://api.cloudinary.com/v1_1/dr9ctyxbh/upload",form)
  console.log(response.data.secure_url)
  setimage(response.data.secure_url)
 }


  const handlePost = async (data)=>{

      try{
          const response=await axios.post('http://localhost:3000/api/products/add/9',data)
          console.log(response)
          console.log(data)
      }catch(error){
          console.log(error)
      }
  }


 
  
 
  

  


  return (
    <div>
         <div className="add" style={{width:'650px' }}>
      <h1 className="new product"> New product</h1>
      <form className ="new Form" style={{width:'600px' }}>
        <div   style={{display:'flex',margin:'5px',justifyContent:'space-between'}}>
          <div > 
          <label className="col-form-label">category</label>
            <input 
            id="category"
            className="form-control form-control-lg"
            placeholder="category"
            required
            minLength="3"
            defaultValue={category}
            onChange={(e)=>setcategory(e.target.value)}
          /></div>
          <div > 
          <label className="col-form-label">name</label>
 <input
            id="name"
            type="text"
            className="form-control form-control-lg"
            placeholder="name"
            required
            minLength="3"
            defaultValue={name}
            onChange={(e)=>setname(e.target.value)}
          /></div>
        </div>
        <div  style={{display:'flex',margin:'5px',justifyContent:'space-between'}}>
          <div >
          <label className ="col-form-label">price</label>

          <input
            id="price"
            type="text"
            className="form-control form-control-lg"
            placeholder="price"
            required
            minLength="3"
            defaultValue={price}
            onChange={(e)=>setprice(e.target.value)}
          />
          </div>
          <div  >
          <label className="col-form-label">image</label>

          <input
            id="image"
            type="file"
            className="form-control form-control-lg"
            placeholder="image"
            required
            minLength="3"
            defaultValue={file}
            onChange={(e)=>setfile(e.target.files[0])}
          />
          <button type="button" onClick={()=>{uploadImage()}}>upload</button>
          </div>
        </div>
        <input
            className="btn btn-primary"
            type="button"
            value="Publish"
            onClick = {()=>handlePost({category,name, image, price})} 
          />
          </form>
    </div>
  
    </div>
  )
}