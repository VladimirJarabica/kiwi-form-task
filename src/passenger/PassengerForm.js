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
  constructor(props) {
    super(props);
    this.state = {
      passengers: [{}],
    }
  }

  createPassengers = () => {
    let passengers = [];
    for (let i = 0; i < this.state.passengers.length; i++) {
      passengers.push(<Passenger key={i} />)
    }
    return passengers;
  }

  canAddPassanger = () => {
    return this.state.passengers.length >= 9;
  }

  addPassenger = () => {
    this.setState({passengers: this.state.passengers.concat({})});
  }

  render() {
    return (
      <Container>
        <Header />-
        <Stack direction="column">
          {this.createPassengers()}
        </Stack>
        <button onClick={this.addPassenger} disabled={this.canAddPassanger()}>Add new passenger</button>
        <Illustration size="medium" name="Improve" />
      </Container>
    );
  }
}

export default PassengerForm;