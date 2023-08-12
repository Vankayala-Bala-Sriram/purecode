import React from "react";
import "../styles/OverviewComponent.css";
import profile from "../images/profile.png";

function OverviewComponent() {
    return (
        <div className="main">
            <div className="overview-grid">
                <div className="overview-grid-item">
                    <form className="login-form">
                        <h4 className="form-name">Sign In to Your Platform</h4>
                        <div className="form-group">
                            <label htmlFor="email">Your Name
                                <input type="email" id="email" name="email" placeholder="name@example.com" />
                            </label><br/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:
                                <input type="password" id="password" name="password" />

                            </label><br/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="remember">
                                <input type="checkbox" id="remember" name="remember" />
                                Remember me
                            </label>
                            <div className="lost-password-container">
                                <a href="/" className="lost-password">Lost password?</a>
                            </div>
                        </div>
                        <button type="submit" className="login-button">LOGIN TO YOUR ACCOUNT</button>
                    </form>
                </div>
                <div className="overview-grid-item">
                    <h4 className="form-name">Reports overview</h4>
                    <p className="amount" >$8836.68</p>
                    <div className="color-bar">
                        <div className="color blue"></div>
                        <div className="color orange"></div>
                        <div className="color red"></div>
                        <div className="color pink"></div>
                        <div className="color black"></div>
                    </div>
                    <span className="headers">
                        <p className="headers-device">Device</p>
                        <p className="headers-amount">Amount</p>
                        <p className="headers-change">% Change</p>
                    </span>
                    <span className="headers-values">
                        <ul className="device-value-1">
                            <li>Gross value</li>
                        </ul>
                        <p className="amount-value">$6,543.55</p>
                        <div className="change-value-1">+6.8</div>
                    </span>
                    <span className="headers-values" style={{border: "none"}}>
                        <ul className="device-value-2">
                            <li>Net volume for sales</li>
                        </ul>
                        <p className="amount-value">$3,654.21</p>
                        <div className="change-value-2">+4.5</div>
                    </span>
                </div>
                <div className="overview-grid-item">
                    <h4 className="form-name">Reports Overview</h4>
                    <div className="profile">
                        <img src={profile} alt="Profile" className="profile-photo" />
                        <div className="profile-details">
                            <div className="profile-info">
                                <h5 className="profile-names">Allen Durkee</h5>
                                <p>email@example.com</p>
                            </div>     
                        </div>
                        <button className="profile-button">Message</button>
                    </div>
                    <div className="profile">
                        <img src={profile} alt="Profile" className="profile-photo" />
                        <div className="profile-details">
                            <div className="profile-info">
                                <h5 className="profile-names">Allen Durkee</h5>
                                <p>email@example.com</p>
                            </div>
                        </div>
                        <button className="profile-button">Message</button>
                    </div>
                    <div className="profile">
                        <img src={profile} alt="Profile" className="profile-photo" />
                        <div className="profile-details">
                            <div className="profile-info">
                                <h5 className="profile-names">Allen Durkee</h5>
                                <p>email@example.com</p>
                            </div>
                        </div>
                        <button className="profile-button">Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OverviewComponent;