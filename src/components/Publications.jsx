import React from 'react';
import { Box, Typography, Divider, Container, Link } from '@mui/material';

const publications = [
  {
    name: 'From Macro to Culturally Responsive and Sustaining Contextualized Micro-Prompts: Guiding Teacher Candidates Through an AI Prompting Continuum',
    description: 'Ewart, K. (2025). From macro to culturally responsive and sustaining contextualized micro-prompts: Guiding teacher candidates through an AI prompting continuum. In Proceedings of SITE 2025 - Society for Information Technology & Teacher Education International Conference (pp. 494–501). Association for the Advancement of Computing in Education (AACE). ',
    reference: 'Read Publication',
    href: 'images/225978.pdf'
  },
  {
    name: 'Leveraging Generative AI for Culturally Responsive Teaching: A Shift in Educator Planning and Practice',
    description: 'Ewart, K. (2025). Leveraging generative AI for culturally responsive teaching: A shift in educator planning and practice. In Proceedings of SITE 2025 - Society for Information Technology & Teacher Education International Conference (pp. 2030–2035). Association for the Advancement of Computing in Education (AACE). ',
    reference: 'Read Publication',
    href: 'images/225764.pdf'
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