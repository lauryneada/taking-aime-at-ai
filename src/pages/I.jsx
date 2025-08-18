import React from 'react';
import { Typography, Box, Container, Stack} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import FilledBoxedText from '../components/FillBoxedText';

const bullets = [
  'Embed anti-bias training, equity-focused AI literacy, and culturally sustaining pedagogies to ensure AI is leveraged ethically and inclusively in K-12 education.',
  'Engage with diverse community voices (students, educators, families, Indigenous communities, and historically marginalized groups) to co-construct AI practices that honour different knowledge systems including Indigenous knowledge systems.', 
  'Ensure AI implementation supports multiliteracies, decolonial and anti-oppressive pedagogies.'
]

export default function I() {

  return (
    <Box sx={{minHeight: {xl:'1055px', lg: 'auto'}}}>
      <Container sx={{padding: {xs:2, sm:5}, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Typography variant='h2' sx={{textAlign:'center', color:'#4284F3', fontSize: {xs:36, sm:60}}}>Inclusive & Culturally Responsive AI</Typography>
          <Stack gap={5} sx={{mt: {xs: 5, sm: 10}}}>
                {bullets.map(bullet => (
                    <FilledBoxedText 
                        description={bullet}
                        color="#4284F3"
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
        <a href="#/aime" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', color: '#4284F3', fontWeight: 600, fontSize: 18 }}>
          <ChevronLeftIcon sx={{ marginRight: 1 }} />
          Back to Framework
        </a>
      </Box>
    </Box>
   
  )
}
