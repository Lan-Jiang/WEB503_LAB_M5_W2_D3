import React, { Component } from 'react';
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import Button from '@mui/material/Button';
// import Rating from '@mui/material/Rating';
// import CloseIcon from '@mui/icons-material/Close';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function Product(props) {
    return (
            
    <div className='border px-4 py-2'>       
                <h4 className='col-lg-2 text-left'>{props.desc}</h4>
                <div className='d-block d-flex align-items-center'>
                    <img src={props.image} alt={props.desc} width="150" />
                    <input 
                        className='col-md-1 mx-4'
                        type="number" 
                        defaultValue={props.value}
                        min="0"
                        // onChange={(event) => props.handleQuantityChange(event.target.value, props.id)}
                        onChange={(event) => props.handleQuantityChange(event.target.value, props.id)} 
                    ></input>
                    <span>quantity</span>
                </div>
    </div>
    );
}
 
export default Product;