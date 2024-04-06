import React, { useState } from 'react';
import styled from 'styled-components';
import { MainLayout } from './styles/Layouts';
import Orb from './components/Orb/Orb';
import Navigation from './components/Navigation/Navigation';

function App() {
  const [active, setActive] = useState(1);

  return (
    <AppStyled>
      <Orb />
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-color: #f5f5f5; /* Set a background color for the app */
  position: relative;
`;

export default App;
