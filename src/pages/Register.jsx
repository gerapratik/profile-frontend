import styled from "styled-components";
import React, { useState } from "react";
import { signupUser } from "../api/userApi";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: black;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  color:red;
`;
const Form = styled.div`
  display:flex;
  flex-direction:column;



`;

const Input = styled.input`
width:60%;
height: 40px;
border-radius: 5px;
background-color: gray;
color: white;
padding-left: 20px;
margin-right:10px;


&::placeholder {
  color: lightgray;
}
`;
const InputWrapper=styled.div`
display:flex;
justify-content:space-around;
margin:10px;

`;


const Agreement = styled.span`
  margin: 20px 0px;
  font-size: 12px;
  color:white;
`;
const Button = styled.button`
height: 40px;
border-radius: 5px;
background-color: red;
color: white;
border: none;
font-size: 18px;
font-weight: 500;
cursor: pointer;
`;

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [signupSuccess, setSignupSuccess] = useState(false);
  // const history = useHistory();
  const navigate = useNavigate();

  const handleSignup = () => {
    if (firstName.length > 0 && lastName.length > 0 && email.length > 0 && password.length > 0 ) {
      if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){

        setLoading(true);
        signupUser(firstName, lastName, email, password)
          .then(() => {
            setError(false);
            setLoading(false);
            setSignupSuccess(true);
            setTimeout(() => {
              navigate("/login");
            }, 2000);
          })
          .catch((err) => {
            setLoading(false);
            setError(err);
          });
      }
    } else {
      alert('Please enter valid input')
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <InputWrapper>
          <Input placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/>
          <Input placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}/>
          </InputWrapper>
          <InputWrapper>
          <Input placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)}/>
          <Input placeholder="Password"  type="password" onChange={(e) => setPassword(e.target.value)}/>
          </InputWrapper>
          <Agreement>
            By creating an account, I consent to processing of personal data in
            accordance with the
            <b> PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={() => handleSignup()}>CREATE</Button>
        </Form>
        {error && <div style={{color: 'red'}}>{error}</div>}
      </Wrapper>
    </Container>
  );
};

export default Register;
