import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import data from './Catadata'
function Categories() {


  
    return (
        <Box>
            <Stack direction={{xs:'column',sm:'row'}} spacing={{xs:1,sm:2,md:4}} mt={5}>
                {

                    data.map((item) => {
                        return (
                            <Box sx={{
                                height: 200,
                                width: '100%',
                                cursor: 'pointer',
                                backgroundImage: `url(${item.Imgurl})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundColor: 'black',
                                backgroundPosition: 'center',
                                WebkitBackgroundSize: 'cover'
                            }}>
                                <Typography variant='h3' sx={{
                                    margin: '25% 50px 25%  50px',
                                    background: 'white',
                                    opacity: '0.8',
                                    textAlign:'center'
                                }}>
                                  {item.h1}
                                </Typography>

                            </Box>
                        )
                    })
                }
                {/* 
                <Box sx={{
                    height: 600,
                    width: '100%',
                    cursor: 'pointer'
                }}>
                    <Typography variant='h4' sx={{
                        margin: '25% 50px 25%  50px',
                        background: 'white',
                        opacity: '0.8'
                    }}>
                        Mens
                    </Typography>

                </Box>


                <Box sx={{
                    height: 600,
                    width: '100%',
                    cursor: 'pointer'
                }}>
                    <Typography  variant='h4' sx={{
                        margin: '25% 50px 25%  50px',
                        background: 'white',
                        opacity: '0.8'
                    }}>
                        Womans
                    </Typography>

                </Box> */}
            </Stack>
        </Box>
    )
}

export default Categories