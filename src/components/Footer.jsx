import React, { useState } from 'react';
import {Container, Stack, Typography, Button, Box} from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import '../index.scss'

function Footer() {
    return (
        <Container maxWidth={false} disableGutters sx={{backgroundColor: '#A088BF', padding: 3, width:'100vw'}}>
            <Stack direction={'row'}>
                <Stack sx={{display:'flex', alignItems:'start', width:'325.72px'}}>
                    <img className='logo' src='images/laurier_logo.png'></img>
                </Stack>
                
                <Stack spacing={1} sx={{display:'flex', alignItems:'center', justifyContent: 'center', flexGrow: 2}}>
                    <Typography sx={{fontWeight: 'bold', color: 'white', fontSize:20}}>How Is AI Being Used In Education?</Typography>
                    <Button 
                        variant='contained' 
                        size='small' 
                        onClick={() => setTimeout(() => {
                            window.open('https://wlu.ca1.qualtrics.com/jfe/form/SV_41LzUYudspyYajk', '_blank');
                        }, 200)}
                        sx={{backgroundColor: '#41127C', borderRadius: 30, fontWeight: 900, fontSize: 18, paddingRight: 4, paddingLeft: 4}}
                    >
                        Participate in survey!
                    </Button>
                </Stack>

                <Stack spacing={1} sx={{alignItems:'end', display:'flex', justifyContent: 'center', flexGrow:1}}>
                    <Typography sx={{textDecoration: 'none', color: 'white', fontSize:20}}>CONTACT US</Typography>
                    <Stack direction={'row'} spacing={1}>
                        <Typography className='mail' component='a' href='mailto: kewart@wlu.ca' sx={{color: 'white', fontSize: 18}} >kewart@wlu.ca</Typography>
                        {/* <MailOutlineIcon sx={{color:'white'}}/> */}
                    </Stack>
                    <Stack direction={'row'} spacing={1}>
                        <Typography className='mail' component='a' href='mailto: jmueller@wlu.ca' sx={{color: 'white', fontSize: 18}}>jmueller@wlu.ca</Typography>
                        {/* <MailOutlineIcon sx={{color:'white'}}/> */}
                    </Stack>
                </Stack>
                
                
            </Stack>
            
        </Container>
    )
}
export default Footer;