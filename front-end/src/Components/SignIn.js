import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import * as yup from 'yup';
import styled from 'styled-components'

const defaultErrorState = {
    email: "",
    password: "",
  };
  

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("This is not a valid Email.")
      .required("Please enter you email."),
    password: yup
      .string()
      .required("Please type a password.")
      .min(6, "Requires a min of 6 symbols."),
  });
  

const SignIn = ({ login, isAuthenticated }) =>{

    const [formState, setFormState] = useState({
        email: "",
        password: "",
      });
    
      const { email, password } = formState;

      const [errors, setErrors] = useState(defaultErrorState);
      const [isDisabled, setIsDisabled] = useState(false);

      useEffect(
        () => {
          schema.isValid(formState).then((valid) => setIsDisabled(!valid));
        },
        [formState],
        schema
      );

      const validate = (e) => {
        e.persist();
        yup
          .reach(schema, e.target.name)
          .validate(e.target.value)
          .then((valid) => setErrors({ ...errors, [e.target.name]: "" }))
          .catch((err) => setErrors({ ...errors, [e.target.name]: err.errors[0] }));
      };
    
    

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormState({ email: "", password: "" });
        login(email, password);
      };

    const handleChange = (e) => {
        e.persist();
        validate(e);
        setFormState({ ...formState, [e.target.name]: e.target.value });
      };
    return(
        <div>
            <h1>SignIn</h1>
            <Link to='/'>SignUp</Link>
            <br />
            <Link to='/dashboard'>Dashboard</Link>

            <div>
        <Container>
            <form onSubmit={handleSubmit} className='formContainer'>
        <label>
          <input
            type='email'
            name='email'
            onChange={handleChange}
            data-cy='email'
            value={email}
            placeholder='Email'
          />
          {errors.email.length > 0 && (
            <p style={{ color: "red" }}>{errors.email}</p>
          )}
        </label>
        <label>
          <input
            type='password'
            name='password'
            onChange={handleChange}
            data-cy='password'
            value={password}
            placeholder='Password'
          />
          {errors.password.length > 0 && (
            <p style={{ color: "red" }}>{errors.password}</p>
          )}
        </label>
        <button type='submit' data-cy='submit-button' disabled={isDisabled}>
          Sign In
        </button>
        <div>Or</div>
        <Link to='/register'>
          <button type='submit' data-cy='submit-button'>
            Register
          </button>
        </Link>
      </form>
      </Container>
            </div>
        </div>
        
        
    )
};

export default SignIn;


const Container = styled.div`
  width: 50rem;
  text-align: center;
  align-items: center;
  max-width: 100%;
  margin: auto;
  overflow: hidden;
  padding: 2rem;
  margin-bottom: 3rem;
  border: black 0.1rem solid;

  h1 {
    font-size: 3rem;
  }

  .formContainer {
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
      width: 7rem;
      margin: 0.5rem;
    }
  }
`;