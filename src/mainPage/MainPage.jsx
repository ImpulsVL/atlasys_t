import React from 'react';
import './MainPage.scss';
import { useNavigate } from 'react-router-dom';
import SideBar from './sideBar/SideBar';
import Header from './header/header';
import Plate from './plate/Plate';

function MainPage() {
    return (
        <div className="wrapper">
            <div className='main_sidebar'>
                <SideBar />
            </div>

            <div className="main-content">
                <div className="main_header">
                    <Header />
                </div>

                <div className='main_plate'>
                    <Plate />
                </div>
            </div>
        </div>
    );
}

export default MainPage;