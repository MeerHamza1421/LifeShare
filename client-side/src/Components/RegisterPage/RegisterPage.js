import React, { useState } from 'react';
import { InputAdornment } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import { Box, Button, Container, IconButton, MenuItem, Tab, Tabs, TextField } from '@mui/material';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { addDoc, collection, GeoPoint } from 'firebase/firestore';
import { auth, firestore } from '../../Firebase';
import { get } from 'axios';
import { Link } from 'react-router-dom';
import './RegisterPage.css';

const ResponsiveAppBar = () => {
  const bloodType = [
    'A+',
    'A-',
    'B-',
    'B+',
    'O+',
    'O-',
    'AB+',
    'AB-',
  ];
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [bloodGroup, setBloodGroup] = React.useState('A+');
  const [value, setValue] = React.useState('A+');
  const [tabValue, setTabValue] = React.useState('one');
  const [blood, showBlood] = React.useState('true');
  const [phoneNumber, setPhoneNumber] = useState('0');

  const handleChangeTab = (e, newValue) => {
    if (newValue === 'two' || newValue === 'three') {
      showBlood(false);
    }
    else {
      showBlood(true);
    }
    setTabValue(newValue);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setBloodGroup(event.target.value);
  };

  const getLocation = async () => {
    const location = await get('https://api.ipgeolocation.io/ipgeo?apiKey=b80e6e3d2bd7455db18973734658c0d6');

    if (location.data.longitude && location.data.latitude) {
      return {
        status: true,
        latitude: location.data.latitude,
        longitude: location.data.longitude
      };
    }
  }

  const registerUser = async (e) => {
    e.preventDefault();
    const { status, latitude, longitude } = await getLocation();
    const userRef = collection(firestore, 'Users');
    if (status) {
      await createUserWithEmailAndPassword(auth, email, password).then(
        async (createUser) => {
          await updateProfile(createUser.user,
            {
              displayName: username
            }
          ).then(
            await addDoc(userRef,
              {
                username: username,
                location: new GeoPoint(latitude, longitude),
                phonenumber: phoneNumber,
                bloodtype: bloodGroup,
              }
            )
          )
        }
      ).catch(
        (err) => {
          window.alert(err);
        }
      )
      auth.signOut();
      window.alert('You have been Registered Successful');
      document.getElementById('pageLink').click();
    }
    else {
      alert('Please get your location');
    }
  }

  return (

    <div>

      <div className='registerPage'>
        <Container className='register-containor' maxWidth="sm">
          <Box sx={{ width: '100%', hieght: '80vh' }}>
            <h1>Registeration</h1>
            <Tabs
              value={tabValue}
              onChange={handleChangeTab}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="secondary tabs example">
              <Tab value="one" label="User" />
              <Tab value="two" label="Hospital" />
              <Tab value="three" label="Blood Bank" />
            </Tabs>
          </Box>
          <form className="register-form" onSubmit={registerUser}>

            <div className='field'>
              <TextField
                inputProps={{ style: { fontSize: 14 } }}
                className='username'
                id="outlined-number-2"
                label="Username"
                type="username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                InputProps={{
                  startAdornment: <InputAdornment position="start">
                    <AccountCircleIcon /> </InputAdornment>
                }} />
            </div>
            <div className='field'>
              <TextField
                inputProps={{ style: { fontSize: 14 } }}
                className='username'
                id="outlined-number-3"
                label="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                InputProps={{
                  startAdornment: <InputAdornment position="start">
                    <AccountCircleIcon /> </InputAdornment>
                }} />
            </div>
            <div className='field'  >
              <TextField
                inputProps={{ style: { fontSize: 14 } }}
                className='username'
                id="outlined-password-input"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                InputProps={{
                  endAdornment: <InputAdornment position="end">
                    <IconButton className='iconbtn' onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>,
                  startAdornment: <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                }} />
            </div>
            <div className='field'>
              <TextField
                inputProps={{ style: { fontSize: 14 } }}
                className='username'
                id="outlined-password-input-1"
                label="confirm-Password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                InputProps={{
                  endAdornment: <InputAdornment position="end">
                    <IconButton className='iconbtn' onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>,
                  startAdornment: <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                }} />
            </div>
            <div className='field'>
              <TextField
                inputProps={{ style: { fontSize: 14 } }}
                className='username'
                id="outlined-number-6"
                label="phone-Number"
                onChange={e => setPhoneNumber(e.target.value)}
                type="text" />
            </div>
            {blood && <div className='field'>
              <TextField className='username'
                inputProps={{ style: { fontSize: 11 } }}
                InputLabelProps={{ style: { fontSize: 11 } }}
                id="outlined-select-currency"
                select
                label="Select Blood Group"
                value={bloodGroup}
                onChange={handleChange}>
                {bloodType.map((blood) => (
                  <MenuItem
                    key={blood} value={blood}>
                    {blood}
                  </MenuItem>
                ))}
              </TextField>
            </div>}
            {!blood && <br />}
            <div className='btn'>
              <Button variant="contained" type="submit" className='btn-1' >Register</Button>
            </div>
            <Link id="pageLink" to="/login" ></Link>
          </form>
        </Container>
      </div>
    </div>
  );
};
export default ResponsiveAppBar;
