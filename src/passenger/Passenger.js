import React from "react";
import Stack from "@kiwicom/orbit-components/lib/Stack";
import InputField from "@kiwicom/orbit-components/lib/InputField";
import InputGroup from "@kiwicom/orbit-components/lib/InputGroup";
import Select from "@kiwicom/orbit-components/lib/Select";
import { GENDERS, MONTHS } from "./constants";

class Passenger extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      nationality: '',
      gender: '',
      day: '',
      month: '',
      year: ''
    };
  }

  onChange = (event) => {
    let newState = {...this.state}
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  render(){
    return (
      <Stack direction="column">
        <InputField label="First name" size="small" name="firstName" value={this.state.firstName} onChange={this.onChange} />
        <InputField label="Last name" size="small" name="lastName" value={this.state.lastName} onChange={this.onChange} />
        <InputField label="Nationality" size="small" name="nationality" value={this.state.nationality} onChange={this.onChange} />
          <Select
            label="Gender"
            options={GENDERS}
            name="gender"
            value={this.state.gender}
            placeholder="Choose one"
            onChange={this.onChange}
          />    
        <InputGroup
          onChange={this.onChange}
          label="Date of birth"
          flex={["0 0 60px", "1 1 100%", "0 0 90px"]}
        >
          <InputField placeholder="DD" name="day" value={this.state.day} onChange={this.onChange}/>
          <Select
            options={MONTHS}
            value={this.state.month}
            name="month"
            placeholder="Month"
          />
          <InputField placeholder="YYYY" name="year" value={this.state.year} onChange={this.onChange} />
        </InputGroup>
      </Stack>
    );
  }
}

export default Passenger;
