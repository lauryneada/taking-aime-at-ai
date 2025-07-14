import React from "react";
import { Card, CardContent, CardMedia, Typography, Box, Grid, Divider } from '@mui/material';

const tools = [
  {
    image: 'images/tools.png',
    title: 'Tool Name 1',
    description: 'This is a description of the first tool. It explains briefly how to use it.',
    designedBy: 'Name 1, Name 2',
    apaReference: 'Reference Here'
  },
  {
    image: 'images/tools.png',
    title: 'Tool Name 2',
    description: 'This is a description of the second tool. It explains briefly how to use it.',
    designedBy: 'Name 1, Name 2, Name 3',
    apaReference: 'Reference Here'
  },
  // Add more tools as needed
];

export default function CustomTools() {
  return (
    <Box sx={{}}>
      <Grid container spacing={4} justifyContent="center">
        {tools.map((tool, idx) => (
          <Grid item xs={12} md={10} key={tool.title}>
            <Card sx={{ display: 'flex', flexDirection: 'row', minHeight: 220, maxWidth: 1000, mx: 'auto', borderRadius: '20px'}}>
              <CardMedia
                component="img"
                image={tool.image}
                alt={tool.title}
                sx={{ width: 220, height: 220, objectFit: 'cover', borderRadius: 2, m: 2 }}
              />
              <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 3 }}>
                <Box>
                  <Typography variant="body1" fontWeight="bold" gutterBottom>
                    {tool.title}
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: 18, mb: 2 }}>
                    {tool.description}
                  </Typography>
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