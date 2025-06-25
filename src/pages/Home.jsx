import React from "react"
import {Container , Typography, Box, Button, IconButton, Stack} from "@mui/material";
import {useNavigate} from 'react-router-dom';
import '../index.scss';
import Testimonials from '../components/TestimonialsCarousel';

export default function Home() {
    const navigate = useNavigate();

    const handleLearnMoreClick = () => {
        setTimeout(() => {
            navigate('/aime');
        }, 250);
    };

    const handleWorkshopClick = () => {
        navigate('/resource-center?tab=0')
    };

    const handleToolsClick = () => {
        navigate('/resource-center?tab=1')
    };
    return (
        <>
        <Container maxWidth={false} disableGutters sx={{
            backgroundColor: '#41127C',
            minHeight: '690px',
            width: '100vw',
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
                <Typography variant='h1' className='title' sx={{position: 'relative', zIndex: 1}}>
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
                        bgcolor: '#41127C',
                        px: 4,
                        py: 2,
                        zIndex: 2,
                        textAlign: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        gap: 1,
                    }}
                >
                    <Typography variant='h3' sx={{ color: 'white', whiteSpace: 'nowrap' }}>
                        INTEGRATING ARTIFICIAL INTELLIGENCE IN TEACHER EDUCATION
                    </Typography>
                </Box>
            </Box>
        </Container>
        <Container maxWidth='xl' sx={{ display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center', padding: 10}}>
            <Typography variant='h2'>The AIME Framework</Typography>
            <Typography variant='body1' sx={{textAlign: 'center', paddingRight: 6, paddingLeft: 6}}>A complete and actionable path for equity-driven, interdisciplinary, and assessment-literate AI integration within teacher education.</Typography>
            <Box sx={{padding:3, display: 'flex', alignItems: 'center'}}><img className='aime-visual' src='images/AIME_visual.png'/></Box>
            <Button 
                variant='contained' 
                size='large' 
                onClick={handleLearnMoreClick}
                sx={{backgroundColor: '#41127C', borderRadius: 30, minWidth: 155, minHeight: 55, fontWeight: 900, fontSize: 18}}
            >
                Learn More
            </Button>
        </Container>
        <Container maxWidth={false} disableGutters sx={{
            backgroundColor: '#A088BF', 
            minHeight: '690px',
            width: '100vw',
            display: 'flex', 
            flexDirection:'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            padding: 15,
            m: 0,
            }}>
            <Typography variant='h2' sx={{color:'white'}}>Resources</Typography>
            <Stack direction='row' spacing={20} sx={{margin:4}}>
                <Box size='md'>
                    <IconButton onClick={handleWorkshopClick}>
                        <img className="imgButton" src="images/workshops.png"></img>
                    </IconButton>
                </Box>
                <Box size='md'>
                    <IconButton onClick={handleToolsClick}>
                        <img className="imgButton" src="images/tools.png"></img>
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
            padding: 5, 
            overflowX: 'hidden'}}>
            <Typography variant='h2'>Impact</Typography>
            <Stack direction='row' sx={{margin: 0}}>
                <Box sx={{position: 'relative', left: '-100px'}}>
                    <img className="impact-pic" src="images/impact_picture.jpg"></img>
                </Box>
                <Stack spacing={8} >
                    <Box sx={{ background: 'linear-gradient(60deg, #9c5ac8, #ffe2ea)', position:'relative', right: '-150px', padding: 2, borderRadius: '20px', width:'900px'}}>
                        <Box sx={{display: 'flex', alignItems: 'flex-start', gap: 2}}>
                            <Typography variant='h4' sx={{alignSelf: 'center'}}>8+</Typography>
                            <Box sx={{display: 'flex', alignItems: 'flex-start', flexDirection: 'column', paddingRight: 20, gap: 1}}>
                                <Typography variant='h3' sx={{fontWeight: 900, color: '#41127C'}}>AI faculty workshops</Typography>
                                <Typography variant='body1'>
                                    introducing foundational AI concepts, raising critical questions around educational ethics and equity, and encouraging open dialogue among faculty
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{background: 'linear-gradient(0deg, #4284f3, #413b9f)', position:'relative', right: '-15px', padding: 2, borderRadius: '20px', width:'900px'}}>
                        <Box sx={{display: 'flex', alignItems: 'flex-start', gap: 2}}>
                            <Typography variant='h4' sx={{alignSelf: 'center', color: 'white',paddingTop:1}}>10</Typography>
                            <Box sx={{display: 'flex', alignItems: 'flex-start', flexDirection: 'column', paddingRight: 7, gap: 2, justifyContent: 'center'}}>
                                <Typography variant='h3' sx={{fontWeight: 900, paddingTop: 1}}>Curricula redesigned</Typography>
                                <Typography variant='body2' sx = {{color:'white'}}>introducing foundational AI concepts, raising critical questions around educational ethics and equity, and encouraging open dialogue among faculty</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Stack>

            </Stack>
            
        </Container>

        <Container sx={{paddingRight: 10, paddingLeft:10, paddingBottom:12, paddingTop: 5}}>
           <Testimonials />
        </Container>

        </>
    );
}