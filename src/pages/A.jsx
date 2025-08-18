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
    <Box sx={{minHeight: {xl:'1055px', lg: 'auto'}}}>
      <Container sx={{padding: {xs:2, sm:5}, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
         <Typography variant='h2' sx={{textAlign:'center', color:'#DB6463', fontSize: {xs:36, sm:60}}}>Adaptive & Personalized Learning</Typography>
         <Stack gap={5} sx={{mt: {xs: 5, sm: 10}}}>
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
        margin: '20px',
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
