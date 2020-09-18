import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
    return(
        <NavbarContainer>
            <Logo>
                <h1>GROW</h1>
            </Logo>
            <ButtonContainer>
                
                <Buttons href='http://localhost:3000/allListing'>All Listing</Buttons>
                <Buttons href='http://localhost:3000/myListing'>My Listing</Buttons>
                <Buttons href='http://localhost:3000/cart'>Cart</Buttons>
                <Buttons href='http://localhost:3000/signIn'>Logout</Buttons>
            </ButtonContainer>
            
            
        </NavbarContainer>
    )
};

export default Navbar;

const NavbarContainer = styled.div`
    margin: 10px 10% 10px 10%;
   
    padding: 2px;
    display: flex;
    flex-direction: column;
    border-bottom: #f07736 solid 3px
    
    
   


`
const Logo = styled.div`
    color: #f07736;
    
    
`
const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-right: 65%;
    
    font-family: Poppin;
    margin-bottom: 3px;
`
const Buttons = styled.a`
    text-decoration: none;
    color: black;
    font-family: Poppin;
    font-size: 1rem;
    &:hover{
        color: #f07736;
    }
        
`

/* // orange color: 
//     Darker text color : #2b2c2d
//     Lighter text color: #727272
//      Font-family: Poppins; */
