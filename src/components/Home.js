import React from 'react';
import { Link } from "react-router-dom";
import "./App.css";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(140),
            height: theme.spacing(14),
        },
    },
}));



const Home = () => {
    const classes = useStyles();

    return (
        <>

            {/* Navbar */}
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <Link className="login" to="/"><a class="navbar-brand" >PMP</a> </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link className="login" to="/Login"> <a class="nav-link" aria-current="page" >Login</a> </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Navbar */}

            {/* section one */}
            


            <div className="home-section container">

            <div className={classes.root}>
                <Paper elevation={4} >
                    <h2>PROGRESS MANAGEMENT PORTAL</h2>

                </Paper>
            </div>

            </div>


            {/* section one */}


        </>
    )
}

export default Home
