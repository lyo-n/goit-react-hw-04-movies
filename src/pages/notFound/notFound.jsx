import React from 'react';
import {Link} from 'react-router-dom';

const notFound = () => {
    return(
        <div>
            <Link to="/">
            <p>Вернуться на главную страницу</p>
            </Link>
             
        </div>
    );
};

export default notFound;