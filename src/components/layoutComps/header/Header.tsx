import React from 'react';
import { Container, Typography } from '@mui/material';

export default function Header() {


    return (
        <Container
            maxWidth="lg"
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin:'20px',
            }}
        >
            <Typography variant="h3" component="h3">
                Welcome To Task Manager
            </Typography>
        </Container>
    );
}
