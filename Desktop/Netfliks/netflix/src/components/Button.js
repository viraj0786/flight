import React from 'react';

function Button({name , color , broder}) {
    return (
        <button className={`text-white px-3 py-1 font-semibold m-2  rounded-md bg- ${color} ${broder}`}>{name}</button>
    );
}

export default Button;