import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

// Firebase
// import { collection, addDoc } from "firebase/firestore";
// import {db} from '../firebase';


import './Login.css';

const theme = createTheme();

// async function loginUser(credentials) {
//     return fetch('http://test-node-local.admin.gov:8081/login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(credentials)
//     })
//         .then(data => data.json())
// }

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Login({setToken}) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [open, setOpen] = React.useState(false);    

    const CryptoJS = require('crypto-js');

    const handleError = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

    const handleSubmit = async e => {
        e.preventDefault();
        //  const token = await loginUser({
        //      username,
        //      password
        //  });
        //  console.log('Token is ' + token)
        // setToken(token);
        const encryptedPW = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(password));
        const storedPW = sessionStorage.getItem(username)
        if (encryptedPW === storedPW) {
            console.log("User found!")
            const token2 = {"token":username}
            setToken(token2);
        } else {
            console.log("User NOT found!")
            handleError()
        }

        // Firebase add data
        // try {
        //     const docRef = await addDoc(collection(db, "todos"), {
        //       todo: todo,    
        //     });
        //     console.log("Document written with ID: ", docRef.id);
        //   } catch (e) {
        //     console.error("Error adding document: ", e);
        //   }
    }
    

    // return (
    //     <div className="login-wrapper">
    //         <h1>Please Login</h1>
    //       <form onSubmit={handleSubmit}>
    //           <label>
    //               <p>Username</p>
    //               <input type="text" onChange={e => setUserName(e.target.value)} />
    //           </label>
    //           <label>
    //               <p>Password</p>
    //               <input type="password" onChange={e => setPassword(e.target.value)} />
    //           </label>
    //           <div>
    //               <button type="submit">Submit</button>
    //           </div>
    //       </form>
    //     </div>
    // );

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={e => setUserName(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={e => setPassword(e.target.value)}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/CreateAccount" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center'}}>
                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    Username not found or the password is incorrect
                    </Alert>
                </Snackbar>
                {/*<Copyright sx={{ mt: 8, mb: 4 }} />*/}
            </Container>
        </ThemeProvider>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}
