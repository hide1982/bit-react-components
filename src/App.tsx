import React from "react";
import styled from "styled-components";

import Button from "./components/Button";
import Icon from "./components/Icon";
import IconButton from "./components/IconButton";
import TextField from "./components/TextField";

const StyledWrapper = styled.div`
  margin: 24px;
`;

const Name = styled.div`
  font-weight: bold;
  margin-bottom: 4px;
`;

const Wrapper: React.FC<{ name: string }> = ({ name, children }) => (
  <StyledWrapper>
    <Name>{name}</Name>
    {children}
  </StyledWrapper>
);

function App() {
  return (
    <div className="App">
      <Wrapper name="Button">
        <Button>button</Button>
      </Wrapper>
      <Wrapper name="Icon">
        <Icon name="search" />
      </Wrapper>
      <Wrapper name="IconButton">
        <IconButton name="close" />
      </Wrapper>
      <Wrapper name="TextField">
        <TextField />
      </Wrapper>
    </div>
  );
}

export default App;
