import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "@mui/material";
// import { eraseCookie } from "../utils/cookie";
import { checkIfAuthenticated } from "../utils/auth";
import { getCookie, eraseCookie } from '../utils/cookie'



const Container = styled.div`
  height: 60px;
  padding-bottom: 10px;
  background-color: black;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  color:red;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const MenuItem = styled.div`
  font-size: 14;
  cursor: pointer;
  margin-left: 25px;
  color:white;
`;

const Navbar = () => {

  const { pathname } = useLocation();
    const page = pathname.split('/')[1];
    const [isTokenAvailable, setIsTokenAvailable] = useState(false);
    const [username, setUsername] = useState('');
    
    

    useEffect(() => {
        const accessToken = getCookie('accessToken');
        const username = getCookie('username');
        if (accessToken) {
            setIsTokenAvailable(true);
            setUsername(username);
        } else {
            setIsTokenAvailable(false);
        }
    }, [page])
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
         
        </Left>
        <Center>
          <Logo>PROFILE</Logo>
        </Center>
        <Right>
          {!isTokenAvailable &&(

          <Link to="/register">
            {/* <MenuItem>All Public Profiles</MenuItem> */}
            <MenuItem>Register</MenuItem>
          </Link>
          )}
          {!isTokenAvailable &&(
          <Link to="/login">
            <MenuItem>Sign IN</MenuItem>
          </Link>
          )}
          {isTokenAvailable &&(
          <Link
            to="/login"
            onClick={() => {
              eraseCookie("accessToken");
              eraseCookie("username");
              eraseCookie("email");
            }}
          >
            <MenuItem>Log Out</MenuItem>
          </Link>
          )}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
