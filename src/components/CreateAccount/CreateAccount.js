import React, { useState, useEffect } from 'react';
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
import { Navigate } from 'react-router-dom';

import './CreateAccount.css';

const theme = createTheme();


export default function CreateAccount() {

    const [username, setUserName] = useState({ un: 'abc'});
    const [password, setPassword] = useState({ pw: 'abcABC1!!!'});
    const [passwordConfirm, setConfirmPassword] = useState({ pw: 'abcABC1!!!'});
    const [btnDisabled, setBtnDisabled] = useState(true)


    const CryptoJS = require('crypto-js');

    const regexUN = new RegExp(/^[a-zA-Z0-9]+$/);
    const isUsernameValid = (username) => username.length < 3 || !regexUN.test(username)

    const regexPW = new RegExp(/^[a-zA-Z0-9!@#$%&]+$/);
    const regexPWLetterCap = new RegExp(/[A-Z]+/);
    const regexPWLetterLower = new RegExp(/[a-z]+/);
    const regexPWNumber = new RegExp(/[0-9]+/);
    const regexPWSpecial = new RegExp(/[!@#$%&]+/);
    const isPasswordValid = (password) => password.length < 4 || !regexPW.test(password) | !regexPWLetterCap.test(password) | !regexPWLetterLower.test(password) | !regexPWSpecial.test(password) | !regexPWNumber.test(password)
    const isConfirmPasswordValid = (ConfirmPassword) => ConfirmPassword != password.pw

    const handleSubmit = async e => {
        // e.preventDefault();

        if (!isUsernameValid(username.un) && !isPasswordValid(password.pw) && !isConfirmPasswordValid(passwordConfirm.pw)) {
            console.log("Great success");
            const encryptedPW = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(password.pw));
            sessionStorage.setItem(username.un, encryptedPW);
            // sessionStorage.setItem('created', 'true');
            window.history.replaceState(null, "", "/");
            <Navigate to="/" />
            window.location.reload(false);
        } else {
            console.log("Not successful")
        }
    }

    const updateButtonStatus = () => {
        console.log("Entering data")
        // const defaultUsername = 'abc'
        // const defaultPassword = 'abcABC!!!'
        
        // if (!isUsernameValid(username.un) && !isPasswordValid(password.pw) && !isConfirmPasswordValid(passwordConfirm.pw) && username.un !== defaultUsername && password.pw !== defaultPassword && passwordConfirm.pw !== defaultPassword) {
        //     setBtnDisabled(false)
        // }
    }

    useEffect(() => {
        const defaultUsername = 'abc'
        const defaultPassword = 'abcABC1!!!'
        
        if (!isUsernameValid(username.un) && !isPasswordValid(password.pw) && !isConfirmPasswordValid(passwordConfirm.pw) && username.un !== defaultUsername && password.pw !== defaultPassword && passwordConfirm.pw !== defaultPassword) {
            setBtnDisabled(false)
        } else {
            setBtnDisabled(true)
        }
    });

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
                    Create an account
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <p/>
                        <TextField
                            required
                            id="outlined-username-required"
                            label="User name"
                            error={isUsernameValid(username.un)}
                            helperText={isUsernameValid(username.un) ? "Username should contain at least 3 characters and only contains alphaneumeric characters" : ""}
                            onChange={e => { setUserName({un: e.target.value}); updateButtonStatus() } }
                            />
                        <p/>
                        <TextField
                            required
                            id="outlined-password-required"
                            label="Password"
                            type="password"
                            error={isPasswordValid(password.pw)}
                            helperText={isPasswordValid(password.pw) ? "Password should contain at least 4 characters and only contains alphaneumeric characters, 1 upper and lower case letter, and the following special characters: !@#$%&" : ""}
                            onChange={e => { setPassword({pw: e.target.value}); updateButtonStatus() } }
                            />
                        <p/>
                        <TextField
                            required
                            id="outlined-password-confirm-required"
                            label="Confirm Password"
                            type="password"
                            error={isConfirmPasswordValid(passwordConfirm.pw)}
                            helperText={isConfirmPasswordValid(passwordConfirm.pw) ? "Password fields do not match" : ""}
                            onChange={e => { setConfirmPassword({pw: e.target.value}); updateButtonStatus() } }
                            />
                        <p/>
                        <Button
                            disabled={btnDisabled}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Create Account
                        </Button>
                    </Box>
                </Box>
                {/*<Copyright sx={{ mt: 8, mb: 4 }} />*/}
            </Container>
        </ThemeProvider>
    );
}

