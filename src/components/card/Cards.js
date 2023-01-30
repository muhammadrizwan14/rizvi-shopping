import { CardMedia, Box, CardContent, Typography } from '@mui/material'
import {  } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

function Cards({ cardimage }) {
  return (
      <Box
          sx=
          {{
            
              height: '420px',
              background: 'lightgray',
              overflow: 'hidden',
              borderRadius:'10px'
          }}>
          <Link to='http://localhost:3000/details' sx={{
             
          }}>
              {""}
         
          <CardMedia

              component="img"
              height="200px"
              image={cardimage}
              alt="green iguana"
          />
          <CardContent>
              <Typography
                  gutterBottom
                  variant="body1"
                  align='center'
                  component="div"
                  color={"tomato"}
              >
                  Perfumes
              </Typography>
              <Typography
                  gutterBottom
                  variant="h5"
                  align='center'
                  component="div"
              >
                  Wearing this will make everyone love you
              </Typography>
              <Typography
                  gutterBottom
                  variant="body2"
                  align='center'
                  component="div"
                  color="text.secondary"
              >
                  it's woman love
              </Typography>
              <Typography
                  variant="body2"
                  align='center'
              >
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
              </Typography>
              </CardContent>
          </Link>
          </Box>
  )
}

export default Cards