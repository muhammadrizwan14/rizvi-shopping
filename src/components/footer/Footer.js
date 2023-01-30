import { Box, Typography } from "@mui/material";
import React from "react";


function Footer() {
    return (
        <Box sx={{ background: "black", padding:'10px 0px'}}>
            <Typography sx={{
                color: 'white',
                textAlign: 'center',
                alignItems:'center'
            }}>
                © 2023 <span style={{
                    color: 'red',
                    margin:'0px 5px'
                }}>Rizvi Store</span>
                All rights reserved
       </Typography>
        </Box>
    );
};

export default Footer;
