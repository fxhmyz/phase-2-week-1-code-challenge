import React from "react";
import { Container, Segment, Header } from 'semantic-ui-react';
import AccountContainer from "./AccountContainer";

function App() {
  return (
    <Container>
      {/* Changed the div to Segment with Semantic UI styling */}
      <Segment raised>
        {/* Changed the inner div to Segment with inverted and violet styling */}
        <Segment inverted color="violet">
          {/* Changed the h2 to Header with Semantic UI styling */}
          <Header as="h2">The Royal Bank of Flatiron</Header>
        </Segment>
        <AccountContainer />
      </Segment>
    </Container>
  );
}

export default App;