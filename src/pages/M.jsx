import React from 'react';
import { Typography, Box, Container, Stack} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import FilledBoxedText from '../components/FillBoxedText';

const bullets =[
  'Equip teacher candidates with foundational and advanced AI multiliteracy skills, ensuring they can critically evaluate, interpret, and apply AI tools in education.', 
  'Develop a critical understanding of AI ethics, privacy, surveillance, and data biases within educational settings.',
  'Prepare educators to teach AI literacy to students and integrate AI concepts into the curriculum using inquiry-based and design-thinking approaches.'
]

export default function M() {

  return (
    <Box sx={{minHeight: {xl:'1055px', lg: 'auto'}}}>
      <Container sx={{padding: {xs:2, sm:5}, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Typography variant='h2' sx={{textAlign:'center', color:'#6dd040', fontSize: {xs:36, sm:60}}}>Multiple & Critical AI Literacies</Typography>
          <Stack gap={5} sx={{mt: {xs: 5, sm: 10}}}>
                {bullets.map((bullet,index) => (
                    <FilledBoxedText 
                        key={index}
                        description={bullet}
                        color="#6dd040"
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
        <a href="#/aime" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', color: '#6dd040', fontWeight: 600, fontSize: 18 }}>
          <ChevronLeftIcon sx={{ marginRight: 1 }} />
          Back to Framework
        </a>
      </Box>
    </Box>
  )
}
