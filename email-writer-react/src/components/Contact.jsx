// src/components/Contact.jsx
import React from 'react';
import { Container, Box, Typography } from '@mui/material';

const Contact = () => {
    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Box sx={{ bgcolor: 'background.paper', p: 4, borderRadius: 2 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Contact Us
                </Typography>
                <Typography paragraph>
                    We'd love to hear from you! If you have any questions, suggestions,
                    or need support, please don't hesitate to reach out.
                </Typography>
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h6" gutterBottom>
                        Get in Touch
                    </Typography>
                    <Typography>Email: karan26c@gmail.com</Typography>
                    <Typography>Phone: (+91) 9022452486</Typography>
                    <Typography>Address: Umarkhed, District Yavatmal, Maharashtra, 445206</Typography>
                    <a href='https://portf-black.vercel.app/'>Visit Developer Portfolio</a><br></br>
                    <a href='https://karan26.onrender.com/'>Some more Product</a>
                </Box>
            </Box>
        </Container >
    );
};

export default Contact;