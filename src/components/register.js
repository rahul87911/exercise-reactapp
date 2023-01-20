
import { Avatar, Button, Checkbox, Grid, Paper, TextField, Typography } from '@mui/material';
import React from 'react'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const register = () => {
  const paperStyle={padding:'30px 20px' ,width:600 ,margin:"20px auto"}
  const headerStyle={margin:0}
  const avatarStyle={backgroundColor:'#FF2625'}
  

    return(
      <Grid>

        <Paper elevation={20} style={paperStyle}>
          <Grid align='center'>
            <Avatar style={avatarStyle}>
                <AddCircleOutlineOutlinedIcon/>

            </Avatar>
          <h2 style={headerStyle}>SignUp</h2>
          <Typography variant='caption'><h5>You are only a form away to join the FitNation Family !!</h5></Typography>
          </Grid>

          <form align='center'>
            <TextField fullWidth label='Name'/>
            <TextField fullWidth label='Email'/>
            <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        
        
      </RadioGroup>
    </FormControl>
            <TextField fullWidth label='Phone Number'/>
            <TextField fullWidth label='Password'/>
            <TextField fullWidth label='Confirm Password'/>
            <FormControlLabel control={<Checkbox name="checkedA"/>}label="I accept all the terms and conditions" />
            <br></br>
           <Button type='submit' variant='contained' href='/' color='warning' sx={{marginTop:2, borderRadius:3}}>SignUp </Button>
           <br></br>
           <Button type='reset' variant='contained' sx={{marginTop:1, borderRadius:3}}  >Reset </Button>
          </form>
        </Paper>
      </Grid>
        

       
        );
    };
    
    
    export default register