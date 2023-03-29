import React from 'react';
import styles from '../app/App.css';
function Cards({pokemonList}) {
    return (
        <>
           <div className='m-0.5 w-72 h-80 bg-red-800 rounded-md'>
            <div className='flex m-0.5 place-content-between'>
                <div className='px-1.5'>{pokemonList.name}</div>
                <div className='px-1.5' >{pokemonList.id}</div>
            </div>
            <div className='flex m-0.5 place-content-center'>
               <img src={pokemonList.sprites.front_default} alt={pokemonList.name}></img>
            </div>
            <div className='flex m-0.5 place-content-evenly'>
                <p>weight:{pokemonList.weight}</p>
                <p>height:{pokemonList.height}</p>
            </div>
            <div className='flex m-0.5 place-content-evenly'>
                {pokemonList.abilities.map((ability)=>(
                    <p>{ability.ability.name}</p>
                ))}
            </div>
            <div className='flex m-0.5 place-content-center'>
                {pokemonList.stats.map((stat)=>(
                    <p>{stat.stat.name}</p>
                ))}
            </div>
            </div> 
        </>
    );
}

export default Cards;