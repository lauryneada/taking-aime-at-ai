import AppBar from '@mui/material/AppBar';
import { Box, Button, Toolbar, Stack, useMediaQuery, IconButton, Collapse } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';

function NavBar() {
  const isCompact = useMediaQuery('(max-width:900px)');
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'AIME', href: '#/aime' },
    { label: 'RESOURCE CENTRE', href: '#/resource-centre' },
    { label: 'ABOUT', href: '#/about' },
  ];

  return (
    <Box>
      <AppBar sx={{ backgroundColor: 'purple.main' }} position='static'>
        <Toolbar
          sx={{
            padding: 1,
            flexDirection: isCompact ? 'column' : 'row',
            alignItems: isCompact ? 'center' : 'stretch',
            justifyContent: isCompact ? 'flex-start' : 'space-between',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: isCompact ? '100%' : 'auto', justifyContent: isCompact ? 'center' : 'flex-start', mb: isCompact ? 0 : 0 }}>
            <Box
              component='a'
              href='#/'
              sx={{
                display: 'flex',
                alignItems: 'center',
                width: isCompact ? '50%' : '25%',
                justifyContent: 'flex-start',
              }}
            >
              <img style={{ width: '100%' }} src='images/laurier_logo.png' alt='Laurier Logo' />
            </Box>
            {isCompact && (
              <IconButton
                color="inherit"
                aria-label="open menu"
                edge="end"
                onClick={() => setMenuOpen((open) => !open)}
                sx={{ ml: 1 }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
          {isCompact ? (
            <Collapse in={menuOpen} timeout="auto" unmountOnExit>
              <Stack direction='column' spacing={1} sx={{ width: '100vw', alignItems: 'center', mt: 2 }}>
                {navLinks.map((item) => (
                  <Button key={item.label} href={item.href} sx={{ color: 'white', width: '80%' }}>{item.label}</Button>
                ))}
              </Stack>
            </Collapse>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto' }}>
              {navLinks.map((item) => (
                <Button key={item.label} href={item.href} sx={{ color: 'white', whiteSpace: 'nowrap' }}>{item.label}</Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;