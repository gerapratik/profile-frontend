import React, { useState } from "react";
import { Modal } from "semantic-ui-react";


import ExperienceModal from "./ExperienceModal";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 20px;
  background-color: black;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const Input = styled.input`
  min-width: 40%;
  height: 40px;
  border-radius: 5px;
  background-color: gray;
  color: white;
  padding-left: 10px;

  &::placeholder {
    color: lightgray;
  }
`;
const Label = styled.label`
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
  color: white;
`;
const Label1 = styled.label`
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
  color: red;
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
  align-self:flex-end;
  `;

const Title = styled.h1`
font-size50px;
margin-bottom:20px;
margin-right:30px;
flex:1;
color:red;
`;

const TopWrapper = styled.div`
  display: flex;
  align-items: space-between;
`;

// const BottomButtonWrapper = styled.div`
//   display: flex;
//   justify-content: space-around;
//   margin: 10px;
// `;

const EditProfile = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <TopWrapper>
      <Title> MY PROFILE</Title>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button>Edit profile</Button>}
      >
        <Container>
          <Modal.Header>
            <Title>Edit Profile</Title>
          </Modal.Header>
          <Modal.Content image>
            <InputWrapper>
              <Label1>FIRST NAME*:</Label1>
              <Input
                placeholder="firstName"
                onChange={(e) =>
                  props.handleChange("firstName", e.target.value)
                }
                value={props.profile.firstName}
              ></Input>
            </InputWrapper>
            <InputWrapper>
              <Label1>LAST NAME*:</Label1>
              <Input
                placeholder="lastName"
                onChange={(e) => props.handleChange("lastName", e.target.value)}
                value={props.profile.lastName}
              ></Input>
            </InputWrapper>
            <InputWrapper>
              <Label1>AGE:</Label1>
              <Input
                placeholder="Age"
                onChange={(e) => props.handleChange("age", e.target.value)}
                value={props.profile.age}
              ></Input>
            </InputWrapper>
            <InputWrapper>
              <Label1>IMAGE:</Label1>
              <input
                
                type="file"
                onChange={(e) => props.onImageChange(e)}
                
              />
            </InputWrapper>
            <ExperienceModal
              handleExperienceChange={props.handleExperienceChange}
              handleNewExpAdd={props.handleNewExpAdd}
              experience={props.experience}
              handleExpRemove={props.handleExpRemove}
            />
          </Modal.Content>
          <Modal.Actions>
          
              <Button
                onClick={() => {
                  const isValid = props.experience.every(
                    (exp) => exp.companyname && exp.startdate && exp.jobtitle
                  );
                  const isValidProfile= props.profile.firstName && props.profile.lastName

                  if (isValid && isValidProfile) {
                    props.handleSave();
                    setOpen(false);
                  } else {
                    alert("Please enter all required fields!!");
                  }
                  
                }}
              >
                Save changes
              </Button>
          </Modal.Actions>
        </Container>
      </Modal>
    </TopWrapper>
  );
};

export default EditProfile;
