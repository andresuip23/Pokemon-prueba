import React from 'react';
import styles from '../app/App.css';


function CardsList({children}) {
    return (
        <div className='container'>
        <div className='content'>
          {children}
        </div>
      </div>
    );
}

export default CardsList;