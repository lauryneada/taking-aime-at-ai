import React, { useState } from 'react';
import { Typography, Box, IconButton, Collapse } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RemoveIcon from '@mui/icons-material/Remove';

function BoxedText(props) {
    const [open, setOpen] = useState(false);

    return (
        <Box
            sx={{
                border: '3px solid #A088BF',
                padding: { xs: 1, md: 2 },
                borderRadius: '20px',
                width: { xs: '90vw', sm: '700px', md: '990px' },
                maxWidth: '100vw',
                backgroundColor: open ? '#A088BF' : 'white',
                color: open ? 'white' : 'black',
                transition: 'background 0.2s, color 0.2s',
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                minHeight: { xs: '40px', md: '60px' },
                position: 'relative',
                boxSizing: 'border-box',
            }}
        >
            <Box sx={{ flexGrow: 1 }}>
                <Typography
                    variant='body1'
                    fontSize={{ xs: 18, sm: 25, md: 35 }}
                    sx={{ color: open ? 'white' : 'purple.main', wordBreak: 'break-word' }}
                >
                    {props.title || props.text}
                </Typography>
                <Collapse in={open}>
                    <Box component="ul" sx={{ mt: 2, color: 'white', fontSize: { xs: 14, sm: 18, md: 22 }, pl: 3 }}>
                        {props.more.map((item, idx) => (
                            <li key={idx} style={{ marginBottom: 8 }}>
                                <Typography variant='body2' component="span" sx={{ color: 'white', fontSize: { xs: 14, sm: 18, md: 22 } }}>
                                    {item}
                                </Typography>
                            </li>
                        ))}
                    </Box>
                </Collapse>
            </Box>
            <IconButton
                onClick={e => {
                    e.stopPropagation();
                    setOpen(prev => !prev);
                }}
                sx={{
                    color: open ? 'white' : '#A088BF',
                    transition: 'transform 0.2s',
                    ml: 2,
                }}
            >
                {open ? <RemoveIcon fontSize="large" /> : <KeyboardArrowDownIcon fontSize="large" />}
            </IconButton>
        </Box>
    );
}

export default BoxedText;