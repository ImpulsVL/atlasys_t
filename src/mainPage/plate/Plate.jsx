import React from 'react';
import './Plate.scss';
import { useNavigate } from 'react-router-dom';
import AvatarPng from '../plate/photo/avatar.png'
import PenSvg from '../plate/icons/pen.svg'
import CheckSvg from '../plate/icons/check.svg'

function Plate() {
    return (
        <div className="buy-courses-content">

            <div className="buy-courses-notifications">
                <div className="buy-courses-body desktop2">
                    <div className="profile-tabs">
                        <div className="tab active">Edit Profile</div>
                        <div className="tab">Preferences</div>
                        <div className="tab">Security</div>
                    </div>

                    <div className="profile-form">
                        <div className="profile-avatar">
                            <img className='img_avatar' src={AvatarPng} alt="Avatar" />
                            <button className="edit-avatar-btn"><img className='pen_svg' src={PenSvg} /></button>
                        </div>

                        <form className="profile-details">
                            <div className="form-group">
                                <label>Your Name</label>
                                <input type="text" placeholder="Charlene Reed" />
                            </div>
                            <div className="form-group">
                                <label>User Name</label>
                                <input type="text" placeholder="Charlene Reed" />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" placeholder="charlenereed@gmail.com" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" placeholder="**********" />
                            </div>
                            <div className="form-group">
                                <label>Date of Birth</label>
                                <div className="input-with-icon">
                                    <input className='spec' type="text" placeholder="25 January 1990" />
                                    <img src={CheckSvg} alt="Check" className="check-icon" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Present Address</label>
                                <input type="text" placeholder="San Jose, California, USA" />
                            </div>
                            <div className="form-group">
                                <label>Permanent Address</label>
                                <input type="text" placeholder="San Jose, California, USA" />
                            </div>
                            <div className="form-group">
                                <label>City</label>
                                <input type="text" placeholder="San Jose" />
                            </div>
                            <div className="form-group">
                                <label>Postal Code</label>
                                <input type="text" placeholder="45962" />
                            </div>
                            <div className="form-group">
                                <label>Country</label>
                                <input type="text" placeholder="USA" />
                            </div>


                            <button type="submit" className="save-btn">Save</button>

                        </form>
                    </div>
                </div>

                <div className="buy-courses-body mobile2">
                    <div className="profile-tabs">
                        <div className="tab active">Edit Profile</div>
                        <div className="tab">Preferences</div>
                        <div className="tab">Security</div>
                    </div>

                    <div className="profile-form">
                        <div className="profile-avatar">
                            <img className='img_avatar' src={AvatarPng} alt="Avatar" />
                            <button className="edit-avatar-btn"><img src={PenSvg} /></button>
                        </div>

                        <form className="profile-details">
                            <div className="form-group">
                                <label>Your Name</label>
                                <input type="text" placeholder="Charlene Reed" />
                            </div>
                            <div className="form-group">
                                <label>User Name</label>
                                <input type="text" placeholder="Charlene Reed" />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" placeholder="charlenereed@gmail.com" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" placeholder="**********" />
                            </div>
                            <div className="form-group">
                                <label>Date of Birth</label>
                                <div className="input-with-icon">
                                    <input className='spec' type="text" placeholder="25 January 1990" />
                                    <img src={CheckSvg} alt="Check" className="check-icon" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Present Address</label>
                                <input type="text" placeholder="San Jose, California, USA" />
                            </div>
                            <div className="form-group">
                                <label>Permanent Address</label>
                                <input type="text" placeholder="San Jose, California, USA" />
                            </div>
                            <div className="form-group">
                                <label>City</label>
                                <input type="text" placeholder="San Jose" />
                            </div>
                            <div className="form-group">
                                <label>Postal Code</label>
                                <input type="text" placeholder="45962" />
                            </div>
                            <div className="form-group">
                                <label>Country</label>
                                <input type="text" placeholder="USA" />
                            </div>


                            <button type="submit" className="save-btn">Save</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Plate;