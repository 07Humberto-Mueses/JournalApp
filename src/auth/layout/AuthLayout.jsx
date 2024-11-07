import React from 'react'
import { Grid2, Typography } from '@mui/material'

export const AuthLayout = ({ children, title=''}) => {
  return (
    <Grid2
        container
        rowSpacing={1}
        //direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '100vh', backgroundColor: 'primary.manin', padding:4 }}
    >
        <Grid2
            className="box-shadow"
            xs={4}
            sx={{ 
                width: {md:450},
                backgroundColor: 'white',
                padding:3,
                borderRadius:2 }}
        >
            <Typography variant="h5" sx={{mb:1}}>
                Login
            </Typography>

            { children }

        </Grid2>

    </Grid2>
  )
}