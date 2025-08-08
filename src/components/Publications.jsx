import React, { useState } from 'react';
import { Box, Typography, Divider, Container, Link, Pagination } from '@mui/material';
import publications from '../consts/publicationsData';

const ITEMS_PER_PAGE = 5;

export default function Publications() {
  const [page, setPage] = useState(1);
  const pageCount = Math.ceil(publications.length / ITEMS_PER_PAGE);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const startIdx = (page - 1) * ITEMS_PER_PAGE;
  const endIdx = startIdx + ITEMS_PER_PAGE;
  const currentPublications = publications.slice(startIdx, endIdx);

  return (
    <Container maxWidth="lg">
      {currentPublications.map((pub, idx) => (
        <Box key={pub.name} sx={{ mb: 4 }}>
          <Typography variant="body1" fontWeight="bold" gutterBottom>
            {pub.name}
          </Typography>
          <Typography variant="body1" sx={{ fontSize: 18, mb: 2 }}>
            {pub.description}
            <Link href={pub.href} target='_blank' color='primary.main' underline="hover">{pub.reference}</Link>
          </Typography>
          {idx < currentPublications.length - 1 && <Divider sx={{ borderColor: 'primary.main' }} />}
        </Box>
      ))}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Pagination
          count={pageCount}
          page={page}
          onChange={handleChange}
          color="primary"
        />
      </Box>
    </Container>
  );
}