// src/components/EmailGenerator.jsx
import React, { useState } from 'react';
import {
    TextField,
    Box,
    Button,
    CircularProgress,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Typography
} from '@mui/material';
import axios from 'axios';

const EmailGenerator = () => {
    const [emailContent, setEmailContent] = useState('');
    const [tone, setTone] = useState('');
    const [generatedReply, setGeneratedReply] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async () => {
        if (!emailContent) return;
        setLoading(true);
        setError('');
        try {
            const response = await axios.post('http://localhost:8081/api/email/generate', {
                emailContent,
                tone,
            });
            setGeneratedReply(typeof response.data === 'string' ? response.data : JSON.stringify(response.data));
        } catch (err) {
            setError('Failed to generate reply. Please try again.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box sx={{
            flex: 1,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            width: '100%',
            height: 'calc(100vh - 80px)',
            overflow: 'hidden'
        }}>
            {/* Left Side: Form Section */}
            <Box sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                p: 7,
                height: '100%',
                overflow: 'auto'
            }}>
                <TextField
                    fullWidth
                    multiline
                    rows={6}
                    variant="outlined"
                    label="Original Email Content"
                    value={emailContent}
                    onChange={(e) => setEmailContent(e.target.value)}
                />
                <FormControl fullWidth>
                    <InputLabel>Tone (Optional)</InputLabel>
                    <Select
                        value={tone}
                        label="Tone (Optional)"
                        onChange={(e) => setTone(e.target.value)}
                    >
                        <MenuItem value="">None</MenuItem>
                        <MenuItem value="professional">Professional</MenuItem>
                        <MenuItem value="casual">Casual</MenuItem>
                        <MenuItem value="friendly">Friendly</MenuItem>
                    </Select>
                </FormControl>
                <Button
                    variant="contained"
                    onClick={handleSubmit}
                    disabled={!emailContent || loading}
                    fullWidth
                >
                    {loading ? <CircularProgress size={24} /> : 'Generate Reply'}
                </Button>
                {error && <Typography color="error">{error}</Typography>}
            </Box>

            {/* Right Side: Generated Reply Section */}
            <Box sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                p: 1,
                height: '90%',
                overflow: 'auto'
            }}>
                {generatedReply ? (
                    <>
                        <Typography variant="h6">Generated Reply:</Typography>
                        <TextField
                            fullWidth
                            multiline
                            rows={7}
                            variant="outlined"
                            value={generatedReply}
                            InputProps={{ readOnly: true }}
                            sx={{
                                flex: 1,
                                '& .MuiOutlinedInput-root': {
                                    height: '100%',
                                    '& textarea': {
                                        height: '100% !important'
                                    }
                                }
                            }}
                        />
                        <Button
                            variant="contained"
                            onClick={() => navigator.clipboard.writeText(generatedReply)}
                            color="success"
                            fullWidth
                        >
                            Copy to Clipboard
                        </Button>
                    </>
                ) : (
                    <Typography
                        color="textSecondary"
                        sx={{
                            fontSize: '18px',
                            textAlign: 'center',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        Your generated reply will appear here.
                    </Typography>
                )}
            </Box>
        </Box>
    );
};

export default EmailGenerator;