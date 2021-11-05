import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='home'>
            <Link className='home-link' to='/NasaPhoto'>Travel through the cosmos</Link>
        </div>
    )
}

export default Home;
