import React, { Component } from 'react';
import { useState } from "react";
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import Button from '@mui/material/Button';
// import Rating from '@mui/material/Rating';
// import CloseIcon from '@mui/icons-material/Close';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "react-bootstrap";


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

function DisplayProduct(props) {
    const [show, setShow] = useState(false);
    const [showImg, setShowImg] = useState({});
    const handleShow = (product) => {
    setShow(true);
    setShowImg(product);
  };
    const handleClose = () => {
    setShow(false);
  };
    return (        
    <div className='border px-4 py-2'>       
                <h4 className='col-lg-3 text-left'>{props.title}</h4>
                <div className='d-block d-flex align-items-center col-sm-6'>
                    <img src={props.image} alt={props.desc} width="150" 
                        onClick={() => handleShow(props)}/>
                    <FontAwesomeIcon 
                        icon={faPlusSquare} 
                        onClick={() => props.handleQuantityChange(props.value, props.id, 1)}
                        className='Add grey-color' />
                    <FontAwesomeIcon 
                        icon={faMinusSquare} 
                        onClick={() => props.handleQuantityChange(props.value, props.id, -1)}
                        className='Remove grey-color' />
                    <div className='d-block d-inline-block col-sm-1 justify-content-center'>
                        <span>Quantity</span>
                        <input 
                        // className='col-md-1 mx-4'
                        id="itemQuantity"
                        type="text" 
                        value={props.value}
                        min="0"
                        onChange={(event) => props.handleQuantityChange(event.target.value, props.id)}
                        ></input>
                    </div>
                </div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>{showImg.desc}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={showImg.image}
            width="350"
            alt={showImg.desc}
            className="mx-5"
          />
          <p>
            <span className="text-dark">Ratings: </span>
            {showImg.rating}/5
          </p>
        </Modal.Body>
      </Modal>
    </div>
    );
}
 
export default DisplayProduct;