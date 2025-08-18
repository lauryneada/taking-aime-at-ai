import { Box, Typography, IconButton } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function FilledBoxedText(props) {
    return (
        <Box
            sx={{
                background: props.color || '#9c5ac8',
                opacity: 0.7,
                borderRadius: '24px',
                width: { xs: '90vw', sm: '80vw', md: '70%' },
                height: 'auto',
                margin: '0 auto',
                padding: { xs: '16px 12px', sm: '20px 24px', md: '24px 32px' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxSizing: 'border-box',
                boxShadow: 'none',
                flexWrap: 'wrap',
            }}
        >
            <Box sx={{ minWidth: 0 }}>
                <Typography
                    variant="body2"
                    sx={{
                        color: props.fontColor || 'white',
                        fontWeight: 900,
                        lineHeight: 1.2,
                        fontSize: { xs: 16, sm: 18, md: 22 },
                        wordBreak: 'break-word',
                    }}
                >
                    {props.title}
                </Typography>
                <Typography
                    variant="subtitle1"
                    sx={{
                        color: props.fontColor || 'white',
                        fontWeight: 400,
                        lineHeight: 1.2,
                        fontSize: { xs: 14, sm: 16, md: 18 },
                        wordBreak: 'break-word',
                    }}
                >
                    {props.description}
                </Typography>
            </Box>
            { 
                props.link &&
                <IconButton
                    sx={{
                        color: 'white',
                        fontSize: { xs: 28, md: 40 },
                        p: { xs: 1, md: 2 },
                        '&:hover': {
                            transform: 'scale(1.2)',
                            background: 'none',
                        },
                    }}
                    href={props.link}
                    target="_blank"
                >
                    <OpenInNewIcon sx={{ fontSize: { xs: 24, md: 35 } }} />
                </IconButton>
            }
            
        </Box>
    );
}

export default FilledBoxedText;