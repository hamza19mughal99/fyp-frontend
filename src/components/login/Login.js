import React, { useState } from 'react';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from "react-icons/ri";
import "../App.css";
import fire from '../auth/fireBase';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        height: 600 ,
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(100),
            height: theme.spacing(65),
        },
    },
    root1: {
        display: 'flex',
        justifyContent: 'center',
        '& > *': {
            margin: theme.spacing(3),
            width: theme.spacing(70),
            height: theme.spacing(10),
        },
    }
}));




export default function LoginPage() {

    const classes = useStyles();

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
            <div className={classes.root}>
                <Paper elevation={6} >
                    <div className={classes.root1}>
                    <Paper elevation={6} className="login-h4">
                        <h4>PROGRESS MANAGEMENT PORTAL</h4>
                    </Paper>
                    </div>
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
                                        {/* <div className="form-group form-button">
                                            <input type="submit" name="logout" className="form-submit"
                                                value="LOG OUT "
                                                onClick={Logout} />
                                        </div> */}

                                    </form>

                                </div>

                                {/* faculty login  */}
                                <div className="signin-form">
                                    <h2 className="form-title" style={{fontWeight: "bold" , textAlign: 'center'}}>
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
                                        {/* <div className="form-group form-button">
                                            <input type="submit" name="logout" className="form-submit"
                                                value="LOG OUT "
                                                onClick={Logout} />
                                        </div>
 */}

                                    </form>

                                </div>

                            </div>

                        </div>

                    </section>
                </Paper>
            </div>


        </>
    )
}


