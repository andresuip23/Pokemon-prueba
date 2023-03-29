import React from 'react';

function Header() {
    const options = [ 'Home','Pokemons', 'About Us', 'Contact Us' ];
    return ( 
        <div className='flex bg-poke-yellow-d mb-8'>
            <div>
                <img className='w-48' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png' alt='Logo'></img>
            </div>
            <div className='flex'>
                {
                    options.map((option)=>( <button className='text-center  mx-5 p-5  '>{option}</button>)
                    )
                }
            </div>
        </div>
        
     );
}

export default Header;