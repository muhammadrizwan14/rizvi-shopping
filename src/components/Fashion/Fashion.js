import { Typography, Box } from '@mui/material'
import React from 'react'
import main from '../images/HeroImage.jpg'
function Fashion() {
    return (
        <Box>
            < Typography variant='h3' align='center' sx={{ fontWeight: 900 }}  >
                Fashion <b style={{ color: 'red' }}>Blog</b>
            </Typography>
            <Typography variant='body2' align='center' sx={{ fontWeight: 100 }}  >
                We Make You look the better of you!
            </Typography>
            <Box sx={{
                backgroundImage: `url(${main})`,
                backgroundRepeat: 'no-repeat',
                backgroundColor: 'black',
                backgroundPosition: 'center',
                WebkitBackgroundSize: 'cover',
                width: '100%',
                height: 600,
                display: "flex",
                justifyContent:'center'
            }}>
                <Box sx={{
                    width: {xs:'100%',sm:'50%',md:'40%'},
                    padding: { xs: 3, sm: 2, md: 20 }
                }}>
                <Box sx={{
                    background: 'white',
                    opacity: '0.8',
                }}>
                    <Typography variant='h6' color={"tomato"} align="center" pt={8}>
                        Treding Styles
                    </Typography>
                    <Typography variant='h4'  align="center" >
                        Life is Boring Without Fashion
                    </Typography>
                    <Typography variant='body1' align="center" pb={8} >
                       We love to change your style lorem isom
                    </Typography>
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}

export default Fashion