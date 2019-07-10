import React from "react"
import Passenger from "./Passenger";
import styled from "styled-components";
import Stack from "@kiwicom/orbit-components/lib/Stack";
import Illustration from "@kiwicom/orbit-components/lib/Illustration";
import Header from "./Header";
import Footer from "./Footer";

const Container = styled.div`
  max-width: 800px;
  width: 80%;
  margin: 0 auto;
`;

class PassengerForm extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <Stack direction="column">
          <Passenger />
        </Stack>
        <Footer />
        <Illustration size="medium" name="Improve" />
      </Container>
    );
  }
}

export default PassengerForm;