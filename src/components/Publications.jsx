import React from 'react';
import { Box, Typography, Divider, Container, Link } from '@mui/material';

const publications = [
  {
    name: 'Chapters in Books',
    description: 'Brassard, L., Mueller, J., Archer, K., & Spencer-Mueller, K. E. (2020). Learning to teach global competencies in a transforming digital world: A national examination and case study. In Dhir, H (Eds). Handbook of Research on Barriers for Teaching 21st-century Competencies and the Impact of Digitalization. IGI Global. DOI: ',
    reference: '10.4018/978-1-7998-6967-2.ch003',
    href: 'https://www.igi-global.com/gateway/chapter/280714'
  },
  {
    name: 'Conference Presentations',
    description: 'Brassard, L., Mueller, J., Archer, K. (June 2021). A cross-Canada review of how 21st century competencies are embedded in pre-service teacher education. Multi-paper presentation to be presented at the Canadian Society for the Study of Education in June 2021.'
  },
  // Add more publications as needed
];

export default function Publications() {
  return (
    <Container maxWidth="lg">
      {publications.map((pub, idx) => (
        <Box key={pub.name} sx={{ mb: 4}}>
          <Typography variant="body1" fontWeight="bold" gutterBottom>
            {pub.name}
          </Typography>
          <Typography variant="body1"  sx={{ fontSize: 18, mb: 2 }}>
            {pub.description} 
            <Link href={pub.href} target='_blank' color='primary.main' underline="hover" highlight>{pub.reference}</Link>
          </Typography>
          {idx < publications.length - 1 && <Divider sx={{ borderColor: 'primary.main'}} />}
        </Box>
      ))}
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h2" sx={{ fontSize: 18, mt: 5 }}>
            More coming soon...
        </Typography>
      </Box>
      
    </Container>
  );
}