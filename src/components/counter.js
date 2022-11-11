import React from 'react';
import '../styles/counter.css';

function Counter({ numClics }) {
    return (
        <div className='counter'>
            {numClics}
        </div>
    );
}

export default Counter;