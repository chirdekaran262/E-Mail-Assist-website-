// src/components/Footer.jsx
import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, colors } from '@mui/material';
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: 'primary.dark',
                color: 'white',
                py: 3,
                mt: 'auto',
            }}
        >
            <Container>
                <Grid container spacing={4}>
                    {/* Brand Section */}
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            Email Reply Generator
                        </Typography>
                        <Typography variant="body2">
                            Making email communication easier and more efficient with AI-powered solutions.
                        </Typography>
                        <a size='10px' sx={{ color: "white" }} href="https://portf-black.vercel.app/">
                            Developer
                        </a>
                    </Grid>

                    {/* Quick Links */}
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            Quick Links
                        </Typography>
                        <Box>
                            <Link href="/" color="inherit" sx={{ display: 'block', mb: 1 }}>
                                Home
                            </Link>
                            <Link href="/about" color="inherit" sx={{ display: 'block', mb: 1 }}>
                                About
                            </Link>
                            <Link href="/contact" color="inherit" sx={{ display: 'block', mb: 1 }}>
                                Contact
                            </Link>
                        </Box>
                    </Grid>

                    {/* Social Section */}
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            Connect With Us
                        </Typography>
                        <Box>
                            <IconButton color="inherit" href="https://github.com/chirdekaran262">
                                <GitHub />
                            </IconButton>
                            <IconButton color="inherit" href="https://www.linkedin.com/in/karan-chirde-0666ab1aa/">
                                <LinkedIn />
                            </IconButton>
                            <IconButton color="inherit" href="https://x.com/KaranC26">
                                <Twitter />
                            </IconButton>
                        </Box>
                        <Typography variant="body2" sx={{ mt: 2 }}>
                            Email: karan26c@gmail.com
                        </Typography>



                    </Grid>
                </Grid>

                <Box
                    sx={{
                        mt: 3,
                        pt: 2,
                        borderTop: 1,
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                    }}
                >
                    <Typography variant="body2" align="center">
                        © {new Date().getFullYear()} Email Reply Generator. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
