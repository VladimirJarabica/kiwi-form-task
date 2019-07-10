import React from "react";
import Stack from "@kiwicom/orbit-components/lib/Stack";
import styled from "styled-components";
import InputField from "@kiwicom/orbit-components/lib/InputField";
import InputGroup from "@kiwicom/orbit-components/lib/InputGroup";
import Select from "@kiwicom/orbit-components/lib/Select";

const Container = styled.div`
  max-width: 800px;
  width: 80%;
  margin: 0 auto;
`;

function Passenger() {
  return (
    <Stack direction="column">
      <InputField label="First name" size="small" />
      <InputField label="Last name" size="small" />
      <InputGroup
        label="Date of birth"
        flex={["0 0 60px", "1 1 100%", "0 0 90px"]}
      >
        <InputField placeholder="DD" />
        <Select
          options={[
            { value: "January", label: "January" },
            { value: "February", label: "February" },
            { value: "March", label: "March" }
          ]}
          value={null}
          placeholder="Month"
        />
        <InputField placeholder="YYYY" />
      </InputGroup>
    </Stack>
  );
}

export default Passenger;
