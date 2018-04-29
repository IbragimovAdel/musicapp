import React from 'react';
import './style.css';

const Menu = () => {
    return(
        <div className='menu'>
            <div className='menu_item'><a href='#'>На главную</a></div>
            <div className='menu_item'><a>ССЫЛКА#2</a></div>
            <div className='menu_item'><a>ССЛЫКА#3</a></div>
            <div className='searchIcon'><a>Иконка поиска</a></div>
        </div>
    )
}

export default Menu;