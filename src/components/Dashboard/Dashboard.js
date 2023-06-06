import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Navigate } from 'react-router-dom';
// import Users from './Users';

const theme = createTheme();

function handleLogout() {
	sessionStorage.removeItem('token');
	<Navigate to="/" />
	window.location.reload(false);
}

function handleLogoutClear() {
	sessionStorage.clear();
	<Navigate to="/" />
	window.location.reload(false);
}

export default function Dashboard() {
    return(
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
                    <Typography component="h1" variant="h5">
                        User List
                    </Typography>
                    <Box sx={{
                      width: '100%',
                      maxWidth: 360,
                      bgcolor: 'background.paper',
                      boxShadow: 3,
                      borderRadius: 2,
                      }}
                    >
                    <nav aria-label="main mailbox folders">
                          <List>
                            <ListItem disablePadding>
                              <ListItemButton>
                                <ListItemIcon>
                                  <PersonIcon />
                                </ListItemIcon>
                                <ListItemText primary="Inbox" />
                              </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                              <ListItemButton>
                                <ListItemIcon>
                                  <PersonIcon />
                                </ListItemIcon>
                                <ListItemText primary="Drafts" />
                              </ListItemButton>
                            </ListItem>
                          </List>
                        </nav>
                        <Divider />
                        <nav aria-label="secondary mailbox folders">
                          <List>
                            <ListItem disablePadding>
                              <ListItemButton>
                                <ListItemIcon>
                                  <PersonIcon />
                                </ListItemIcon>
                                <ListItemText primary="Trash" />
                              </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                              <ListItemButton component="a" href="#simple-list">
                                <ListItemIcon>
                                  <PersonIcon />
                                </ListItemIcon>
                                <ListItemText primary="Spam" />
                              </ListItemButton>
                            </ListItem>
                          </List>
                          </nav>
                          </Box>
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleLogout}
                            >
                            Logout
                        </Button>
                        <p />
                        To delete all login data, press the button below
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleLogoutClear}
                            >
                            Logout and Delete All Login Data
                        </Button>
                    </Box>
                    {/* <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    > */}
                    {/* Querying from Casport
                    <br/>
                      <Box component="form" onSubmit={handleGetUsers} noValidate sx={{ mt: 1 }}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Get Users
                        </Button>
                      </Box>
                      {
                        condition === 1 ?
                        <Users listUsers={userList} />
                        :
                        'Nothing to display!'
                      }
                    </Box> */}
                    {/*<Copyright sx={{ mt: 8, mb: 4 }} />*/}
                </Container>
            </ThemeProvider>
    );
}
