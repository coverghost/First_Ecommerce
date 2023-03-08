import React, { useState, useEffect } from "react";
import "./Styles/style.css"

const EommNavbar = () => {

    const inputs = document.querySelectorAll(".input");


    function addcl() {
        let parent = this.parentNode.parentNode;
        parent.classList.add("focus");
    }

    function remcl() {
        let parent = this.parentNode.parentNode;
        if (this.value == "") {
            parent.classList.remove("focus");
        }
    }


    inputs.forEach(input => {
        input.addEventListener("focus", addcl);
        input.addEventListener("blur", remcl);
    });



    return (
        <>
            <div>
                <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"></link>
                <nav id="navbar" class="">
                    <div class="nav-wrapper">

                        <div class="logo">
                            <a href="#home"><i class="fa fa-angellist" ></i>AYUSH ARYA</a>
                        </div>


                        <ul id="menu">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </nav>



                <div class="menuIcon">
                    <span class="icon icon-bars"></span>
                    <span class="icon icon-bars overlay"></span>
                </div>


                <div class="overlay-menu">
                    <ul id="menu">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>

            <div>
                <div class="login-content">
                    <body>
                        <div class="container">
                            <div class="img">
                                
                            </div>
                            <div class="login-content">
                                <form action="index.html">
                                    <h2 class="title">Log In</h2>
                                    <div class="input-div one">
                                        <div class="i">
                                            <i class="fas fa-user"></i>
                                        </div>
                                        <div class="div">
                                            <h5>Username</h5>
                                            <input type="text" class="input"></input>
                                        </div>
                                    </div>
                                    <div class="input-div pass">
                                        <div class="i">
                                            <i class="fas fa-lock"></i>
                                        </div>
                                        <div class="div">
                                            <h5>Password</h5>
                                            <input type="password" class="input"></input>
                                        </div>
                                    </div>
                                    <a href="#">Forgot Password?</a>
                                    <input type="submit" class="btn" value="Login"></input>
                                </form>
                            </div>
                        </div>
                        <script type="text/javascript" src="js/main.js"></script>
                    </body>
                </div>
            </div>


        </>
    )
}

export default EommNavbar;