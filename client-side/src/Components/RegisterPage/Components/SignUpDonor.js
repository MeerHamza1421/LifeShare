import React from 'react'

import '../RegisterPage.css';

const SignupDonor = () => {
    return (
    <div div className = "body-conatinor">
    <div className = "containor">
        <div className = "title">Registeration/</div>
            <form action = "#">
                <div className = "user-details">
                    <div className = "input-box">
                        <span className = "details">full Name</span>
                            <input type = "text" required></input>
                    </div>
                
                    <div className = "input-box">
                        <span className = "details">User Name</span>
                            <input type ="text" required></input>
                    </div>
                    <div className = "input-box">
                        <span className = "details">Email</span>
                            <input type = "text" required></input>
                    </div>
                    <div className = "input-box">
                        <span className = "details">phoneNumber</span>
                            <input type = "text" required></input>
                    </div>
                    <div className = "input-box">
                        <span className = "details">password</span>
                            <input type = "text" required></input>
                    </div>
                    <div className = "input-box">
                        <span className = "details">confirm Password</span>
                            <input type = "text" required></input>
                    </div>
                    </div>
                <div className = "gender-details">
                    <input type = "radio" name = "gender" id = "dot-1"/>
                    <input type = "radio" name = "gender" id = "dot-2"/>
                    <input type = "radio" name = "gender" id = "dot-3"/>
                    <span className = "gender-titles">
                        Gender
                    </span>
                    <div className = "category">
                        <label for= "dot-1">
                            <span className = "dot one"></span>
                            <span className = "gender">Male</span>
                        </label>
                        <label for= "dot-2">
                            <span className = "dot two"></span>
                            <span className = "gender">Female</span>
                        </label>
                        <label for= "dot-3">
                            <span className = "dot three"></span>
                            <span className = "gender">Prefer Not to say</span>
                        </label>
                    </div>
                <div className = "button">
                    <input type = "submit" value = "Register"></input>
                </div>

                </div>

            </form>


    </div>        


    </div>
    );
}

export default SignupDonor;