import React from 'react';

const Link2 = ({route}) => {
    return (
        <div>
            <li className='px-5' key={route.id}> {route.name} </li>
        </div>
    );
};

export default Link2;