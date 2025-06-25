import AppBar from '@mui/material/AppBar';
import { Box, Button, Toolbar } from '@mui/material';

function NavBar() {

  return (
    <Box>
        <AppBar sx={{backgroundColor:'#A088BF'}} position='static' >
            <Toolbar sx={{padding: 1}}>
                <Box component='a' href='#/' sx={{display: 'flex', flexGrow:1, alignItems: 'center'}}>
                  <img style={{width: '20%'}} src='images/laurier_logo.png'></img>
                </Box>
                <Box>
                  <Button href='#/aime' sx={{color:'white'}}>AIME</Button>
                  <Button href='#/resource-center' sx={{color:'white'}}>RESOURCE CENTER</Button>
                  <Button href='#/about' sx={{color:'white'}}>ABOUT</Button>
                </Box>
            </Toolbar>
            
        </AppBar>
    </Box>
    
  )
}


export default NavBar;