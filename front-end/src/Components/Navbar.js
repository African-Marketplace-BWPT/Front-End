import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <NavbarContainer>
            <Logo>
                <h1>GROW</h1>
            </Logo>
            <ButtonContainer>
                
                <Link to='/dashboard' >
                    <Buttons className='Buttons'>
                        Dashboard
                    </Buttons>
                </Link>
                <Link to='/allListing'>
                    <Buttons className='Buttons'>
                        All Listing
                    </Buttons>
                </Link>
                <Link to='/myListing'>
                    <Buttons className='Buttons'>
                        My Listing
                    </Buttons>
                </Link>
                <Link to='/cart'>
                    <Buttons className='Buttons'>
                        Cart
                    </Buttons>
                </Link>
                <Link to='/signIn'>
                    <Buttons className='Buttons'>
                        Logout
                    </Buttons>
                </Link>
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
const Buttons = styled.span`
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
