import React from "react"
import {Container , Typography, Box, Button, IconButton, Stack} from "@mui/material";
import {useNavigate} from 'react-router-dom';
import '../index.scss';
import Testimonials from '../components/TestimonialsCarousel';
import { CardMedia } from "@mui/material";

export default function Home() {
    const navigate = useNavigate();

    const handleLearnMoreClick = () => {
        setTimeout(() => {
            navigate('/aime');
        }, 250);
    };

    const handleWorkshopClick = () => {
        navigate('/resource-centre?tab=0')
    };

    const handleToolsClick = () => {
        navigate('/resource-centre?tab=3')
    };
    return (
        <>
        <Container maxWidth={false} disableGutters sx={{
            backgroundColor: 'purple.main',
            minHeight: { xs: '350px', md: '1000px', xl: '1000px'},
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            pb: 0,
            m: 0,
            px: 0,
        }}>
            <Box sx={{ position: 'relative', width: 'fit-content', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant='h1' className='title' sx={{position: 'relative', zIndex: 1, fontSize: { xs: 36, sm: 50, md: 96}, textAlign: 'center', lineHeight: 1.1}}>
                    Taking 
                    <span style={{color: ' #DB6463'}}> A</span>
                    <span style={{color: '#4284F3'}}>I</span>
                    <span style={{color: '#6dd040'}}>M</span>
                    <span style={{color: '#FF9900'}}>E </span>
                    at AI
                </Typography>
                <Box
                    sx={{
                        position: 'absolute',
                        left: '50%',
                        bottom: 0,
                        transform: 'translate(-50%, 50%)',
                        bgcolor: 'purple.main',
                        px: { xs: 1, sm: 2 },
                        py: { xs: 1, sm: 2 },
                        zIndex: 2,
                        textAlign: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        gap: 1,
                    }}
                >
                    <Typography variant='h3' sx={{ color: 'white', whiteSpace: 'nowrap', fontSize: { xs: 11, sm: 11, md: 28 } }}>
                        INTEGRATING ARTIFICIAL INTELLIGENCE IN TEACHER EDUCATION
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ mt: { xs: 4, md: 10 }, mb: 2, width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ width: { xs: '50%', sm: '50%', md: '50%', lg: '50%', xl: '40%'}, boxShadow: 3, borderRadius: 2, overflow: 'hidden' }}>
                    <CardMedia
                        sx={{ width: '100%', aspectRatio: '16/9', backgroundColor: 'black' }}
                    >
                        <iframe 
                            width="100%" 
                            height="100%" 
                            src="https://www.youtube.com/embed/3ZXjOaw_01M?si=G3m3U3Iq77e_27R3&autoplay=1" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen>  
                        </iframe>
                    </CardMedia>
                </Box>
            </Box>
        </Container>
        <Container maxWidth='xl' sx={{ display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center', px: { xs: 2, md: 10 }, py: { xs: 4, md: 10 } }}>
            <Typography variant='h2' sx={{ fontSize: { xs: 28, md: 36, xl: 60}, textAlign: 'center' }}>The AIME Framework</Typography>
            <Typography variant='body1' sx={{textAlign: 'center', px: { xs: 1, md: 6 }, py: 2}}>A complete and actionable path for equity-driven, interdisciplinary, and assessment-literate AI integration within teacher education.</Typography>
            <Box sx={{padding:3, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}><img className='aime-visual' src='images/AIME_visual.png' style={{ maxWidth: '100%', height: 'auto', borderRadius: 16 }}/></Box>
            <Button 
                variant='contained' 
                size='large' 
                onClick={handleLearnMoreClick}
                sx={{backgroundColor: 'purple.main', borderRadius: 30, minWidth: 120, minHeight: 45, fontWeight: 900, fontSize: { xs: 16, md: 18 , xl: 25}, mt: 2}}
            >
                Learn More
            </Button>
        </Container>
        <Container maxWidth={false} disableGutters sx={{ 
            backgroundColor: 'purple.light', 
            minHeight: { xs: 'auto', md: '690px' },
            width: '100vw',
            display: 'flex', 
            flexDirection:'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            py: { xs: 4, md: 15 },
            m: 0,
            }}>
            <Typography variant='h2' sx={{color:'white', fontSize: { xs: 28, md: 36, xl: 60}, textAlign: 'center', mb: { xs: 2, md: 4 }}}>Resources</Typography>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 4, md: 20 }} sx={{margin:4, width: '100%', alignItems: 'center', justifyContent: 'center'}}>
                <Box size='md' sx={{ display: 'flex', justifyContent: 'center' }}>
                    <IconButton onClick={handleWorkshopClick} sx={{ p: 0 }}>
                        <img className="imgButton" src="images/workshops.png" style={{ height: 'auto' }}></img>
                    </IconButton>
                </Box>
                <Box size='md' sx={{ display: 'flex', justifyContent: 'center' }}>
                    <IconButton onClick={handleToolsClick} sx={{ p: 0 }}>
                        <img className="imgButton" src="images/tools.png" style={{ height: 'auto' }}></img>
                    </IconButton>
                </Box>
            </Stack>
        </Container>
        <Container maxWidth={false} disableGutters sx={{ 
            width: '100vw',
            display: 'flex', 
            flexDirection:'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            px: { xs: 1, md: 5 },
            py: { xs: 2, md: 5 },
            overflowX: 'hidden'}}>
            <Typography variant='h2' sx={{ fontSize: { xs: 28, md: 36, xl: 60}, textAlign: 'center', mb: { xs: 2, md: 4 } }}>Impact</Typography>
            <Stack direction={{ xs: 'column', md: 'row' }} sx={{margin: 0, width: '100%', alignItems: 'center', justifyContent: 'center'}} spacing={{ xs: 4, md: 5 }}>
                <Box sx={{ position: 'relative', left: { xs: 0, md: '-25px',lg: '-100px', xl: '-150px'}, mb: { xs: 2, md: 0 }, display: 'flex', justifyContent: 'center'} }>
                    <img className="impact-pic" src="images/impact_picture.png" style={{borderRadius: 16}}/>
                </Box>
                <Stack spacing={4} sx={{ width: { xs: '350px', md: '900px' } }} >
                    <Box sx={{ background: 'linear-gradient(60deg, #9c5ac8, #ffe2ea)', position:'relative', right: { xs: 0, lg: -50, xl: -100 }, padding: {xs: 1, md: 2, lg: 4, xl: 5}, borderRadius: '20px', width:'100%' }}>
                        <Box sx={{display: 'flex', alignItems: 'center', gap: 1, flexDirection: { xs: 'column', md: 'row' }}}>
                            <Typography variant='h4' sx={{alignSelf: 'center', fontSize: {xs: 28, md: 80, lg: 150, xl: 180}}}>8+</Typography>
                            <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column', gap: 1}}>
                                <Typography variant='h3' sx={{fontWeight: 900, color: 'purple.main', fontSize: { xs: 18, md: 28 }, textAlign: 'center'}}>AI faculty workshops</Typography>
                                <Typography variant='body1' sx={{ fontSize: { xs: 14, md: 18, lg: 18, xl: 25}, textAlign: 'center'}}>
                                    introducing foundational AI concepts, raising critical questions around educational ethics and equity, and encouraging open dialogue among faculty
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{background: 'linear-gradient(0deg, #4284f3, #413b9f)', position:'relative', right: { xs: 0, md: 40 }, padding: {xs: 1, md: 2, lg: 3, xl: 5}, borderRadius: '20px', width:'100%' }}>
                        <Box sx={{display: 'flex', alignItems: 'center', gap: 1, flexDirection: { xs: 'column', md: 'row' }}}>
                            <Typography variant='h4' sx={{alignSelf: 'center', color: 'white',paddingTop:1, fontSize: { xs: 28, md: 80, lg: 150, xl: 180 }}}>10</Typography>
                            <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column', gap: 1, justifyContent: 'center'}}>
                                <Typography variant='h3' sx={{fontWeight: 900, paddingTop: 1, fontSize: { xs: 18, md: 28 }, color: 'white', textAlign:'center' }}>Curricula redesigned</Typography>
                                <Typography variant='body2' sx = {{color:'white', fontSize: { xs: 14, md: 16, lg: 18, xl: 25}, textAlign:'center'}}>introducing foundational AI concepts, raising critical questions around educational ethics and equity, and encouraging open dialogue among faculty</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Stack>
            </Stack>
        </Container>
        <Container sx={{px: { xs: 0, md: 10 }, pb: { xs: 4, md: 12 }, pt: { xs: 2, md: 5 }}}>
           <Testimonials />
        </Container>
        </>
    );
}