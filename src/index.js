import React from 'react';
import { createRoot } from 'react-dom/client';
import styled from 'styled-components';
import PokeDex from './components/PokeDex';

const Home = () => {
  return (
    <Root className='root'>
      <PokeDex />
    </Root>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Home />);

const Root = styled.div`
  background-color: cornflowerblue;
`;
