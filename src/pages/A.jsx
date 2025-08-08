import React from 'react';
import { Container, Typography, Box, Stack } from '@mui/material';
import FilledBoxedText from '../components/FillBoxedText';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const bullets = [
  'Focus on leveraging AI to enhance differentiated instruction, providing real-time feedback, and adaptive assessment to support diverse learners.',
  "Emphasize learner-centered AI applications that allow pre-service teachers to experience personalized learning pathways and understand AI's role in individualized education.",
  'Address accessibility and universal design for learning (UDL) principles and situated learning pedagogy.'
]

export default function A() {

  return (
    <Box>
      <Container sx={{height:'700px', padding: 5}}>
         <Typography variant='h2' sx={{textAlign:'center', color:'#DB6463'}}>Adaptive & Personalized Learning</Typography>
         <Stack gap={5} sx={{mt:10}}>
              {bullets.map(bullet => (
                  <FilledBoxedText 
                      description={bullet}
                      color="#DB6463"
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
        <a href="#/aime" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', color: '#DB6463', fontWeight: 600, fontSize: 18 }}>
          <ChevronLeftIcon sx={{ marginRight: 1 }} />
          Back to Framework
        </a>
      </Box>
    </Box>
  )
}
