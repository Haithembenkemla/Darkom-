import  { useState } from 'react'
import axios from 'axios'

function UpdateProduct({ ele, onClose }) {
    
  const [price,setprice]=useState(ele.price)
  
    const handleUpdate = async (data) => {
      
        
        try{
          console.log("data",data)
          console.log("ele",ele)
          const response= await axios.put(`http://127.0.0.1:3000/api/products/update/${ele.id}`,data)
          if (response.status===200){
            console.log('updating')
           
          }
          
        }catch (error){
          console.log(error)
        }
        onClose();
      };
    
  return (
    <div>
      <h2>Edit price</h2>
      <form>
       
        <label htmlFor="price">price:</label>
        <input  id="price"
            type="text"
            className="input"
            placeholder="price"
            required    
            minLength="3"
            defaultValue={price}
            onChange={(e)=>setprice(e.target.value)} />

        
        <button type="submit" onClick={()=>handleUpdate({price})}>Update</button>
        <button type="button" onClick={()=>onClose()}>Cancel</button>
      </form>
        </div>
  )
}

export default UpdateProduct