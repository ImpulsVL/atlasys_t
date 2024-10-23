import React from 'react';
import './header.scss';
import { useNavigate } from 'react-router-dom';
import SettingsSvg from '../header/icons/settings.svg';
import DinSvg from '../header/icons/dindin.svg';
import SearchSvg from '../header/icons/search.svg';
import MenuSvg from '../header/icons/menu.svg';
import PhotoPng from '../header/photo/photo.png';

function Header() {
    return (
        <header className="header">
            <h1 className="header-title desktop">Setting</h1>
            <div className="header-right desktop">
                <div className="search-container">
                    <img src={SearchSvg} alt="Search Icon" className="search-icon" />
                    <input type="text" className="search-input" placeholder="Search for something" />
                </div>
                <div className="icon-container">
                    <div className='icon_background'>
                        <img src={SettingsSvg} alt="Icon 1" className="icon" />
                    </div>
                    <div className='icon_background'>
                        <img src={DinSvg} alt="Icon 2" className="icon" />
                    </div>
                </div>
                <img src={PhotoPng} alt="User" className="user-photo" />
            </div>
            <div className="header-right mobile">
                <div className="mobile-header">
                    <img src={MenuSvg} alt="Menu Icon" className="menu-icon" />
                    <h1 className="header-title">Setting</h1>
                    <img src={PhotoPng} alt="User" className="user-photo" />
                </div>
                <div className="search-container">
                    <img src={SearchSvg} alt="Search Icon" className="search-icon" />
                    <input type="text" className="search-input" placeholder="Search for something" />
                </div>
            </div>
        </header>
    );
}

export default Header;