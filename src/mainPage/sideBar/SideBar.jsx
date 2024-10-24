import React, { useState } from 'react';
import './SideBar.scss';

import HomeSvg from '../sideBar/icons/home.svg'
import AccountSvg from '../sideBar/icons/account.svg'
import ServicesSvg from '../sideBar/icons/services.svg'
import TransactionSvg from '../sideBar/icons/transaction.svg'
import MyPrevilegesSvg from '../sideBar/icons/myPrevileges.svg'
import LoansSvg from '../sideBar/icons/loans.svg'
import CreditSvg from '../sideBar/icons/creditcards.svg'
import InvestmentsSvg from '../sideBar/icons/investments.svg'
import SettingSvg from '../sideBar/icons/setting.svg'
import SpecialSvg from '../sideBar/icons/special.svg'

import { useNavigate } from 'react-router-dom';

function SideBar() {

    return (
        <div>
            <div className={`option_sidebar_wrapper`}>
                <button className="close-sidebar">✖</button>

                <div className="sidebar-item_main">
                    <div className="sidebar-content">
                        <img className="img_pavlov2" src={SpecialSvg}></img>
                        <span className="sidebar-text">BankDash.</span>
                    </div>
                </div>

                <div className="sidebar-items">
                    <div className="sidebar-item">
                        <a href="#">
                            <div className="sidebar-content">
                                <div className="sidebar-icon">
                                    <img className="img_pavlov" src={HomeSvg}></img>
                                </div>
                                <span className="sidebar-text">Dashboard</span>
                            </div>
                        </a>
                    </div>
                    <div className="sidebar-item">
                        <a href="#">
                            <div className="sidebar-content">
                                <div className="sidebar-icon">
                                    <img className="img_pavlov" src={TransactionSvg}></img>
                                </div>
                                <span className="sidebar-text">Transactions</span>
                            </div>
                        </a>
                    </div>
                    <div className="sidebar-item">
                        <a href="#">
                            <div className="sidebar-content">
                                <div className="sidebar-icon">
                                    <img className="img_pavlov" src={AccountSvg}></img>
                                </div>
                                <span className="sidebar-text">Accounts</span>
                            </div>
                        </a>
                    </div>
                    <div className="sidebar-item">
                        <a href="#">
                            <div className="sidebar-content">
                                <div className="sidebar-icon">
                                    <img className="img_pavlov" src={InvestmentsSvg}></img>
                                </div>
                                <span className="sidebar-text">Investments</span>
                            </div>
                        </a>
                    </div>
                    <div className="sidebar-item">
                        <a href="#">
                            <div className="sidebar-content">
                                <div className="sidebar-icon">
                                    <img className="img_pavlov3" src={CreditSvg}></img>
                                </div>
                                <span className="sidebar-text">Credit Cards</span>
                            </div>
                        </a>
                    </div>
                    <div className="sidebar-item">
                        <a href="#">
                            <div className="sidebar-content">
                                <div className="sidebar-icon">
                                    <img className="img_pavlov" src={LoansSvg}></img>
                                </div>
                                <span className="sidebar-text">Loans</span>
                            </div>
                        </a>
                    </div>
                    <div className="sidebar-item">
                        <a href="#">
                            <div className="sidebar-content">
                                <div className="sidebar-icon">
                                    <img className="img_pavlov" src={ServicesSvg}></img>
                                </div>
                                <span className="sidebar-text">Services</span>
                            </div>
                        </a>
                    </div>
                    <div className="sidebar-item">
                        <a href="#">
                            <div className="sidebar-content">
                                <div className="sidebar-icon">
                                    <img className="img_pavlov" src={MyPrevilegesSvg}></img>
                                </div>
                                <span className="sidebar-text">My Privileges</span>
                            </div>
                        </a>
                    </div>
                    <div className="sidebar-item last-item">
                        <a href="#">
                            <div className="sidebar-content">
                                <div className="sidebar-icon">
                                    <img className="img_pavlov" src={SettingSvg}></img>
                                </div>
                                <span className="sidebar-text">Setting</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBar;