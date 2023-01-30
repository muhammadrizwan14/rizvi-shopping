import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import Cards from '../card/Cards'
import postimg1 from '../images/image1.jpg'
import postimg2 from '../images/image2.jpg'
import postimg3 from '../images/image3.jpg'
import postimg4 from '../images/image4.jpg'
function Rightbar() {
    return (
        <Box>
            <Typography align={'center'} bgcolor={'black'} color={"white"}>
                Most Popular
            </Typography>
            <List
                sx={{
                    width: '100%',
                    height: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper'
                }}>

                <ListItem alignItems="flex-end">
                    <ListItemAvatar>
                        <Avatar alt="post img" src={postimg4}
                            sx={{
                                width: 80,
                                height: 80

                            }}
                            variant="square"
                        />
                    </ListItemAvatar>
                    <ListItemText
                        secondary={" — I'll be in your neighborhood doing errands this…"}
                    />
                </ListItem>
                <ListItem alignItems="flex-end">
                    <ListItemAvatar>
                        <Avatar alt="post img" src={postimg3}
                            sx={{
                                width: 80,
                                height: 80

                            }}
                            variant="square"
                        />
                    </ListItemAvatar>
                    <ListItemText
                        secondary={" — I'll be in your neighborhood doing errands this…"}
                    />
                </ListItem>
                <ListItem alignItems="flex-end">
                    <ListItemAvatar>
                        <Avatar alt="post img" src={postimg2}
                            sx={{
                                width: 80,
                                height: 80

                            }}
                            variant="square"
                        />
                    </ListItemAvatar>
                    <ListItemText
                        secondary={" — I'll be in your neighborhood doing errands this…"}
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
            </List>
            <Typography align={'center'} bgcolor={'black'} color={"white"}>
                About us
            </Typography>
            <Cards cardimage={postimg3} />
        </Box>
  )
}

export default Rightbar