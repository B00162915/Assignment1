'use client';

import * as React from 'react';

import Avatar from '@mui/material/Avatar';

import Button from '@mui/material/Button';


import TextField from '@mui/material/TextField';

import FormControlLabel from '@mui/material/FormControlLabel';

import Checkbox from '@mui/material/Checkbox';

import Link from '@mui/material/Link';

import Container from '@mui/material/Container';

import Box from '@mui/material/Box';



export default function Home() {


  const handleSubmit = (event) => {

                

  console.log("handling submit");

  event.preventDefault();

  const data = new FormData(event.currentTarget);



   let email = data.get('email')

   let pass = data.get('pass')

   let address = data.get('address')

   let phoneNum = data.get('phoneNum')
   
   let email2 = data.get('email2')

   let pass2 = data.get('pass2')


   console.log("Sent email:" + email)

   console.log("Sent pass:" + pass)



   runDBCallAsync(`http://localhost:3000/api/login?email=${email}&pass=${pass}&address=${address}&phoneNum=${phoneNum}&email2=${email2}&pass2=${pass2}`)





 }; // end handle submit


async function runDBCallAsync(url) {



    const res = await fetch(url);

    const data = await res.json();


 

    if(data.data== "valid"){

      console.log("login is valid!")


     

    } else {


      console.log("not valid  ")

    }

  }




  return (

    <Container maxWidth="sm">

    <Box sx={{ height: '100vh' }} >


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

    />

    <TextField

      margin="normal"

      required

      fullWidth

      name="pass"

      label="Pass"

      type="pass"

      id="pass"

      autoComplete="current-password"

    />

    <TextField

      margin="normal"

      required

      fullWidth

      name="address"

      label="Address"

      type="address"

      id="address"

      autoComplete="address"

    />

    <TextField

      margin="normal"

      required

      fullWidth

      name="phoneNum"

      label="Phone Number"

      type="phoneNum"

      id="phoneNum"

      autoComplete="phoneNum"

    />

    <TextField

      margin="normal"

      required

      fullWidth

      name="email2"

      label="Secondary Email"

      type="email2"

      id="email2"

      autoComplete="email2"

    />

    <TextField

      margin="normal"

      required

      fullWidth

      name="pass2"

      label="Secondary Password"

      type="pass2"

      id="pass2"

      autoComplete="current-password2"

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

</Box>

</Box>

       </Container>

  ); // end return

}