'use client'
import React from 'react';
import Link from "next/link";
import { HiArrowNarrowUp } from "react-icons/hi";

export default function Contact() {

    const toTop = () => {
        window.scrollTo({
            top: 0,
            left: 0, 
            behavior: 'smooth'
          });
    }

    return (
        <div id='Contact'>
            <div id="ContactContainer">
                <div id="ContactHeaderContainer">
                    <p id='ContactHeader'>Contact Us (You Should)</p>
                </div>
                <div id="ContactHeaderContainer">
                    <p >Tata Book is India's most trusted Platform For Providing Online Sports ID's.</p>
                    <p >Now available 24/7 online with our services.</p>
                </div>
                <div id="ContactBodyContainer">
                    <div id="ContactIconsConatiner">
                        <Link id="ContactEmail" href='#' target='_blank'><img id="EmailIcon" src="mail.webp" /></Link>
                        <Link id="ContactLinkedin" href='#' target='_blank'></Link>
                        <Link id="ContactGitHub" href="#" target='_blank'></Link>
                    </div>
                    <div id="ContactButtonContainer">
                        <p id="ContactButtonText">Click the arrow to see it all in reverse!</p>
                        <button id="ContactButton" onClick={toTop}><HiArrowNarrowUp /></button>
                    </div>
                </div>
                <div id="ContactFooterContainer">

                </div>
            </div>
            <style>
                {` 
                    #Contact {  
                        display: flex;
                        position: relative;
                        width: 99.7vw;
                        height: 100vh;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        background-color: black;
                        z-index: 9;
                        color: white;
                    }

                    #ContactContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 100%;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }

                    #ContactHeaderContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 30%;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }

                    #ContactHeader {
                        font-size: 50px;
                        font-family: InterBold;
                        text-align: center;
                    }

                    #ContactBodyContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 70%;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }

                    #ContactIconsConatiner {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 50%;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                    }

                    #ContactEmail, #ContactLinkedin, #ContactGitHub {
                        display: flex;
                        position: relative;
                        width: 30%;
                        height: 85%;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }

                    #ContactEmail:hover, #ContactLinkedin:hover, #ContactGitHub:hover {
                        cursor: pointer;
                        opacity: 0.8;
                    }

                    #EmailIcon { height: 80%; }

                    #LinkedinIcon { height: 65%; }

                    #GitHubIcon { height: 65%; }

                    #ContactButtonContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 50%;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }

                    #ContactButtonText {
                        font-size: 12px;
                        font-family: InterBold;
                        text-align: center;
                    }

                    #ContactButton {
                        display: flex;
                        position: relative;
                        width: 300px;
                        height: 50px;
                        justify-content: center;
                        align-items: center;
                        font-size: 30px;
                        margin-top: 10px;
                    }

                    #ContactButton:hover {
                        cursor: pointer;
                        opacity: 0.8;
                    }

                    @media (max-width: 900px) {

                        #Contact { height: 92vh; }

                        #ContactIconsConatiner { flex-direction: column; }

                        #ContactEmail, #ContactLinkedin, #ContactGitHub { width: 50%; height: 33%; }

                        #EmailIcon, #LinkedinIcon, #GitHubIcon { height: 70%; }

                        #ContactButtonContainer { width: 90%; }

                    }

                `}
            </style>
        </div>
    )
};