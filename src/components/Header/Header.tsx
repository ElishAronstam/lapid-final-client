import React from 'react';
import {Container, SxProps, Typography} from '@mui/material';

const ContainerStyle: SxProps = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
}
export default function Header() {
    return (
        <Container
            maxWidth="lg"
            sx={
                ContainerStyle
            }
        >
            <Typography variant="h3">
                Welcome To Task Manager
            </Typography>
        </Container>
    )
};
