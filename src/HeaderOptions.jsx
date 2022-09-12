import React from 'react';
import './HeaderOptions.css'

const HeaderOptions = ({Icon, text, onClick}) => {
    return (
        <div onClick={onClick} className='headerOption'>
            {Icon && <Icon className="headerOption__icon"/>}
            <h3 className='headerOption__title'>{text}</h3>
        </div>
    );
}

export default HeaderOptions;
