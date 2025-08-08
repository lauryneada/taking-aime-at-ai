import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography, Box, Grid, Divider, Collapse, Link } from '@mui/material';
import tools from '../consts/toolsData';

export default function CustomTools() {
  const [openIdx, setOpenIdx] = useState(null);

  const handleToggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <Box sx={{}}>
      <Grid container spacing={4} justifyContent="center">
        {tools.map((tool, idx) => (
          <Grid item xs={12} md={10} key={tool.title}>
            <Card sx={{ display: 'flex', flexDirection: 'row', minHeight: 220, maxWidth: 1200, mx: 'auto', borderRadius: '20px'}}>
              <CardMedia
                component="img"
                image={tool.image}
                alt={tool.title}
                sx={{
                  height: 220,
                  objectFit: 'cover',
                  backgroundColor: '#fff',
                  borderRadius: '20px',
                  m: 2,
                  width: '35%',
                  cursor: tool.link ? 'pointer' : 'default',
                  transition: 'transform 0.3s cubic-bezier(.4,2,.6,1)',
                  '&:hover': tool.link ? {
                    transform: 'scale(1.05)',
                    boxShadow: 6,
                    filter: 'brightness(1.08)'
                  } : {},
                }}
                onClick={() => {
                  if (tool.link) {
                    window.open(tool.link, '_blank');
                  }
                }}
              />
              <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 3 }}>
                <Box>
                  <Typography variant="body1" fontWeight="bold" gutterBottom>
                    {tool.title}
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: 18, mb: 2 }}>
                    {tool.description}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 2, gap: 2 }}>
                    <Link
                      component="button"
                      underline="always"
                      sx={{ fontWeight: 700, fontSize: 16, color: 'purple.main', cursor: 'pointer' }}
                      onClick={() => handleToggle(idx)}
                    >
                      Learn More
                    </Link>
                    {tool.link && (
                      <Link
                        href={tool.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="always"
                        sx={{ fontWeight: 700, fontSize: 16, color: 'purple.main', cursor: 'pointer' }}
                      >
                        Use Tool
                      </Link>
                    )}
                  </Box>
                  <Collapse in={openIdx === idx} timeout="auto" unmountOnExit>
                    {tool.more && (
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="body1" sx={{ mb: 1, fontSize: 16 }}>{tool.more.intro}</Typography>
                        <Box component="ul" sx={{ pl: 3, m:2 }}>
                          {tool.more.bullets && tool.more.bullets.map((point, i) => (
                            <li key={i}>
                              <Typography variant="body1" sx={{ fontSize: 16 }}>{point}</Typography>
                            </li>
                          ))}
                        </Box>
                        <Typography variant="body1" sx={{ fontSize: 16 }}>{tool.more.outro}</Typography>
                      </Box>
                    )}
                  </Collapse>
                </Box>
                <Divider sx={{ my: 1, borderColor: 'purple.main'}} />
                <Typography variant="subtitle2" sx={{ color: 'purple.main', fontWeight: 500, mt: 1 }}>
                  Designed by: {tool.designedBy}
                </Typography>
                <Typography variant="caption" color="purple.bright" sx={{ mt: 1 }}>
                  APA Reference: {tool.apaReference}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}