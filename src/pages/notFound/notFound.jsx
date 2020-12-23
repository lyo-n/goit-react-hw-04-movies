import React from 'react';
import {Link} from 'react-router-dom';

const notFound = () => {
    return(
        <div>
            <Link to="/">
            <img src={require('../../img/error.jpg')}/>
            </Link>
             {/* <p>Вернитесь на главную страницу</p> */}
        </div>
    );
};

export default notFound;