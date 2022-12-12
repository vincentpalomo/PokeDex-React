import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const PokeDex = () => {
  const APIURL = 'https://pokeapi.co/api/v2/pokemon';

  const [pokemon, setPokemon] = useState('');
  const [find, setFind] = useState('150');
  const [image, setImage] = useState('');
  const [type, setType] = useState('');
  const [order, setOrder] = useState('');
  const [name, setName] = useState('');
  const [health, setHealth] = useState('');
  const [attack, setAttack] = useState('');
  const [defense, setDefense] = useState('');

  useEffect(() => {
    async function getData() {
      let res = await axios.get(`${APIURL}/${find}`);
      const pokemon = res.data;
      setImage(pokemon.sprites.other.dream_world.front_default);
      setType(pokemon.types[0].type.name);
      setOrder(pokemon.id);
      setName(pokemon.name);
      setHealth(pokemon.stats[0].base_stat);
      setAttack(pokemon.stats[1].base_stat);
      setDefense(pokemon.stats[2].base_stat);
    }
    getData();
  }, [find]);

  const formData = (e) => {
    e.preventDefault();
    setPokemon(e.target.value);
  };

  const search = () => {
    if (pokemon !== setFind(pokemon));
    setPokemon('');
  };

  return (
    <React.Fragment>
      <Wrapper>
        <Card>
          <div className='order'>PokeDex ID: {order}</div>
          <Image src={`${image}`} alt={`${name}`} />
          <div className='pokemon'>Name: {name.toUpperCase()}</div>
          <div className='stats'>Health: {health}</div>
          <div className='stats'>Attack: {attack}</div>
          <div className='stats'>Defense: {defense}</div>
          <div className='type'>Type: {type}</div>
          <input type='text' onChange={formData} value={pokemon} />
          <button onClick={search}>Search</button>
        </Card>
      </Wrapper>
    </React.Fragment>
  );
};

export default PokeDex;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: cornflowerblue;
  overflow: hidden;
  font-weight: bolder;
  font-family: 'Courier New', Courier, monospace;
`;

const Card = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  height: 400px;
  max-width: 100%;
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
  border-radius: 18px;
  background-color: papayawhip;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: center;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
  align-items: center;
`;
