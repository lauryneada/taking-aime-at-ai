import { Box, Typography, IconButton } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function FilledBoxedText(props) {
    return (
        <Box
            sx={{
                background: props.color || '#9c5ac8',
                opacity: 0.7,
                borderRadius: '24px',
                width: '70%',
                height: '80px',
                margin: '0 auto',
                padding: '24px 32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxSizing: 'border-box',
                boxShadow: 'none',
            }}
        >
            <Box>
                <Typography
                    variant="body2"
                    sx={{
                        color: 'white',
                        fontWeight: 900,
                        lineHeight: 1.2,
                    }}
                >
                    {props.title}
                </Typography>
                <Typography
                    variant="subtitle1"
                    sx={{
                        color: 'white',
                        fontWeight: 400,
                        lineHeight: 1.2,
                    }}
                >
                    {props.description}
                </Typography>
            </Box>
            <IconButton
                sx={{
                    color: 'white',
                    fontSize: 40,
                    p: 2,
                    '&:hover': {
                        transform: 'scale(1.2)',
                        background: 'none', // Remove background on hover
                    },
                }}
                href={props.link}
                target="_blank"
            >
                <OpenInNewIcon sx={{ fontSize: 35 }} />
            </IconButton>
        </Box>
    );
}

export default FilledBoxedText;