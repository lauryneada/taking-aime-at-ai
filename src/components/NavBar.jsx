import AppBar from '@mui/material/AppBar';
import { Container, Box , Typography, Button, Toolbar } from '@mui/material';
import './NavBar.scss';

const pages = ['AIME', 'Resource Center', 'About'];

function NavBar() {

  return (
    <AppBar sx={{backgroundColor:'#A088BF', position: 'static'}} component="nav">
        <Toolbar>
            <Typography sx={{fontWeight: 'bold', flexGrow: 1}}>
            Wilfrid Laurier University's Faculty of Education
            </Typography>
            <Box sx={{display:{md:'flex'} }}>
                {pages.map((page) => (
                    <Button sx={{color:'white'}}>{page}</Button>
                ))}
            </Box>
        </Toolbar>
        
    </AppBar>

  )
}


export default NavBar;