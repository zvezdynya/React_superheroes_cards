import React from 'react';
import heroes from './data/heroes.json';
import Superheroes from './components/Superheroes';
import './App.css';

function Card() {
  return (
    <div className="cards">
      {heroes.map((hero, index) => (
        <Superheroes
          key={index}
          url={hero.url}
          name={hero.name}
          universe={hero.universe}
          alterego={hero.alterego}
          occupation={hero.occupation}
          friends={hero.friends}
          superpowers={hero.superpowers}
          info={hero.info} />
      ))}
    </div>
  );
}

export default Card;