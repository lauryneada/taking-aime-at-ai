import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Workshops from './Workshops';
import Recommendations from './Recommendations';
import VideoTutorials from './VideoTutorials';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const AntTabs = styled(Tabs)({
  borderBottom: '1px solid #e8e8e8',
  '& .MuiTabs-indicator': {
    backgroundColor: '#9c5ac8',
  },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',
  minWidth: 0,
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
  },
  marginRight: theme.spacing(1),
  fontSize: 25,
  color: '#41127C',
  '&:hover': {
    color: '#41127C',
    opacity: 1,
  },
  '&.Mui-selected': {
    color: '#9c5ac8',
    fontWeight: 900,
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#9c5ac8',
  },
}));

export default function ResourceTabs() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialTab = parseInt(params.get('tab')) || 0;
  const [value, setValue] = React.useState(initialTab);

  useEffect(() => {
    setValue(initialTab);
  }, [initialTab, location.search]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ bgcolor: '#fff' }}>
        <AntTabs value={value} onChange={handleChange} centered>
          <AntTab label="Workshops" />
          <AntTab label="Recommended AI Tools" />
          <AntTab label="Video Tutorials" />
        </AntTabs>
        <Box sx={{ p: 3 }} />
      </Box>
    </Box>
    <Box sx={{ p: 3 }}>
        {value === 0 && (
            <Workshops />
        )}
        {value === 1 && (
            <Recommendations />
        )}
        {value === 2 && (
            <VideoTutorials />
        )}
    </Box>
    </>
  );
}