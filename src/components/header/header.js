import React from 'react';
import { Link } from 'react-router-dom';
import {CartBlock} from '../cart-block';

import './header.css';

export const Header = () => {
    return (
        <header className='header'>
            <div className='wrapper'>
                <Link to='/' className='header__store-title'>Game Store</Link>
            </div>
            <div className='wrapper header__cart-btn-wrapper'>
                <CartBlock />
            </div>
        </header>
    );
};
