import { Grid, Box } from '@mui/material'
import React from 'react'
import Cards from '../card/Cards'
import cardimage from '../images/image3.jpg'
import postimg1 from '../images/image1.jpg'
import postimg2 from '../images/image2.jpg'
import postimg3 from '../images/image3.jpg'
import postimg4 from '../images/image4.jpg'
function Recents() {
    return (
        <Box>
            <Grid container rowSpacing={1} columnSpacing={{xs:1,sm:1,md:1}}>
                <Grid item  >
                    <Cards cardimage={cardimage} sx={{
            
                    }} />
                </Grid>

                <Grid item md={6}  xs={12} sm={6}>
                    <Cards cardimage={postimg1} />
                </Grid>
                <Grid item md={6} sm={6} xs={12}>
                    <Cards cardimage={postimg2} />
                </Grid>
                <Grid item md={6} sm={6} xs={12}>
                    <Cards cardimage={postimg3} />
                </Grid>
                <Grid item md={6} sm={6} xs={12}>
                    <Cards cardimage={postimg4} />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Recents