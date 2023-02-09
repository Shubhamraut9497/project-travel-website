import React from 'react';
import {Link} from 'react-router-dom'
const ProDuct=(props)=>{
    return (
        <>
        
        <div>
          <div key={props.product.id} className="max">
          <Link to ={`products/${props.product.id}`} style={{color:'black',textDecoration:'none'}}>
            <img
              src={props.product.thumbnail}
              style={{
                width: "200px",
                height: "200px",
                marginTop: "20px",
              }}
            />
            <h1 style={{ fontSize: "12px" }}>{props.product.title}</h1>
            <h1 style={{ fontSize: "15px" }}>$ {props.product.price}</h1>
            </Link>
          </div>
        </div>
        
      </>
    )
}
export default ProDuct;