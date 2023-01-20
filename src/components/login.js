import { Avatar, Button, Grid, Paper, TextField, Typography } from "@mui/material";




const login = () => {
   const paperStyle={padding:'30px 20px' ,width:600 ,margin:"20px auto"}
   const headerStyle={margin:0}
   const avatarStyle={backgroundColor:'#FF2625'}
  

return(
  <Grid>
   <Paper elevation={20} style={paperStyle}>
      <Grid align='center'>
         <Avatar style={avatarStyle}>  
         </Avatar>
         <h2 style={headerStyle}>Welcome Again</h2>
         <Typography variant="caption"><h6>Enter Email & Password to Login</h6></Typography>
      </Grid>
      <form align='center'>
            <TextField fullWidth label='Email'/>
            <TextField fullWidth label='Password'/>
            <Button type="login" variant="contained" href="/" color='warning' sx={{marginTop:2, borderRadius:3}}>Login</Button>
            </form>
   </Paper>
  </Grid>
         

);
};


export default login