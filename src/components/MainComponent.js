import React from "react";
import "../styles/Main.css";
import image from '../images/purecode.jpg';
import profile_photo from "../images/profile-photo.png";

function Main(){

    return(
        <div className="main">
            <div className="main-content">
                <div className="path">
                    <p className="card-name">Cards</p>
                    <p className="card-path">
                        <a href="/">T-Wind / </a>
                        <a href="/">UI kit / </a>

                        <a href="/" className="card-path-active">Cards</a>
                    </p>
                </div>
                <span>
                    <button className="create-new-btn">CREATE NEW</button>
                </span>
            </div>

            <div className="grid-container">
                <div className="item1">
                    <div className="more-options">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                    <div className="profile-photo">
                        <img src={profile_photo} alt="Profile" className="profile-image" />
                    </div>
                    <div className="item1-content">
                        <h3 className="user-name">Bonnie Green</h3>
                        <h5 className="designation">Frontend Designer</h5>
                        <p className="description">This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like</p>
                        <span className="profile-btns">
                            <button className="btn1">ADD FRIEND</button>
                            <button className="btn2">MESSAGE</button>
                        </span>
                    </div>
                </div>
                <div className="item2"><h6 className="title">Popular admin template you can use for your businsess</h6><p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod totam, eaque dolore doloremque cupiditate quasi cumque culpa</p><br></br><button className="read-more-btn">READ MORE  &ensp; &#8594;</button></div>
                <div className="item3"></div>
                <div className="item4"></div>
                <div className="item5"><h6 className="title">Popular admin template you can use for your businsess</h6><p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod totam, eaque dolore doloremque cupiditate quasi cumque culpa</p></div>
                <div className="item6"><h6 className="title">Popular admin template you can use for your businsess</h6><p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod totam, eaque dolore doloremque cupiditate quasi cumque culpa</p></div>
                <div className="item7"><h6 className="title">Popular admin template you can use for your businsess</h6><p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod totam, eaque dolore doloremque cupiditate quasi cumque culpa</p></div>

            </div>
            
            <div className="Grid-container-2">
                <div className="item8">
                    <div className="item-content">
                        <img src={image} alt="Card" className="item-image" />
                        <div>
                            <h6 className="title">Popular admin template you can use for your business</h6>
                            <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod totam, eaque dolore doloremque cupiditate quasi cumque culpa</p>
                        </div>
                    </div>
                </div>
                
                <div className="item8">
                    <div className="item-content">
                        <img src={image} alt="Card" className="item-image" />
                        <div>
                            <h6 className="title">Popular admin template you can use for your business</h6>
                            <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod totam, eaque dolore doloremque cupiditate quasi cumque culpa</p>
                        </div>
                    </div>
                </div>

                <div className="item8">
                    <div className="item-content">
                        <img src={image} alt="Card" className="item-image" />
                        <div>
                            <h6 className="title">Popular admin template you can use for your business</h6>
                            <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod totam, eaque dolore doloremque cupiditate quasi cumque culpa</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;