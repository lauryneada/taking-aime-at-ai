import React, { useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const frameworkData = [
    {
        label: "Adaptive and Differentiated Learning",
        color: "#DB6463",
        desc: "Centers UDL, accessibility, and learner-driven AI tools to support differentiated instruction and feedback.",
        link: "/a"
    },
    {
        label: "Inclusive & Culturally Responsive AI",
        color: "#4284F3",
        desc: "Embeds culturally sustaining pedagogies and anti-bias approaches, co-designed with historically marginalized communities.",
        link: "/i"
    },
    {
        label: "Multiple Critical AI Literacies",
        color: "#6dd040",
        desc: "Prepares teacher candidates to critically understand, teach, and evaluate AI in educational settings.",
        link: "/m"
    },
    {
        label: "Experimental, Ethical, Evolving AI Practices",
        color: "#FF9900",
        desc: "Supports hands-on learning, ethical reasoning, and iterative professional growth.",
        link: "/e"
    }
];

const learnerDrivenData = "Represents the foundational focus on equity, accessibility, and ethical AI use that is driven by the needs of the learner rather than the functions of any specific technology."; 

const positions = [
    { top: '50%', left: 0, transform: 'translate(-60%, -125%)' }, 
    { top: '50%', right: 0, transform: 'translate(60%, -125%)' },  
    { top: '50%', right: 0, transform: 'translate(60%, 25%)' }, 
    { top: '50%', left: 0, transform: 'translate(-60%, 25%)' }   
];

export default function Framework() {
    const [hoverRect, setHoverRect] = useState(null);
    const [hoverCirc, setHoverCirc] = useState(null);
    const navigate = useNavigate();

    return (
        <Container maxWidth="md" sx={{ minHeight: 600, position: 'relative', py: 10}}>
            <Box sx={{ position: 'relative', width: 600, height: 400, mx: 'auto' }}>
                {/* Center Circle */}
                <Box
                    onMouseEnter={() => setHoverCirc(true)}
                    onMouseLeave={() => setHoverCirc(false)}
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transition: 'transform 0.2s, box-shadow 0.2s, width 0.2s, height 0.2s',
                        transform: `translate(-50%, -50%) ${hoverCirc ? 'scale(1.08)' : ''}`,
                        width: hoverCirc ? 315 : 250,
                        height: hoverCirc ? 315 : 250,
                        bgcolor: '#9c5ac8',
                        borderRadius: '50%',
                        boxShadow: 3,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 2,
                        border: '2px solid black',
                        padding: 2,
                        cursor: 'pointer',
                    }}
                    onClick={() => navigate('/l')} // Navigate to learner-driven page
                >
                    <Box>
                        <Typography variant="h5" align="center" sx={{ color: 'white', fontWeight: 700 }}>
                        Learner-Driven<br />AI Education
                        </Typography>
                        {hoverCirc && (
                            <Typography align="center" color='white' sx={{ fontWeight: 400, mt: 2, fontSize: 16 }}>
                                {learnerDrivenData}
                            </Typography>
                        )}
                    </Box>
                    
                </Box>
                {/* Rectangles */}
                {frameworkData.map((item, i) => (
                    <FrameworkRect
                        key={item.label}
                        label={item.label}
                        color={item.color}
                        desc={item.desc}
                        position={positions[i]}
                        hovered={hoverRect === i}
                        onHover={() => setHoverRect(i)}
                        onLeave={() => setHoverRect(null)}
                        onClick={() => navigate(item.link)}
                    />
                ))}
            </Box>
        </Container>
    );
}

// Rectangle component with hover effect and description
function FrameworkRect({ label, color, desc, position, hovered, onHover, onLeave, onClick }) {
    return (
        <Box
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            onClick={onClick}
            sx={{
                position: 'absolute',
                width: hovered ? 350 : 300,
                height: hovered ? 200 : 150,
                padding: 1,
                bgcolor: color,
                borderRadius: 3,
                boxShadow: 3,
                border: '2px solid black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s, width 0.2s, height 0.2s',
                fontWeight: 700,
                fontSize: 20,
                color: 'black',
                zIndex: 3,
                ...position,
                transform: `${position.transform} ${hovered ? 'scale(1.08)' : ''}`,
                textAlign: 'center'
            }}
        >
            <Box>
                <Typography align="center" color='black' sx={{ fontWeight: 700 }}>
                    {label}
                </Typography>
                {hovered && (
                    <Typography align="center" color='black' sx={{ fontWeight: 400, mt: 2, fontSize: 16 }}>
                        {desc}
                    </Typography>
                )}
            </Box>
        </Box>
    );
}