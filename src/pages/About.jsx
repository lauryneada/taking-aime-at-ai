import {React, useState} from "react"
import {Container , Typography, Button, Stack, Box} from "@mui/material";
import {useNavigate} from 'react-router-dom';

function About() {

    const [hovered, setHovered] = useState(false);
    const [hovered1, setHovered1] = useState(false);

    const handleExploreClick = () => {
        setTimeout(() => {
            window.open('https://c21canada.org/integrating-ai-education-transforming-learning-2025/#:~:text=AIME%3A%20A%20Framework%20and%20Learning%20Foundation%20for%20Ethical%20and%20Inclusive%20AI%20Integration%20in%20Teacher%20Education', '_blank');
        }, 200)
    };

    const handleIgniteClick = () => {
        setTimeout(() => {
            window.open('https://www.wevideo.com/view/3798105556', '_blank');
        }, 200)
    };

    const handlePDFClick = () => {
        setTimeout(() => {
            window.open('http://c21canada.org/wp-content/uploads/2025/05/ON-WLU-PDF-AIUseCase-2025.pdf', '_blank');
        }, 200)
    };

    const handlePodcastClick = () => {
        setTimeout(() => {
            window.open('http://c21canada.org/wp-content/uploads/2025/06/ON-WLU-Podcast-AIUseCase-2025.mp4', '_blank');
        }, 200)
    };


    return (
        <>
        <Container maxWidth='lg' sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 20, gap: 3, textAlign: 'center', paddingBottom: 10}}>
            <Typography variant='h2'>Project Description</Typography>
            <Typography variant='body1'>AI’s rapid rise demanded attention in teacher education.</Typography>
            <Typography variant='body1' sx={{fontWeight: 'bold'}}>But how do we prepare future educators ethically?</Typography>
            <Typography variant='body1'>This project, Taking AIME at AI: Integrating AI in Teacher Education, introduces the AIME framework, a research-informed and equity-centered model for embedding AI literacy in teacher education at Wilfrid Laurier University and beyond.</Typography>
        </Container>
        <Container maxWidth='lg' sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 20, gap: 3, textAlign: 'center'}}>
            <Typography variant='h2' color='#9c5ac8'>Laurier’s AI Use Case</Typography>
            <Typography variant='body1' color='#9c5ac8'>We joined Canada 21 and Dell to explore this question through a national Use Case initiative.​</Typography>
            <Typography variant='body1' color='#9c5ac8'>At the heart of Laurier’s AI Use Case is a commitment to embedding AI literacy and ethical practice into teacher education in a way that aligns with the Faculty of Education’s values: <b>social justice</b>, <b>inclusion</b>, <b>critical inquiry</b>, <b>community partnership</b>, <br /> and <b>pedagogical integrity</b>. </Typography>
            <Stack direction='row' spacing={2} sx={{justifyContent: 'center', padding: 3}}>
                <Button 
                    variant='contained' 
                    size='large' 
                    onClick={handleIgniteClick}
                    sx={{backgroundColor: 'purple.bright', borderRadius: 30, minWidth: 155, minHeight: 55, fontWeight: 900, fontSize: 18}}
                >
                    Ignite Presentation
                </Button>
                <Button 
                    variant='contained' 
                    size='large' 
                    onClick={handlePDFClick}
                    sx={{backgroundColor: 'purple.bright', borderRadius: 30, minWidth: 155, minHeight: 55, fontWeight: 900, fontSize: 18}}
                >
                    PDF
                </Button>
                <Button 
                    variant='contained' 
                    size='large' 
                    onClick={handlePodcastClick}
                    sx={{backgroundColor: 'purple.bright', borderRadius: 30, minWidth: 155, minHeight: 55, fontWeight: 900, fontSize: 18}}
                >
                    Podcast
                </Button>
                <Button 
                    variant='contained' 
                    size='large' 
                    onClick={handleExploreClick}
                    sx={{backgroundColor: 'purple.light', borderRadius: 30, minWidth: 155, minHeight: 55, fontWeight: 900, fontSize: 18}}
                >
                    Explore Other Use Cases
                </Button>
            </Stack>
            
        </Container>
        <Container maxWidth='xl' sx={{padding: 20, textAlign: 'center'}}>
            <Typography variant='h2'>The Team</Typography>
            <Stack direction='row' spacing={40} sx={{justifyContent:'center', padding: 10}}>
                <Box>
                    <Box
                        size='md'
                        sx={{
                            width: 300,
                            height: 300,
                            borderRadius: 3,
                            overflow: 'hidden',
                            boxShadow: hovered ? 3 : 1,
                            transition: 'box-shadow 0.2s'
                        }}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    >
                        {!hovered ? (
                            <img
                                src="images/dr-julie-mueller.png"
                                alt="Dr. Julie Mueller"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        ) : (
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    background: '#412C88',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    flexDirection: 'column',
                                    p: 2
                                }}
                            >
                                <Typography variant='subtitle1'>Dr. Julie Mueller is a Professor in the Faculty of Education at Wilfrid Laurier University. She has a PhD in Developmental Psychology and more than 30 years of experience in teaching from Kindergarten to Post-secondary. </Typography>
                            </Box>
                        )}
                    </Box>
                    <Typography variant='subtitle1' sx={{padding: 2, color: '#412C88' }}>Dr. Julie Mueller</Typography>
                </Box>
                <Box>
                    <Box
                        size='md'
                        sx={{
                            width: 300,
                            height: 300,
                            borderRadius: 3,
                            overflow: 'hidden',
                            boxShadow: hovered ? 3 : 1,
                            transition: 'box-shadow 0.2s'
                        }}
                        onMouseEnter={() => setHovered1(true)}
                        onMouseLeave={() => setHovered1(false)}
                    >
                        {!hovered1 ? (
                            <img
                                src="images/dr-keri-ewart.png"
                                alt="Dr. Keri Ewart"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        ) : (
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    background: '#412C88',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    flexDirection: 'column',
                                    p: 2
                                }}
                            >
                                <Typography variant='subtitle1' sx={{padding: 1}}>Dr. Keri Ewart is an assistant professor in the Faculty of Education at Wilfrid Laurier University, focusing on AI in education, culturally sustaining pedagogy, and literacy education. </Typography>
                            </Box>
                        )}
                    </Box>
                    <Typography variant='subtitle1' sx={{padding: 2, color: '#412C88'}}>Dr. Keri Ewart</Typography>
                </Box>
            </Stack>
        </Container>
        </>
    );
}

export default About;