import React from 'react';
import styles from '../app/App.css';


function Cards({pokemonList}) {
    return (
        <>
           <div className='m-0.5 w-64 h-80 0 bg-poke-yellow rounded-md'>
            <div className='h-8 rounded-t-md flex  items-start place-content-between  px-2 tracking-widest bg-poke-yellow-d text-black'>
                <div className='px-1.5'>{pokemonList.name}</div>
                <div className='px-1.5' >{pokemonList.id}</div>
            </div>
            <div className='flex m-0.5 place-content-center bg-gray-100 mx-10 rounded-md my-4'>
               <img className='w-28 z-10' src={pokemonList.sprites.front_default} alt={pokemonList.name}></img>
            </div>
            <div className='h-8 rounded-md flex tracking-wider items-start place-content-evenly mx-4  px-2 bg-poke-blue-l text-poke-blue-d '>
                <p>weight:{pokemonList.weight}</p>
                <p>height:{pokemonList.height}</p>
            </div>
            <div className='flex m-0.5 tracking-widest place-content-evenly'>
                {pokemonList.abilities.map((ability)=>(
                    <p>{ability.ability.name}</p>
                ))}
            </div>
            <div className='grid grid-cols-2 justify-items-center mt-4  text-xs m-0.5 place-content-center'>
                {pokemonList.stats.map((stat)=>(
                    <p>{stat.stat.name}:{stat.base_stat}</p>
                ))}
            </div>
            </div> 
        </>
    );
}

export default Cards;