import React from "react";

const Card =({name,email,id})=> {
    return(
        <div className='dib pa2 br3 tc ma2 bw db-1 grow bg-light-blue' >
            <img 
             className="ma2"
             alt='robots' 
             src={`https://robohash.org/ ${id} test?200x200`}
            />  
            <h5>{name}</h5>
            <h6>{email}</h6>
        </div>         
    );
}

export default Card;