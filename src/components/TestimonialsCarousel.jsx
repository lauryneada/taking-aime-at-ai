import React, { useState, useEffect } from 'react';
import { Typography, Paper, IconButton, Box } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Testimonials() {
    const items = [
        { 
            desc: "It is essential that we provide our pre-service teachers with the tools they need to both use AI and help develop the AI related habits of mind of their future students. As a framework, I believe that we have a responsibility to teacher candidates and their future students to provide them with the tools they need to navigate the ever-changing landscape of education." ,
            name: "Dr. Jennifer Straub, Associate Dean, Bachelor of Education Wilfrid Laurier University",
        },
        { 
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." ,
            name: "Another participant",
        },
        { 
            desc: "Another testimonial goes here!",
            name: "Participant at AI Literacy Session",
        },
    ];

    const [index, setIndex] = useState(0);

    const handlePrev = () => {
        setIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
        }, 30000); 
        return () => clearTimeout(timer);
    }, [index, items.length]);

    return (
        <Box display="flex" alignItems="center" justifyContent="center">
            <IconButton onClick={handlePrev} sx={{paddingRight: 2}}>
                <ArrowBackIosNewIcon fontSize='large' sx={{color: 'purple.main'}}/>
            </IconButton>
            <Box 
                sx={{ 
                    width: '900px', 
                    height: '250px' ,
                    padding: 5, 
                    border: '4px solid #412C88', 
                    borderRadius: '20px', 
                    display: 'flex', 
                    flexDirection:'column', 
                    gap: 2, 
                    alignItems: 'center', 
                    justifyContent: 'center'
                }}
            >
                <Typography variant='body1' sx={{fontSize: 18, textAlign: 'center'}}>{items[index].desc}</Typography>
                <Typography variant='body1' sx={{fontSize: 16, textAlign: 'center'}}>-{items[index].name}</Typography>
            </Box>
            <IconButton onClick={handleNext} sx={{paddingLeft: 2}}>
                <ArrowForwardIosIcon fontSize='large' sx={{color: 'purple.main'}}/>
            </IconButton>
        </Box>
    );
}

export default Testimonials;