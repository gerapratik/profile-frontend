import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SingleExperience from "./SingleExperience";

// const Title = styled.h1`
//   flex: 2;
//   font-size: 25px;

//   color: red;
//   margin: 10px 10px 10px 10px;
//   padding: 10px 10px;
// `;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
// const RowWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: space-between;
// `;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  border-style: outset;
  border-color: gray;
`;


// const Label = styled.label`
//   min-width: 40%;
//   margin: 10px 0px 5px;
//   padding: 10px;
//   color: white;
// `;
// cons= styled.div`
//   display: flex;
//   flex-direction: row;
// `;
// const Input = styled.input`
//   min-width: 40%;
//   margin: 10px 0px;

//   height: 40px;
//   border-radius: 5px;
//   background-color: gray;
//   color: white;
//   padding-left: 10px;

//   &::placeholder {
//     color: lightgray;
//   }
// `;
// const Inputcheckbox = styled.input`
//   margin-left: 10px;
// `;

// const Button = styled.button`
//   height: 40px;
//   border-radius: 5px;
//   background-color: red;
//   color: white;
//   border: none;
//   font-size: 18px;
//   font-weight: 500;
//   cursor: pointer;
// `;
const Buttonadd = styled.button`
  height: 40px;
  border-radius: 5px;
  background-color: red;
  color: white;
  border: none;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  align-self: center;
  margin-top: 10px;
`;

// const InputWrapper = styled.div`
//   width: 80%;

//   display: flex;

//   flex-wrap: wrap;
// `;

function ExperienceModal(props) {

  const isValidExperienceDate = (startDate, endDate) => {
    return new Date(endDate) > new Date(startDate);
  };

  const handleServiceChange = (value, e, index) => {
    const { name } = e.target;
    if (name === "current" && value === true) {
      props.handleExperienceChange(index, "enddate", "");
    }

    props.handleExperienceChange(index, name, value);
  };
  const handleServiceAdd = () => {
    const isValid=props.experience.every((exp)=>exp.companyname && exp.startdate && exp.jobtitle)

    if(isValid){

      props.handleNewExpAdd();
    }
    else{
      alert("Please enter all required fields!!")
    }
  };

  return (
    <Container>
      {props.experience.map((singleExperience, index) => (
        <>
          <Wrapper key={index}>
            <SingleExperience
              index={index}
              singleExperience={singleExperience}
              handleServiceChange={handleServiceChange}
              handleExpRemove={props.handleExpRemove}
              handleServiceAdd={handleServiceAdd}
              experience={props.experience}
            />
          </Wrapper>
          
        </>
      ))}
      {props.experience.length < 4 && (
        <Buttonadd onClick={handleServiceAdd}>Add Experience</Buttonadd>
      )}
    </Container>
  );
}

export default ExperienceModal;
