import React from "react";

import Product from "./product";
import { useEffect,useState } from "react";
import axios from 'axios';
import './index.css';

import {useHistory } from 'react-router-dom';


export default function AccountComponent() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearch] = useState('')

  const history = useHistory();
  const handleClick = () => {
    history.push('/CreateProduct')
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:3000/api/products/getAll'); 

        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [])
  const handleSearch=(searchQuery,e)=>{
    e.preventDefault();
    const filtered=data.filter(ele=> ele.name.includes(searchQuery))
    console.log(filtered)
    setData(filtered)
    
    
  }
  
  return (
    
    
    <div >
     <div className="buttonG">
     <form className="d-flex" role="search" onSubmit={(e)=>{handleSearch(searchQuery,e)}}>
     <input onChange={(e) => setSearch(e.target.value)}  style={{margin:'2px' , maxWidth:'200px'}} class="form-control me-2" type="search" placeholder="Search" aria-label="Search "/> 
     </form>
        <button variant="primary" type="button" className="btn btn-success" onClick={handleClick}>
      Add
      </button>
     </div>
      <div className ="container">{data.map((ele,i)=>(
      <Product key={i} ele={ele} />
      ))}
    </div>
    </div>
  
   
  );
}

