import React from 'react'

import '../RegisterPage.css';

const SignupHospital = () => {
    return(
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
                    <div id = "1-box-1" className = "input-box">
                        <span className = "details">Address</span>
                            <input  type = "text" required></input>
                    </div>
                    </div>
                    
                <div className = "button">
                    <input type = "submit" value = "Register"></input>
                </div>

            </form>


    </div>        


    </div>
    );
}

export default SignupHospital;