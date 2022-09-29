import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className='header'>
             <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>
            
            <h2>OUR-ACTIVEITY-CLUB</h2>
        </div>
    );
};

export default Header;