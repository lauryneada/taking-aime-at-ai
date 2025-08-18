import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Presentations from './Presentations';
import Publications from './Publications';
import Recommendations from './Recommendations';
import CustomTools from './CustomTools';
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
  maxWidth: 150,
  whiteSpace: 'normal',
  fontSize: 18,
  padding: '6px 8px',
  [theme.breakpoints.up('sm')]: {
    fontSize: 18,
    maxWidth: 150,
    padding: '8px 12px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: 18,
    maxWidth: 200,
    padding: '10px 16px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: 22,
    maxWidth: 300,
    padding: '12px 20px',
  },
  marginRight: theme.spacing(1),
  color: '#412C88',
  '&:hover': {
    color: '#412C88',
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

  const tabLabels = [
    "Presentations",
    "Publications",
    "Customized AI Tools",
    "Recommended AI Tools",
    "AI Tips in Two"
  ];

  return (
    <>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        bgcolor: '#fff',
        '& .MuiTabs-scrollButtons.Mui-disabled': {
          opacity: 0.3,
        }
      }}>
          <AntTabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
          >
            {tabLabels.map(label => (
              <AntTab key={label} label={label} />
            ))}
          </AntTabs>
      </Box>
      <Box sx={{ p: 3 }}>
        {value === 0 && <Presentations />}
        {value === 1 && <Publications />}
        {value === 2 && <CustomTools />}
        {value === 3 && <Recommendations />}
        {value === 4 && <VideoTutorials />}
      </Box>
    </>
  );
}