import {
  TextField,
  Button,
  Container,
  Typography,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  Box,
  Alert,
  Fade
} from '@mui/material';
import { useState } from 'react';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [gender, setGender] = useState('female');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let temp = {};
    // Name validation
    if (!name.trim()) {
      temp.name = "Name is required";
    } else if (name.trim().length < 3) {
      temp.name = "Name must be at least 3 characters";
    }

    // Email validation
    if (!email) {
      temp.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      temp.email = "Email is invalid";
    }

    // Password validation
    if (password.length < 6) {
      temp.password = 'Min 6 characters';
    } else if (!/(?=.*[A-Za-z])(?=.*\d)/.test(password)) {
      temp.password = 'Password must contain letters and numbers';
    }

    // Terms validation
    if (!rememberMe) {
      temp.rememberMe = "You must agree to the terms";
    }

    setErrors(temp);
    return Object.keys(temp).length === 0;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setSubmitted(true);
      setTimeout(() => {
        alert('✨ Form submitted successfully!\n\n' + JSON.stringify({ name, email, password, rememberMe, gender }, null, 2));
        // Reset form
        setName('');
        setEmail('');
        setPassword('');
        setRememberMe(false);
        setGender('female');
        setSubmitted(false);
      }, 1000);
    }
  }

  return (
    <Container maxWidth="sm" sx={{
      mt: 4,
      mb: 4,
      p: 4,
      borderRadius: 3,
      background: 'rgba(26, 31, 58, 0.8)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(0, 212, 255, 0.2)',
      boxShadow: '0 8px 32px rgba(0, 212, 255, 0.1), 0 0 30px rgba(255, 0, 110, 0.05)',
      transition: 'all 0.3s ease',
      '&:hover': {
        boxShadow: '0 12px 48px rgba(0, 212, 255, 0.15), 0 0 40px rgba(255, 0, 110, 0.1)',
        border: '1px solid rgba(0, 212, 255, 0.3)',
      },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <Typography variant="h4" gutterBottom align="center" sx={{
        mb: 1,
        fontSize: '2.5rem',
        fontWeight: 700,
      }}>
        User Registration
      </Typography>
      
      <Typography variant="body2" align="center" sx={{
        mb: 3,
        color: 'text.secondary',
        fontSize: '1rem',
        fontStyle: 'italic',
        background: 'linear-gradient(90deg, #00d4ff 0%, #ff006e 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}>
        ✨ Transform Your Digital Identity & Unlock Infinite Possibilities ✨
      </Typography>

      {submitted && (
        <Fade in={submitted}>
          <Alert 
            severity="success" 
            sx={{ mb: 3, animation: 'slideIn 0.3s ease' }}
          >
            ✅ Form validated successfully!
          </Alert>
        </Fade>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <Box sx={{ mb: 2.5 }}>
          <TextField
            type="text"
            value={name}
            required
            onChange={e => setName(e.target.value)}
            label="Full Name"
            fullWidth
            margin="normal"
            error={Boolean(errors.name)}
            helperText={errors.name}
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-input': {
                color: '#ffffff',
              },
              '& .MuiInputBase-input::placeholder': {
                color: 'rgba(255, 255, 255, 0.3)',
                opacity: 1,
              },
            }}
          />
        </Box>

        <Box sx={{ mb: 2.5 }}>
          <TextField
            type="email"
            value={email}
            required
            onChange={e => setEmail(e.target.value)}
            label="Email Address"
            fullWidth
            margin="normal"
            error={Boolean(errors.email)}
            helperText={errors.email}
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-input': {
                color: '#ffffff',
              },
            }}
          />
        </Box>

        <Box sx={{ mb: 2.5 }}>
          <TextField
            type="password"
            value={password}
            required
            onChange={e => setPassword(e.target.value)}
            label="Password"
            fullWidth
            margin="normal"
            inputProps={{ minLength: 5 }}
            error={Boolean(errors.password)}
            helperText={errors.password}
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-input': {
                color: '#ffffff',
              },
            }}
          />
        </Box>

        <FormControl component="fieldset" margin="normal" fullWidth sx={{ mb: 3 }}>
          <FormLabel component="legend" sx={{
            color: '#00d4ff !important',
            fontWeight: 600,
            mb: 1.5,
          }}>
            Gender
          </FormLabel>
          <RadioGroup
            row
            aria-label="gender"
            name="gender"
            value={gender}
            onChange={e => setGender(e.target.value)}
            sx={{
              '& .MuiRadio-root': {
                color: 'rgba(0, 212, 255, 0.4)',
                '&.Mui-checked': {
                  color: '#00d4ff',
                },
              },
            }}
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>

        <Box sx={{
          mb: 3.5,
          p: 2,
          borderRadius: 2,
          background: 'rgba(0, 212, 255, 0.05)',
          border: `1px solid ${errors.rememberMe ? '#ff6b6b' : 'rgba(0, 212, 255, 0.2)'}`,
          transition: 'all 0.3s ease',
        }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={rememberMe}
                onChange={e => setRememberMe(e.target.checked)}
                sx={{
                  color: 'rgba(0, 212, 255, 0.4)',
                  '&.Mui-checked': {
                    color: '#00d4ff',
                  },
                }}
              />
            }
            label="I agree to the terms and conditions"
          />
          {errors.rememberMe && (
            <Box sx={{ color: '#ff6b6b', fontSize: '0.75rem', mt: 0.5, display: 'flex', alignItems: 'center', gap: 0.5 }}>
              ❌ {errors.rememberMe}
            </Box>
          )}
        </Box>

        <Box sx={{
          mt: 4,
          mb: 2,
          display: 'flex',
          gap: 2,
        }}>
          <Button
            variant="contained"
            type="submit"
            fullWidth
            size="large"
            sx={{
              py: 1.75,
              fontSize: '1.1rem',
              background: 'linear-gradient(135deg, #00d4ff 0%, #ff006e 100%)',
              '&:hover': {
                backgroundImage: 'linear-gradient(135deg, #4dd9ff 0%, #ff4494 100%)',
              },
            }}
          >
            ✨ Submit Application
          </Button>
        </Box>
      </form>

      <Typography variant="caption" align="center" sx={{
        color: 'text.secondary',
        mt: 3,
        mb: 2,
        display: 'block',
      }}>
        Your data is secure and encrypted
      </Typography>

      <Box sx={{
        pt: 2,
        borderTop: '1px solid rgba(0, 212, 255, 0.2)',
        textAlign: 'center',
      }}>
        <Typography variant="caption" sx={{
          color: '#00d4ff',
          fontWeight: 600,
          display: 'block',
          mb: 0.5,
        }}>
          Taranpreet Singh Mander
        </Typography>
        <Typography variant="caption" sx={{
          color: 'text.secondary',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          px: 1.5,
          py: 0.5,
          borderRadius: 1,
          display: 'inline-block',
        }}>
          23BIS70119
        </Typography>
      </Box>
    </Container>
  );
}
