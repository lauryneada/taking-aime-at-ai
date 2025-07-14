import React from 'react';
import { Container, Stack, Typography, Button, Box, useMediaQuery, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import '../index.scss'

function Footer() {
    const theme = useTheme();
    const isCompact = useMediaQuery('(max-width:900px)');

    return (
        <Container maxWidth={false} disableGutters sx={{ backgroundColor: 'purple.main', padding: 3, width: '100vw' }}>
            {isCompact ? (
                <Stack spacing={4} sx={{ alignItems: 'center', width: '100%' }}>
                    <Box sx={{ width: '90%', display: 'flex', justifyContent: 'center' }}>
                        <img style={{ width: '220px', maxWidth: '100%' }} src='images/laurier_logo.png' alt='Laurier Logo' />
                    </Box>
                    <Stack spacing={1} sx={{ alignItems: 'center', width: '100%' }}>
                        <Typography sx={{ fontWeight: 'bold', color: 'white', fontSize: 20, textAlign: 'center' }}>
                            How Is AI Being Used In Education?
                        </Typography>
                        <Button
                            variant='contained'
                            size='small'
                            onClick={() => setTimeout(() => {
                                window.open('https://wlu.ca1.qualtrics.com/jfe/form/SV_41LzUYudspyYajk', '_blank');
                            }, 200)}
                            sx={{ backgroundColor: 'purple.light', borderRadius: 30, border: '2px solid white', fontWeight: 900, fontSize: 18, width: '250px' }}
                        >
                            Participate in survey!
                        </Button>
                    </Stack>
                    <Stack spacing={1} sx={{ width: '100%', alignItems: 'center', mt: 2 }}>
                        <Typography sx={{ textDecoration: 'none', color: 'white', fontSize: 20, textAlign: 'center' }}>CONTACT US</Typography>
                        <Stack direction='row' spacing={2} sx={{ justifyContent: 'center', width: '100%' }}>
                            <Typography sx={{ color: 'white', fontSize: 16 }}>Dr. Ewart - <Link href='mailto: kewart@wlu.ca' sx={{ color: 'white', fontSize: 16 }}>kewart@wlu.ca</Link></Typography>
                            <Typography sx={{ color: 'white', fontSize: 16 }}>Dr. Mueller - <Link href='mailto: jmueller@wlu.ca' sx={{ color: 'white', fontSize: 16 }}>jmueller@wlu.ca</Link></Typography>
                        </Stack>
                        <Typography sx={{ color: 'purple.light', fontSize: 14, fontStyle: 'italic', mt: 1, textAlign: 'center' }}>
                            Website Design by Lauryne Assa
                        </Typography>
                    </Stack>
                </Stack>
            ) : (
                <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
                    <Stack spacing={1} sx={{ width: '230px', display: 'flex', justifyContent: 'center' }}>
                        <img style={{ width: '90%' }} src='images/laurier_footer.png' alt='Laurier Logo' />
                    </Stack>
                    <Stack spacing={1} sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                        <Typography sx={{ fontWeight: 'bold', color: 'white', fontSize: 20 }}>How Is AI Being Used In Education?</Typography>
                        <Button
                            variant='contained'
                            size='small'
                            onClick={() => setTimeout(() => {
                                window.open('https://wlu.ca1.qualtrics.com/jfe/form/SV_41LzUYudspyYajk', '_blank');
                            }, 200)}
                            sx={{ backgroundColor: 'purple.light', borderRadius: 30, border: '2px solid white', fontWeight: 900, fontSize: 18, width: '250px' }}
                        >
                            Participate in survey!
                        </Button>
                    </Stack>
                    <Stack spacing={1} sx={{ width: '270px', display: 'flex', justifyContent: 'center', alignItems: 'end' }}>
                        <Typography sx={{ textDecoration: 'none', color: 'white', fontSize: 20 }}>CONTACT US</Typography>
                        <Typography sx={{ color: 'white', fontSize: 16 }}>Dr. Ewart - <Link href='mailto: kewart@wlu.ca' sx={{ color: 'white', fontSize: 16 }}>kewart@wlu.ca</Link></Typography>
                        <Typography sx={{ color: 'white', fontSize: 16 }}>Dr. Mueller - <Link href='mailto: jmueller@wlu.ca' sx={{ color: 'white', fontSize: 16 }}>jmueller@wlu.ca</Link></Typography>
                        <Typography sx={{ color: 'purple.light', fontSize: 14, fontStyle: 'italic' }}>Website Design by Lauryne Assa</Typography>
                    </Stack>
                </Stack>
            )}
        </Container>
    );
}
export default Footer;