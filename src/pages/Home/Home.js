import { Box, Container, Stack } from '@mui/material'
import React from 'react'
import Categories from '../../components/category/Categories'
import Fashion from '../../components/Fashion/Fashion'
import Recents from '../../components/recents/Recents'
import Rightbar from '../../components/rightbar/Rightbar'

function Home() {
    return (
        <Box>
            <Fashion />
            <Container>
                <Categories />
                <hr />
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={{ xs: 1, sm: 2, md: 8 }}
                    mt={8}
                >
                    <Box flex={3} sx={{ padding: "18px 100px 100px 100px" }}>
                        <Recents />
                    </Box>
                    <Box flex={1} >
                      <Rightbar/>
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}

export default Home