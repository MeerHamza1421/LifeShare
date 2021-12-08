import * as React from 'react';


import SignupDonor from './Components/SignUpDonor';
import SignupPatient from './Components/SignUpPatient.js';
import SignupHospital from './Components/SignUpHospital';

import './RegisterPage.css';

const pages = ['Donor', 'Patient', 'Hospital'];

const ResponsiveAppBar = () => {



  const [show,setShow] = React.useState(true);
  const[show1,setShow1] = React.useState(true);
  const[show2,setShow2] = React.useState(false);
  

  const DonorShow = () => {

    setShow(true);

      setShow1(false);

    setShow2(false);
  }

  const hospitalShow = () => {
      setShow(false);
    setShow1(true);
    setShow2(false);  }

  const patientShow = () => {
      setShow(false);
    setShow1(false);
    setShow2(true);  
  }

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  return (
    <div>
      <header>
        <a href = "#" className = "logo"><i class = "fa fa-ice-cream"></i>BBD</a>
        <nav class = "navbar">
            <b href= "#Home"   onClick = {() => DonorShow()}>Donor</b>
            <b href= "#about"  onClick = {() => hospitalShow()}>Hospital</b>
            <b href= "#about"  onClick = {() => patientShow()}>Patient</b>
          </nav>
        </header>
     {show && <SignupDonor/>}
     {show1 && <SignupHospital/>}
     {show2 && <SignupPatient/>}

    </div>
  );
};
export default ResponsiveAppBar;
