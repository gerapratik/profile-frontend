import styled from "styled-components";
import React, { useEffect } from "react";
import { useState } from "react";
import { setCookie } from "../utils/cookie";
import { loginUser } from "../api/userApi";
import { useNavigate } from 'react-router-dom';



const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  ),
  url("http://mppmduse2pmpovwapp.azurewebsites.net/wp-content/uploads/2019/09/netflix-background-9.jpg");
background-size: cover;
position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper=styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form =styled.form`
width: 300px;
height: 300px;
padding: 30px;
border-radius: 5px;
background-color:black;
display: flex;
flex-direction: column;
justify-content: space-around;
`;

const Input = styled.input`
height: 40px;
border-radius: 5px;
background-color: gray;
color: white;
padding-left: 10px;

&::placeholder {
  color: lightgray;
}
`;



const Button =styled.button`
height: 40px;
border-radius: 5px;
background-color: red;
color: white;
border: none;
font-size: 18px;
font-weight: 500;
cursor: pointer;
`;


const Hyperlink = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate =useNavigate();

  
  
  const handleLogin = () => {
    if (email.length > 0 && password.length > 0) {
      setLoading(true);
      loginUser(email, password)
        .then((response) => {
          setError(null);
          setLoading(false);
          const { accessToken, tokenBody } = response;
          const {
            firstName,
            lastName,
            email
          } = tokenBody;
          setCookie("accessToken", accessToken);
          setCookie("firstName", firstName);
          setCookie("lastName", lastName);
          setCookie("email", email);
          setTimeout(() => {
            navigate("/");
          }, 2000);
        })
        .catch((err) => {
          setLoading(false);
          setError(err);
        });
    } else {
      alert('Please enter valid input')
    }
  };

  return (
    <Container>
      <Wrapper>
        <Form>
        <Title>SIGN IN</Title>
          <Input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button onClick={() => handleLogin()} disabled={loading} loading={loading}>LOGIN</Button>

          
        
        {error && <div style={{color: 'red'}}>{error}</div>}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
