import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className=' nfMain'>
            <section class="notFound">
        <div class="img">
        <img src="https://assets.codepen.io/5647096/backToTheHomepage.png" alt="Back to the Homepage"/>
        <img src="https://assets.codepen.io/5647096/Delorean.png" alt="El Delorean, El Doc y Marti McFly"/>
        </div>
        <div class="text">
        <h1>404</h1>
        <h2>PAGE NOT FOUND</h2>
        <h3>BACK TO HOME?</h3>
        <Link className='btn btn-primary px-5' to={'/'}>YES Please</Link>
        </div>
    </section>
        </div>
    );
};

export default NotFound;