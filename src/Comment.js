import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from "react";
import commentAvatar from './images/comment-avatar.png'
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import EmployeeInfo from './EmployeeInfo.js';
import Button from 'bootstrap/js/dist/button.js';
import {
  BrowserRouter,
  Router,
  Route,
  Routes
} from "react-router-dom";
import { Link } from "react-router-dom";




function Comment() {

  console.log('thisworks')
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mathisme/WWCode_Hackathon_2022/2cd3e6f7293e13ba0c2a24b172aad096a2cc0270/src/employee-data.json")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    console.log('error')
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    console.log(items)
    return (
      <ul>
        {items.map(item => (


          // <li key={item.id}>
            <div>
            <MDBContainer className="d-flex justify-content-center">
<div className="d-flex">
      <div className="p-2 w-20 flex-row-reverse"><img src={commentAvatar} alt="logo" /></div>
      <div className="p-2 flex-shrink-1 flex-row">
        <p className="years">{item.createdAt} </p>
        <p className="company-descriptor">{item.profile.score}</p>
        <p className="user-descriptor">Position Title | {item.profile.company} | {item.profile.gender}</p>
        <p className="compensation">${item.profile.salary} | {item.updatedAt}</p>
        <p className="company-descriptor">{item.profile.comment}</p>
      </div>
    </div>
     </MDBContainer>


            </div>
         
         
        ))}
      </ul>
    );
  }

}

export default Comment;
