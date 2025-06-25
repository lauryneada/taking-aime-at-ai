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
                padding: 2,
                borderRadius: '20px',
                width: '990px',
                backgroundColor: open ? '#A088BF' : 'white',
                color: open ? 'white' : 'black',
                transition: 'background 0.2s, color 0.2s',
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                minHeight: '60px',
                position: 'relative',
            }}
        >
            <Box sx={{ flexGrow: 1 }}>
                <Typography
                    variant='body1'
                    fontSize='35px'
                    sx={{ color: open ? 'white' : '#41127C' }}
                >
                    {props.title || props.text}
                </Typography>
                <Collapse in={open}>
                    <Box component="ul" sx={{ mt: 2, color: 'white', fontSize: 22, pl: 3 }}>
                        {props.more.map((item, idx) => (
                            <li key={idx} style={{ marginBottom: 8 }}>
                                <Typography variant='body2' component="span" sx={{ color: 'white', fontSize: 22 }}>
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