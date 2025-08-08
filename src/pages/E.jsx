import React from 'react';
import { Typography, Box, Container, Stack} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import FilledBoxedText from '../components/FillBoxedText';

const bullets=[
  'Provide hands-on, experiential learning opportunities for teacher candidates to interact with AI-powered tools and critically reflect on their implications in pedagogy.', 
  'Establish an ethics-first approach to AI in education, fostering data privacy literacy, responsible AI use, and decision-making frameworks.',
  'Support continuous iteration and evolution of AI practices in education, ensuring adaptability as AI technologies advance.'
]

export default function E() {

  return (
    <Box>
      <Container sx={{height:'700px', padding: 5}}>
        <Typography variant='h2' sx={{textAlign:'center', color:'#FF9900'}}>Experiential, Ethical, & Evolving AI Practices</Typography>
          <Stack gap={5} sx={{mt:5}}>
                {bullets.map((bullet,index) => (
                    <FilledBoxedText 
                        key={index}
                        description={bullet}
                        color="#FF9900"
                        fontColor='black'
                    />
                ))}
          </Stack>
      </Container>
      <Box sx={{
        position: 'sticky',
        bottom: 32,
        left: 32,
        margin: '5px',
        display: 'flex',
        alignItems: 'center',
        zIndex: 1000
      }}>
        <a href="#/aime" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', color: '#FF9900', fontWeight: 600, fontSize: 18 }}>
          <ChevronLeftIcon sx={{ marginRight: 1 }} />
          Back to Framework
        </a>
      </Box>
    </Box>
  )
}
