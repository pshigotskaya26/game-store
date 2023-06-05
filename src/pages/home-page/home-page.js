import React from 'react';
import {GameItem} from '../../components/game-item';
import {GAMES} from '../../data/data';
import './home-page.css';

export const HomePage = () => {
    return (
        <div className='home-page'>
            {GAMES.map(game => <GameItem game={game} key={game.id} />)}
        </div>
    );
};
