import React from 'react'
import "./Header.css"
import Switch from '@mui/material/Switch';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function Header({ theme, changeTheme }) {


    return (
        <div className={theme ? 'header--dark__mode' : 'header'
        }>
            <div className='header__left'>
                <h4><span>C</span>ontacts App</h4>
            </div>
            <div className='header__right'>
                <WbSunnyIcon style={{ color: theme ? 'white' : '#F1C131' }} />
                <Switch value={theme} color="default" onClick={() => changeTheme(true)} />
                <DarkModeIcon style={{ color: theme ? '#9C27B0' : 'black' }} />
            </div>
        </div>
    )
}

export default Header