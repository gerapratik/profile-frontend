import React, { useState } from "react";
import { Icon } from "semantic-ui-react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
`;
const Label = styled.div``;
const Input = styled.input`
flex:1;
min-width:40%;
margin:10px 0px;
padding: 10px;
`;
const Button = styled.button`
border:none;
width:50%;
height:20%;

padding:15px 20px;
background-color:teal;
color:white;
`;

const ExpWrapper = styled.div`
display:flex;
`;

const InputWrapper= styled.div`
display:flex;
flex-direction:column

`;

const Right = styled.div``;

const Experience = () => {
  const [experienceList, setExperienceList] = useState([{ experience: "" }]);
  const [startValue, setStartValue] = React.useState(null);
  const [endValue, setEndValue] = React.useState(null);

  const handleExperienceAdd = () => {
    return setExperienceList([...experienceList, { experience: "" }]);
  };
  const handleExperienceRemove = (index) => {
    const list = [...experienceList];
    list.splice(index, 1);
    return setExperienceList(list);
  };
  return (
    <Container>
      <Left>
        {experienceList.map((experience, index) => (
          <ExpWrapper key={index}>
            <InputWrapper>
            
            <Input placeholder="company name"></Input>
            <Input placeholder="company logo"></Input>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Start Date"
                value={startValue}
                onChange={(newValue) => {
                  setStartValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
              <DatePicker
                label="End Date"
                value={endValue}
                onChange={(newValue) => {
                  setEndValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            </InputWrapper>
            {experienceList.length > 1 && (
              <Button onClick={() => handleExperienceRemove()}>REMOVE</Button>
            )}
            

            {experienceList.length - 1 === index &&
              experienceList.length < 4 && (
                <Button onClick={() => handleExperienceAdd()}>ADD2</Button>
              )}
            
          </ExpWrapper>
        ))}
      </Left>

     
    </Container>
  );
};

export default Experience;
