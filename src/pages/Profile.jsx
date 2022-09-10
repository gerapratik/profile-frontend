import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Img from "./image.jpeg";
import EditProfile from "../Components/EditProfile";

import { getUserProfile, saveUserProfile } from "../api/profileApi";
import { getCookie } from "../utils/cookie";
import defaultImage from "./default.png"
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Wrapper = styled.div`
  width: 50%;
  padding: 20px;
  background-color: black;
  display: flex;
  flex-direction: column;
`;
const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const Left = styled.div`
  width: 30%;
  border-color: #92a8d1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ImageContainer = styled.div`
  width: 100%;
`;
const Right = styled.div`
  width: 70%;
`;
const ModalWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: row-start;
  max-height: 50vh;
  overflow-y: scroll;
`;

const Label = styled.label`
  min-width: 40%;
  margin: 4px 0px 5px;
  padding: 4px;
  color: white;
`;
const Label1 = styled.label`
  min-width: 40%;
  margin: 4px 0px 5px;
  padding: 4px;
  color: red;
`;
const DateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const ExperienceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Wrapper2 = styled.div`
  display: flex;

  flex-wrap: wrap;

  border-style: outset;
`;
const JobWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: blue;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Title= styled.h1`
font-size:20px;
margin-bottom:20px;
margin-right:30px;
flex:1;
color:red;
align-self:center;
`;

const CompanyInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Profile = () => {
  const [profile, setprofile] = useState({
    firstName: "",
    lastName: "",
    age: "",
    image: "",
  });
  const [experience, setExperience] = useState([
    {
      companyname: "",
      companylogo: "",
      current: false,
      startdate: "",
      enddate: "",
      jobtitle: "",
      jobdesc: "",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");

  const [userImage,setUserImage]=useState(null)
  const handleExperienceChange = (index, fieldName, value) => {
    const newExperience = [...experience];
    newExperience[index][fieldName] = value;
    setExperience(newExperience);
  };

  const handleChange = (fieldName, value) => {
    const newProfile = { ...profile };
    newProfile[fieldName] = value;
    setprofile(newProfile);
  };
  const handleNewExpAdd = () => {
    setExperience([
      ...experience,
      {
        companyname: "",
        companylogo: "",
        current: false,
        startdate: "",
        enddate: "",
        jobtitle: "",
        jobdesc: "",
      },
    ]);
  };

  const handleSave = () => {
    const requestBody = {
      ...profile,
      experience,
      _id: id,
    };
    saveUserProfile(requestBody)
      .then(() => {})
      .catch((err) => {});
  };

  const handleExpRemove = (index) => {
    const list = [...experience];
    list.splice(index, 1);
    setExperience(list);
  };
  const onImageChange=(event)=>{
    const newProfile = { ...profile };

    const fileObject= event.target.files[0];
    
    
    setprofile(newProfile);
    setUserImage(fileObject)

  }

  useEffect(() => {
    const email = getCookie("email");
    if (email) {
      setLoading(true);
      getUserProfile(email).then((result) => {
        const {
          firstName,
          lastName,
          age,
          email,
          image,
          experience,
          _id,
        } = result;
        const convertedImage=image.toString("base64")
        setprofile({
          firstName,
          lastName,
          age,
          email,
          image:convertedImage,
        });
        setExperience(experience);
        setId(_id);
        setLoading(false);
        console.log(convertedImage)
      });
    }
  }, []);

  console.log("profile", profile);
  console.log("experience", experience);
  return (
    <Container>
      {loading ? (
        <div>Loading..!</div>
      ) : (
        <Wrapper>
          <TopWrapper>
            <Left>
              { userImage ?<ImageContainer>
                <Image src={URL.createObjectURL(userImage)} size="small" />
              </ImageContainer>:
              <ImageContainer>
              <Image src={defaultImage} size="small" />
            </ImageContainer>}
            </Left>
            <Right>
              <EditProfile
                handleChange={handleChange}
                handleExperienceChange={handleExperienceChange}
                handleNewExpAdd={handleNewExpAdd}
                experience={experience}
                handleExpRemove={handleExpRemove}
                profile={profile}
                handleSave={handleSave}
                onImageChange={onImageChange}
                userImage={userImage}
                
              />

             
              <InputWrapper>
                <Label1>FIRST NAME:</Label1>
                <Label>{profile.firstName}</Label>

                <Label1>LAST NAME</Label1>
                <Label>{profile.lastName}</Label>

                <Label1>AGE</Label1>
                <Label>{profile.age}</Label>

              </InputWrapper>
            </Right>
          </TopWrapper>
          <Form>
            
            {experience &&
              experience.map((singleExperience, index) => (
                  <>
                  <Title> EXPERIENCE :{index+1}</Title>
                <Wrapper2>
                  
                  {singleExperience.companyname && (
                    <>
                      <Label1>COMPANY NAME</Label1>
                      <Label>{singleExperience.companyname}</Label>
                    </>
                  )}

                  {singleExperience.companylogo && (
                    <>
                      <Label1>COMPANY LOGO</Label1>
                      <Label>{singleExperience.companylogo}</Label>
                    </>
                  )}

                  {singleExperience.startdate && (
                    <>
                      <Label1>START DATE</Label1>
                      <Label>{singleExperience.startdate}</Label>
                    </>
                  )}
                  
                  {singleExperience.enddate && (
                    <>
                      <Label1>END DATE</Label1>
                      <Label>{singleExperience.enddate}</Label>
                    </>
                  )}
                 


                  {singleExperience.jobtitle && (
                    <>
                      <Label1>JOB TITLE</Label1>
                      <Label>{singleExperience.jobtitle}</Label>
                    </>
                  )}
                  {singleExperience.jobdesc && (
                    <>
                      <Label1>JOB DESC</Label1>
                      <Label>{singleExperience.jobdesc}</Label>
                    </>
                  )}
                </Wrapper2>
                </>
              ))}
          </Form>

        </Wrapper>
      )}
    </Container>
  );
};

export default Profile;
