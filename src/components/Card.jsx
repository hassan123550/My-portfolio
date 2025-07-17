import React from 'react';

const Card = (props) => {


    return (
        // <div>
        //     <h1>Your Name is: {props.name}</h1>
        // </div>

        <div className='mr-12 bg-white text-black inline-block p-6 text-center rounded'>
            <img className='h-32 w-32 rounded-full mb-3' src={props.profile} alt="" />
            <h1 className='text-2xl font-semibold mb-4'>{props.user}</h1>
            <h2>{props.city}</h2>
            <h2>{props.age}</h2>
            <button className='bg-emerald-700 text-white px-4 py-2 rounded font-medium mt-5'>Add Friends</button>
        </div>
    )
}

export default Card;