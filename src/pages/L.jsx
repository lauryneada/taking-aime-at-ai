import React from 'react';
import { Container, Typography, Box, Stack} from '@mui/material';
import FilledBoxedText from '../components/FillBoxedText';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { HashLink } from 'react-router-hash-link';

const bullets=[
  'Integrates critical pedagogy and culturally responsive AI literacy, ensuring AI is not just a tool but an agent for educational equity and social justice.',
  'Bridges theory and practice, offering hands-on, real-world applications for teacher candidates to engage with AI in pedagogically sound ways.',
  'Prioritizes ethical AI implementation, providing clear guidelines, strategies, and support for responsible AI use in K-12 education.',
  'Moves beyond surface-level AI training, embedding long-term, research-backed strategies for AI literacy and ongoing teacher professional growth.',
  'Encourages interdisciplinary collaboration, linking AI education with STEM, literacy, social sciences, and the arts to ensure holistic learning experiences.'
]

export default function A() {

  return (
    <Box>
      <Container sx={{padding: 5}}>
        <Typography variant='h2' sx={{textAlign:'center', color:'#9c5ac8'}}>Learner-Driven AI Education</Typography>
        <Typography variant='body1' sx={{mt: 2, textAlign: 'center', color:'black'}}>The newly designed AIME framework is distinct from existing AI education models because it: </Typography>
          <Stack gap={5} sx={{mt:5}}>
              {bullets.map(bullet => (
                  <FilledBoxedText 
                      description={bullet}
                      color='#9c5ac8'
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
        <a href="#/aime" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', color: '#9c5ac8', fontWeight: 600, fontSize: 18 }}>
          <ChevronLeftIcon sx={{ marginRight: 1 }} />
          Back to Framework
        </a>
      </Box>
    </Box>
   
  )
}