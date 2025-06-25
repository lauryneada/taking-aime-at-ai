import React, { useState } from 'react';
import { Typography, Paper, IconButton, Box } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Testimonials() {
    const items = [
        { 
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." ,
            name: "Participant at AI Literacy Session",
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

    return (
        <Box display="flex" alignItems="center" justifyContent="center">
            <IconButton onClick={handlePrev} sx={{paddingRight: 2}}>
                <ArrowBackIosNewIcon fontSize='large' sx={{color: '#41127C'}}/>
            </IconButton>
            <Box 
                sx={{ 
                    width: '800px', 
                    height: '250px' ,
                    padding: 5, 
                    border: '4px solid #41127C', 
                    borderRadius: '20px', 
                    display: 'flex', 
                    flexDirection:'column', 
                    gap: 2, 
                    alignItems: 'center', 
                    justifyContent: 'center'
                }}
            >
                <Typography variant='body1' sx={{textAlign: 'center'}}>{items[index].desc}</Typography>
                <Typography variant='body1' sx={{fontSize: 16, textAlign: 'center'}}>-{items[index].name}</Typography>
            </Box>
            <IconButton onClick={handleNext} sx={{paddingLeft: 2}}>
                <ArrowForwardIosIcon fontSize='large' sx={{color: '#41127C'}}/>
            </IconButton>
        </Box>
    );
}

export default Testimonials;