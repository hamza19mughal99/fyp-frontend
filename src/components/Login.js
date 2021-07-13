import React, { useState } from 'react';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from "react-icons/ri";
import "./App.css";
import fire from './auth/fireBase'


export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    // firebase 
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(email, password);
        fire.auth().signInWithEmailAndPassword(email, password).then(() => {
            alert("Login success")
        }).catch((error) => {
            alert("No user exist | ", error);
        })
    }

    const Logout = () => {
        fire.auth().signOut();
        alert("Log out Successfully")
    }


    return (
        <>
            <section className="registration ">
                <div className="container mt-5">
                    <div className="signup-content">
                        {/* student login  */}
                        <div className="signup-form">
                            <h2 className="form-title">
                                Student Login
                            </h2>
                            <form className="registration-form" id="register-form" onSubmit={handleSubmit}>


                                <div className="form-group">
                                    <label htmlFor="email">
                                        <span className="icon">  <MdEmail /> </span>
                                    </label>
                                    <input type="text" name="email" id="email" autoComplete="off"
                                        placeholder="Your Email"
                                        onChange={(ev) => setEmail(ev.target.value)}
                                    />
                                </div>


                                <div className="form-group">
                                    <label htmlFor="password">
                                        <span className="icon">  <RiLockPasswordFill /> </span>
                                    </label>
                                    <input type="password" name="password" id="password" autoComplete="off"
                                        placeholder="password"

                                        onChange={(ev) => setPassword(ev.target.value)}
                                    />
                                </div>
                                <div className="form-group form-button">
                                    <input type="submit" name="signin" className="form-submit"
                                        value="LOG IN " />
                                </div>
                                <div className="form-group form-button">
                                    <input type="submit" name="logout" className="form-submit"
                                        value="LOG OUT "
                                        onClick={Logout} />
                                </div>

                            </form>

                        </div>

                        {/* faculty login  */}
                        <div className="signin-form">
                            <h2 className="form-title">
                                Faculty Login
                            </h2>
                            <form className="registration-form" id="register-form" onSubmit={handleSubmit}>



                                <div className="form-group">
                                    <label htmlFor="email">
                                        <span className="icon">  <MdEmail /> </span>
                                    </label>
                                    <input type="text" name="email" id="email" autoComplete="off"
                                        placeholder="Your Email"
                                        onChange={(ev) => setEmail(ev.target.value)}
                                    />
                                </div>


                                <div className="form-group">
                                    <label htmlFor="password">
                                        <span className="icon">  <RiLockPasswordFill /> </span>
                                    </label>
                                    <input type="password" name="password" id="password" autoComplete="off"
                                        placeholder="password"

                                        onChange={(ev) => setPassword(ev.target.value)}
                                    />
                                </div>
                                <div className="form-group form-button">
                                    <input type="submit" name="signin" className="form-submit"
                                        value="LOG IN " />
                                </div>
                                <div className="form-group form-button">
                                    <input type="submit" name="logout" className="form-submit"
                                        value="LOG OUT "
                                        onClick={Logout} />
                                </div>


                            </form>

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}


