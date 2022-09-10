import React ,{useState}from "react";
import styled from "styled-components";


const Container = styled.div`
`;
const InputWrapper = styled.div`
  width: 80%;

  display: flex;

flex-wrap:wrap;

`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  flex-wrap:wrap;
`;
const Title =styled.h1`
flex:2;
font-size:25px;

color:red;
margin: 10px 10px 10px 10px;
padding: 10px 10px;
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

const Label = styled.label`
  min-width: 40%;
  margin: 10px 0px 5px;
  padding: 10px;
  color: white;
`;
const Label1 = styled.label`
  min-width: 40%;
  margin: 10px 0px 5px;
  padding: 10px;
  color: red;
`;
const Input = styled.input`
  min-width: 40%;
  margin: 10px 0px;

  height: 40px;
  border-radius: 5px;
  background-color: gray;
  color: white;
  padding-left: 10px;

  &::placeholder {
    color: lightgray;
  }
`;
const Buttonadd=styled.button`
height: 40px;
border-radius: 5px;
background-color: red;
color: white;
border: none;
font-size: 18px;
font-weight: 500;
cursor: pointer;
align-self:center;
margin-top:10px;
`;
const Inputcheckbox=styled.input`
margin-left:10px;
`;

const SingleExperience = (props) => {
    // const [checked, setChecked]=useState(false)

    // const handleCheckboxchange = (value) => {
    //     setChecked(!checked);
    //     // value=checked;

    //   };
    const allRequiredFieldsSelected =()=>{

    }

    const isValidEndDate=(enddate)=>{
        if(props.singleExperience.startdate){

            return  new Date(enddate) > new Date(props.singleExperience.startdate) 
        }
        else{
            return true;
        }
        // console.log(new Date(endDate) > new Date(props.singleExperience.startdate) )
    }
    const isValidStartDate=(startdate)=>{
        console.log(props.singleExperience.enddate)
        console.log(startdate)
        if( props.singleExperience.enddate){

            return  new Date(props.singleExperience.enddate) > new Date(startdate)
        }
        else{
            return true;
        }

    }
    const handleEndDateDisabled=(value)=>{
        console.log("value",value)
        if(value){
            return true;
        }
        
    }
 

    return(

  <Container>
    <RowWrapper>
      <Title>Experience :{props.index + 1}</Title>
      
        <Button onClick={() => props.handleExpRemove(props.index)}>
          Remove
        </Button>
   
    </RowWrapper>

    <InputWrapper>
      <Label1>COMPANY NAME *</Label1>
      <Input
        name="companyname"
        type="text"
        placeholder="Company Name"
        // id="companylogo"
        value={props.singleExperience.companyname}
        onChange={(e) => props.handleServiceChange(e.target.value, e, props.index)}
        required
      />

      <Label1>COMPANY DESC</Label1>
      <Input
        name="companylogo"
        type="text"
        placeholder="Company Desc"
        // id="companylogo"
        value={props.singleExperience.companylogo}
        onChange={(e) => props.handleServiceChange(e.target.value, e, props.index)}
        required
      />
      

      <Label1>START DATE *</Label1>
      <Input
        name="startdate"
        type="date"
        placeholder="Start Date"
        
        value={props.singleExperience.startdate}
        onChange={(e) => {
            if(isValidStartDate(e.target.value)){
                props.handleServiceChange(e.target.value, e, props.index)
            }
            else{
                alert("End Date should be greater than or equal to start date")
                e.target.value=""
            }
        }}
        required
      />
      {!props.singleExperience.current &&
      (
      <><Label1>END DATE </Label1>
      <Input
        name="enddate"
        type="date"
        placeholder="End Date"
        
        value={props.singleExperience.enddate}
        
        onChange={(e) => {
            if(isValidEndDate( e.target.value)){

                props.handleServiceChange(e.target.value, e, props.index);
            }
            else{
                alert("End Date should be greater than or equal to start date")
                e.target.value=""           
                
            }
          
        }}
        required
      />
      </>)}

      <Inputcheckbox
        name="current"
        type="checkbox"


        checked={props.singleExperience.current}
        onClick={(e) =>{
        
        props.handleServiceChange(e.target.checked, e, props.index)}
        }


      />
    </InputWrapper>
    <InputWrapper>
      <Label1>JOB TITLE *</Label1>
      <Input
        name="jobtitle"
        type="text"
        placeholder="Job Title"

        value={props.singleExperience.jobtitle}
        onChange={(e) => props.handleServiceChange(e.target.value, e, props.index)}
        required
      />
      <Label1>JOB DESCRIPTION</Label1>
      <Input
        name="jobdesc"
        type="text"
        placeholder="Job Desc"

        value={props.singleExperience.jobdesc}
        onChange={(e) => props.handleServiceChange(e.target.value, e, props.index)}
        required
      />
    </InputWrapper>
    
    
  </Container>

)
};

export default SingleExperience;
