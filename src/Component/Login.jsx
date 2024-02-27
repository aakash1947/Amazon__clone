import React from 'react'
import './Login.css'
const Login = (props) => {
    return (
        <div>

            <div className='Signin'>

                <div className="logo">
                    <img src="./images/loginlogo.png" alt="" />
                </div>

                <div className="form">

                    <div className="signin-para">
                        <p>Sign in</p>
                    </div>

                    <div className='Name'>
                        <p>Email or mobile phone number</p>
                        <input className='input' type="text" />
                    </div>

                    <div className="password">

                        <div className="password-fogotpass">
                            <p>Password</p>
                            <span>Forgot Password</span>



                        </div>

                        <div className="pass-btn">
                            <input className='input' type="text" />
                        </div>

                        <div className="signin-button">
                            <button className='btn' onClick={props.handleLogin}>Sign in</button>
                        </div>

                        <div className="Condition-para">
                            <p>By continuing, you agree to Amazons <span> Conditions of Use </span> and <span> Privacy Notice.</span></p>
                        </div>

                        <div className="cheak-box">


                            <div>
                                <input type="checkbox" id="scales" name="scales" checked />

                            </div>

                            <p>Keep me signed in. <span> Details </span></p>

                        </div>


                        <div className='Create-section'>


                            <p>New to Amazon?</p>

                            <button>Create your Amazon account</button>

                        </div>


                    </div>






                </div>
            </div>


            <div className="footer-section">

                <div className='line1'>

                    <p>Condition of Use</p>
                    <p>Privacy Notice</p>
                    <p>Help</p>

                </div>

                <dir className='line2'>
                    <p>© feb-2024 . Aakash Gupta</p>
                </dir>
            </div>


        </div>
    )
}

export default Login
