import React, { useState } from 'react';
import {Container, Stack, Typography, Button, Box} from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import '../index.scss'

function Footer() {
    return (
        <Container maxWidth={false} disableGutters sx={{backgroundColor: 'purple.main', padding: 3, width:'100vw'}}>
            <Stack direction='row' sx={{justifyContent: 'space-between'}}>
                <Stack spacing={1} sx={{width:'230px', display:'flex', justifyContent:'center'}}>
                    <img style={{width: '90%'}} src='images/laurier_footer.png'></img>
                </Stack>
                
                <Stack spacing={1} sx={{display:'flex', justifyContent:'center', alignContent: 'center', alignItems: 'center'}}>
                    <Typography sx={{fontWeight: 'bold', color: 'white', fontSize:20}}>How Is AI Being Used In Education?</Typography>
                    <Button 
                        variant='contained' 
                        size='small' 
                        onClick={() => setTimeout(() => {
                            window.open('https://wlu.ca1.qualtrics.com/jfe/form/SV_41LzUYudspyYajk', '_blank');
                        }, 200)}
                        sx={{backgroundColor: 'purple.light', borderRadius: 30, border: '2px solid white', fontWeight: 900, fontSize: 18, width:'250px'}}
                    >
                        Participate in survey!
                    </Button>
                </Stack>

                <Stack spacing={1} sx={{width:'270px', display:'flex', justifyContent:'center', alignItems:'end'}}>
                    <Typography sx={{textDecoration: 'none', color: 'white', fontSize:20}}>CONTACT US</Typography>
                    <Stack direction={'row'} spacing={1}>
                        <Typography sx={{color: 'white', fontSize: 16}}>Dr. Ewart -</Typography>
                        <Typography className='mail' component='a' href='mailto: kewart@wlu.ca' sx={{color: 'white', fontSize: 16}} >kewart@wlu.ca</Typography>
                    </Stack>
                    <Stack direction={'row'} spacing={1}>
                        <Typography sx={{color: 'white', fontSize: 16}}>Dr. Mueller -</Typography>
                        <Typography className='mail' component='a' href='mailto: jmueller@wlu.ca' sx={{color: 'white', fontSize: 16}}>jmueller@wlu.ca</Typography>
                    </Stack>
                    <Stack direction={'row'} spacing={1}>
                        <Typography sx={{color: 'purple.light', fontSize: 14, fontStyle:'italic'}}>Website Design by Lauryne Assa</Typography>
                    </Stack>
                </Stack>
                
                
            </Stack>
            
        </Container>
    )
}
export default Footer;