import React from 'react';
import { createRoot } from 'react-dom/client';
import PokeDex from './components/PokeDex';

const Home = () => {
  return (
    <div className='root'>
      <PokeDex />
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Home />);
