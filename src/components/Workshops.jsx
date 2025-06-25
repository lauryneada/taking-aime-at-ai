import React from 'react';
import { Container, Grid } from '@mui/material';
import MediaCard from '../components/MediaCard';

const workshops_content = [
    {
        title: 'AI in Education: Where are we and where do we need to go? ',
        description: 'Explore prompt engineering, culturally responsive practices, and practical classroom applications of generative AI tools.',
        image: 'images/workshop1.png',
        link: 'images/AI in Education.pdf'
    },
    {
        title: 'The AI Revolution in Education for Teacher Candidates',
        description: 'Learn prompt engineering, discover AI’s challenges and opportunities, and gain practical skills for the classroom.',
        image: 'images/workshop2.png',
        link: 'images/AI Innovation Workshop Series1.pdf'
    },
    {
        title: 'AI in Education Workshop #2',
        description: 'Through experiential learning, gain first-hand experience using generative AI to support content creation, research organization, and classroom applications.',
        image: 'images/workshop3.png',
        link: 'images/AI Innovation Workshop Series2.pdf'
    },
    {
        title: 'Culturally Responsive Considerations with Artificial Intelligence',
        description: 'A practical guide to develop the skill of crafting clear and effective prompts to effectively communicate with AI tools to achieve specific outcomes.',
        image: 'images/workshop4.png',
        link: 'images/Engineering Prompting.pdf'
    }
];

function Workshops() {
    return (
        <Container maxWidth='xl' sx={{paddingBottom: 6}}>
            <Grid container spacing={4} sx={{ justifyContent: 'center'}}>
                {workshops_content.map((workshop, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <MediaCard {...workshop} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Workshops;