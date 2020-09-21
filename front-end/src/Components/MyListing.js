import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';

import styled from 'styled-components';
import ItemCardMyListing from './ItemCardMyListing';


const MyListing = () => {
    return(
        <div>
            <h1>This is MyListing</h1>
            <Navbar/>

            <CreateButton href='http://localhost:3000/createListing'>Create Listing</CreateButton>
            
            <ItemCardMyListing></ItemCardMyListing>
            
            
            
        </div>
    )
};

export default MyListing;

const Container = styled.div`
    margin: 10px 10% 10px 10%;
    border: black solid 3px;
    height: 60vh;
    padding: 2px;
    display: flex;
    flex-direction: column;
    
`


const CreateButton = styled.a`
    width: 200px;
    height: 100px;
    border: black solid 1px;
    border-radius: 1px;
    text-decoration: none;
    background-color: #f07736;
    color: black;
    font-family: Poppin;
    font-size: 1rem;
    &:hover{
        color: white;
    }
        
`


const Buttons = styled.a`
    width: 200px;
    height: 100px;
    border: black solid 1px;
    border-radius: 1px;
    text-decoration: none;
    background-color: #f07736;
    color: black;
    font-family: Poppin;
    font-size: 1rem;
    &:hover{
        color: white;
    }
        
`

