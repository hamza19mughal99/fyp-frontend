import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    paperDiv: {
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(135),
            height: theme.spacing(15),
        },
    },
    mainEdit: {
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(135),
            height: theme.spacing(45),
        },
    },
    userDetails:{
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(65),
            height: theme.spacing(25),
        },
    }

}));


const EditProfile = () => {
    const classes = useStyles();

    return (
        <>
            <div className="student-edit">
                <div className={classes.paperDiv}>
                    <Paper elevation={3} className="student-h4">
                        <h1>SE18-092 || HAMZA AHMED MUGHAL</h1>
                    </Paper>
                </div>
                <div className={classes.mainEdit}>
                    <Paper elevation={3} className="main-edit-section">
                        <div className="main-edit">
                            <div>
                                <div className={classes.userDetails}>
                                <Paper elevation={3}>
                                    <div className="user-details">
                                        <div className="userDetails-div"> <h5>User Details</h5>
                                              <p>Email Address</p>
                                              <p>Country</p>
                                              <p>City</p>
                                         </div>
                                      <div>  <button className="edit-profile-button">Edit Profile</button> </div>
                                    </div>
                                </Paper>
                                </div>
                            </div>
                            <div>
                            <div className={classes.userDetails}> 

                                <Paper elevation={3}>
                                    <div className="course-details">
                                        <h5>Courses Details</h5>

                                    </div>

                                </Paper>
                                </div>
                            </div>
                        </div>
                    </Paper>
                </div>
            </div>
        </>
    )
}

export default EditProfile
