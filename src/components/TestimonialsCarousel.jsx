import React, { useState, useEffect } from 'react';
import { Typography, Paper, IconButton, Box } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import items from '../consts/testimonialsData';

function Testimonials() {

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
            <IconButton onClick={handlePrev} sx={{paddingRight: 1}}>
                <ArrowBackIosNewIcon fontSize='large' sx={{color: 'purple.main'}}/>
            </IconButton>
            <Box 
                sx={{ 
                    width: { md: '1000px'}, 
                    height: {xs: '600px', sm: '500px', md: '400px', lg: '275px'} ,
                    padding: {xs: 3, sm: 3, md: 2, lg: 5}, 
                    border: '4px solid #412C88', 
                    borderRadius: '20px', 
                    display: 'flex', 
                    flexDirection:'column', 
                    gap: 2, 
                    alignItems: 'center', 
                    justifyContent: 'center'
                }}
            >
                <Typography variant='body1' sx={{fontSize: 18, textAlign: 'center'}}>"{items[index].desc}"</Typography>
                {items[index].name ?
                 <Typography variant='body1' sx={{fontSize: 16, textAlign: 'center'}}>-{items[index].name}</Typography> : null}
            </Box>
            <IconButton onClick={handleNext} sx={{paddingLeft: 1}}>
                <ArrowForwardIosIcon fontSize='large' sx={{color: 'purple.main'}}/>
            </IconButton>
        </Box>
    );
}

export default Testimonials;