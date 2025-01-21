// src/components/About.jsx
import React from 'react';
import { Container, Box, Typography } from '@mui/material';

const About = () => {
    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Box sx={{ bgcolor: 'background.paper', p: 4, borderRadius: 2 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    About Email Reply Generator
                </Typography>
                <Typography paragraph>
                    Email Reply Generator is an AI-powered tool designed to help you craft professional
                    and contextually appropriate responses to emails quickly and efficiently.
                </Typography>
                <Typography paragraph>
                    Our tool uses advanced natural language processing to understand the context
                    of the original email and generates thoughtful replies while maintaining
                    your preferred tone and style.
                </Typography>
                <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                    Features
                </Typography>
                <Typography component="ul">
                    <li>Customizable tone selection</li>
                    <li>Context-aware responses</li>
                    <li>Professional formatting</li>
                    <li>Quick copy-to-clipboard functionality</li>
                </Typography>
            </Box>
        </Container>
    );
};

export default About;