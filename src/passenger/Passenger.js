import React from "react";
import Stack from "@kiwicom/orbit-components/lib/Stack";
import InputField from "@kiwicom/orbit-components/lib/InputField";
import InputGroup from "@kiwicom/orbit-components/lib/InputGroup";
import Select from "@kiwicom/orbit-components/lib/Select";
import { GENDERS, MONTHS } from "./constants";

function Passenger() {
  return (
    <Stack direction="column">
      <InputField label="First name" size="small" />
      <InputField label="Last name" size="small" />
      <InputField label="Nationality" size="small" />
      <InputGroup label="Gender">
        <Select
          options={GENDERS}
          value={null}
          placeholder="Choose one"
        />
      </InputGroup>
      <InputGroup
        label="Date of birth"
        flex={["0 0 60px", "1 1 100%", "0 0 90px"]}
      >
        <InputField placeholder="DD" />
        <Select
          options={MONTHS}
          value={null}
          placeholder="Month"
        />
        <InputField placeholder="YYYY" />
      </InputGroup>
    </Stack>
  );
}

export default Passenger;
