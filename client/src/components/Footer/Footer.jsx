import React from "react";
import "./Footer.scss";

import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa"
import Payment from "../../assets/payments.png";

const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est autem qui sit commodi, reiciendis enim minus fuga, facilis assumenda, quas vel eius libero obcaecati? Quae enim nisi voluptatibus ipsum tenetur?</div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow />
                    <div className="text"> T-19, skyGarden Apartment, Sector 16B, Noida Extention, Noida UP, 201009</div>
                </div>
                <div className="c-item">
                    <FaMobileAlt />
                    <div className="text"> Phone: +91 701 151 6196 </div>
                </div>
                <div className="c-item">
                    <FaEnvelope />
                    <div className="text"> Email: info@digitalryde.com </div>
                </div>
            </div>
            <div className="col">
                <div className="title">Catagories</div>
                    <div className="text"> Menu item 1</div>
                    <div className="text"> Menu item 2</div>
                    <div className="text"> Menu item 3</div>
                    <div className="text"> Menu item 4</div>
                    <div className="text"> Menu item 5</div>
                    <div className="text"> Menu item 6</div>

                
            </div>
            <div className="col">
                <div className="title">Pages</div>
                <div className="text"> Home</div>
                <div className="text"> About</div>
                <div className="text"> Privacy Policy</div>
                <div className="text"> Returns</div>
                <div className="text"> Term & Conditions</div>
                <div className="text"> Contact Us</div>
                
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text1">
                    DIGITALRYDE.COM BRINGS GADGETSCART 2023 TO LIFE, YOUR ONE-STOP-SHOP FOR TECH NEEDS.
                </div>
                <img src={Payment} />
            </div>
        </div>
    </footer>
};

export default Footer;
