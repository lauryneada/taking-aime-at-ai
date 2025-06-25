import React from 'react';
import { Container, Stack} from '@mui/material';
import FilledBoxedText from './FillBoxedText';

const recommendations = [
    {
        title: "Sheepscript.AI",
        description: "Video or Podcast to Social Media Post",
        color: "#9c5ac8",
        link: "https://sheepscript.ai"
    },
    {
        title: 'NotebookLM',
        description: 'Notes, presentations, and research to podcasts',
        color: '#41127C',
        link: 'https://notebooklm.google'
    },
    {
        title: 'gradescope',
        description: 'Streamline the assessment process with differentiated feedback',
        color: '#9c5ac8',
        link: 'https://gradescope.com'
    },
    {
        title: 'Quizziz',
        description: 'Interactice quix platform that enables gamified learning',
        color: '#41127C',
        link: 'https://quizizz.com'
    },
    {
        title:'Gmind AI',
        description: 'Content generation, research assistance, and workflow optimization.',
        color: '#9c5ac8',
        link: 'https://gmind.ai'
    },
    {
        title: 'twee',
        description: 'Generate lesson plans, provide feedback and support diverse assessments.',
        color: '#41127C',
        link: 'https://twee.com'
    },
    {
        title: 'Eduaide.Ai',
        description: 'Lesson plan and activity generation',
        color: '#9c5ac8',
        link: 'https://eduaide.ai'
    }
]
function Recommendations() {
    return (
        <Container maxWidth='xl' sx={{paddingBottom: 5}}>
            <Stack spacing={4} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                {
                    recommendations.map((item, index) => (
                        <FilledBoxedText {...item}/>
                    ))
                }
               
            </Stack>
        </Container>
    )
}

export default Recommendations;