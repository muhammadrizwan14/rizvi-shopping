import { AppBar, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React, { useState } from 'react'
import { Facebook, Instagram, Menu as MenuIcon, Twitter } from '@mui/icons-material';

function Navbar() {
    const Menuitems = [
        { Name: 'Home', Link: '/' },
        { Name: 'Products', Link: '#' },
        { Name: 'Portfolio', Link: '#' },
        { Name: 'Blog', Link: '#' },
        { Name: 'Contact Us', Link: '#' }
    ]
    const [open, setOpen] = useState(false)
    return (
        <AppBar sx={{ background: 'black' }} position={"static"}>
            <Toolbar sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }} >
                <Box sx={{
                    display: 'flex',
                    gap: 3,
                }}>
                    <Facebook /><Instagram /><Twitter />
                </Box>
                <Box sx={{
                    display: 'flex',
                    gap: 3, display: { xs: 'none', sm: 'none', md:"flex" }
                }}>
                    {Menuitems.map((item) => {
                        return (
                            <Typography sx={{ cursor: 'pointer', fontSize: '14px' }}>{item.Name}</Typography>
                        )
                    })}


                </Box>
                <Box sx={{
                    display: 'flex',
                    gap: 5
                }}><InputBase placeholder='Search...' sx={{
                    color: "white"
                }} />
                    <MenuIcon sx={{
                        color: 'white', display: { xs: 'block', sm: 'block', md: "none" }
                    }}
                        onClick={() => setOpen(!open)} />
                </Box>

            </Toolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={() => setOpen(!open)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <Box sx={{ width: 350, height: '90vh' }}>
                    {Menuitems.map((item) => {
                        return (
                            <MenuItem sx={{ cursor: 'pointer', fontSize: '14px' }}>{item.Name}</MenuItem>
                        )
                    })}

                </Box>


            </Menu>
        </AppBar>
    )
}

export default Navbar