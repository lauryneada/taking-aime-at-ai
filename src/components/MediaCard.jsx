import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 400 , border: '2px solid', borderColor: 'purple.main', borderRadius: '20px', height: '550px'}}>
      <CardMedia
        sx={{ height: 200 }}
        image={props.image}
      />
      <CardContent>
        <Typography gutterBottom variant="body1" component="div" fontWeight='900' sx={{display: 'flex', textAlign: 'center', textDecoration: 'underline', height:'120px', justifyContent: 'center', alignItems: 'center', fontSize: {xs: 18, sm: 25}}}>
          {props.title}
        </Typography>
        <Typography variant="body1" sx={{textAlign: 'center', height:'120px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding:1, fontSize: {xs: 16, sm: 18}}}>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
        <Button href={props.link} target='_blank' size="medium">Explore</Button>
      </CardActions>
    </Card>
  );
}