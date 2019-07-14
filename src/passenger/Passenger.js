import React from "react";
import Stack from "@kiwicom/orbit-components/lib/Stack";
import InputField from "@kiwicom/orbit-components/lib/InputField";
import InputGroup from "@kiwicom/orbit-components/lib/InputGroup";
import Select from "@kiwicom/orbit-components/lib/Select";
import { GENDERS, MONTHS } from "./constants";

class Passenger extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      nationality: '',
      gender: '',
      day: '',
      month: '',
      year: '',
      errors: {}
    };
    this.validators = {
      firstName: (value) => this.validateName(value, 'First'),
      lastName: (value) => this.validateName(value, 'Last'),
      nationality: (value) => this.valideteRequiredField(value, 'Nationality'),
      gender: (value) => this.valideteRequiredField(value, 'Gender'),
      day: (value) => this.valideteDay(value),
      month: (value) => this.valideteMonth(value),
      year: (value) => this.valideteYear(value),
    }
  }

  validateName = (value, type) => {
    if (!value) {
      return this.createError(type + ' name is required');
    } else if (!/^[a-zA-Z]+$/.test(value)) {
      return this.createError(type + ' name can only contain valid characters [a-Z]');
    }
    return null;
  }

  valideteRequiredField = (value, fieldName) => {
    if (!value || !value.trim()) {
      return this.createError(fieldName + ' is required');
    }
    return null;
  }

  valideteDay = (value) => {
    debugger
    let result = this.valideteRequiredField(value, 'Day');
    if (!result) {
      const dateDif = new Date() - new Date(this.state.year+this.state.month+value).getTime();
      if(!dateDif || Math.abs(new Date(dateDif).getUTCFullYear()-1970) < 18){
        result =  this.createError("Passenger needs to be at least 18 years old")
      }
    }
    return result;
  }

  valideteMonth = (value) => {
    let result = this.valideteRequiredField(value, 'Month');
    if (!result) {
      const dateDif = new Date() - new Date(this.state.year+value+this.state.day).getTime();
      if(!dateDif || Math.abs(new Date(dateDif).getUTCFullYear()-1970) < 18){
        result =  this.createError("Passenger needs to be at least 18 years old")
      }
    }
    return result;
  }

  valideteYear = (value) => {
    let result = this.valideteRequiredField(value, 'Year');
    if (!result) {
      const dateDif = new Date() - new Date(value+this.state.month+this.state.day).getTime();
      if(!dateDif || Math.abs(new Date(dateDif).getUTCFullYear()-1970) < 18){
        result =  this.createError("Passenger needs to be at least 18 years old")
      }
    }
    return result;
  }

  onChange = (event) => {
    const newValue = event.target.value ? event.target.value.trim() : '';
    if (newValue !== this.state[event.target.name]) {
      const newState = {
        [event.target.name]: newValue
      }
      this.setState(newState);
    }
  }

  onBlur = (event) => {
    const name = event.target.name;
    let errors = { ...this.state.errors };
    errors[name] = this.validators[name](event.target.value);
    this.setState({ errors });
  }

  onFocus = (event) => {
    const name = event.target.name;
    let errors = { ...this.state.errors };
    errors[name] = null;
    this.setState({ errors });
  }

  createError = (message) => {
    return <div>{message}</div>;
  }

  render() {
    return (
      <Stack direction="column">
        <InputField label="First name" size="small" name="firstName" error={this.state.errors.firstName}
          value={this.state.firstName} onChange={this.onChange} onBlur={this.onBlur} onFocus={this.onFocus} required />
        <InputField label="Last name" size="small" name="lastName"
          value={this.state.lastName} onChange={this.onChange} onBlur={this.onBlur} onFocus={this.onFocus} required error={this.state.errors.lastName} />
        <InputField label="Nationality" size="small" name="nationality"
          value={this.state.nationality} onChange={this.onChange} onBlur={this.onBlur} onFocus={this.onFocus} required error={this.state.errors.nationality} />
        <Select
          label="Gender" name="gender" placeholder="Choose one"
          options={GENDERS} value={this.state.gender} onChange={this.onChange} onBlur={this.onBlur} onFocus={this.onFocus} required error={this.state.errors.gender}
        />
        <InputGroup
          label="Date of birth"
          flex={["0 0 60px", "1 1 100%", "0 0 90px"]}
          onChange={this.onChange} onBlur={this.onBlur} onFocus={this.onFocus} error={this.state.errors.year || this.state.errors.month || this.state.errors.day}>
          <InputField placeholder="DD" name="day" type="number"
            value={this.state.day} required />
          <Select
            name="month" placeholder="Month"
            options={MONTHS} value={this.state.month} required />
          <InputField placeholder="YYYY" name="year"
            value={this.state.year} required type="number" />
        </InputGroup>
      </Stack>
    );
  }
}

export default Passenger;
