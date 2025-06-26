import { useState } from 'react';
import { TextField, Button, MenuItem, Box } from '@mui/material';

export default function AddUser() {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password || !form.role) {
      alert('Please fill all fields');
      return;
    }
    console.log('User added:', form);
  };

  return (
    <div className='add-user'>
      <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400 }}>
      <TextField fullWidth label="Name" name="name" margin="normal" onChange={handleChange} className='textfield' />
      <TextField fullWidth label="Email" name="email" margin="normal" onChange={handleChange} className='textfield' />
      <TextField fullWidth label="Password" name="password" type="password" margin="normal" onChange={handleChange} className='textfield' />
      <TextField
        select
        fullWidth
        label="Role"
        name="role"
        margin="normal"
        onChange={handleChange}
        className='textfield'
      >
        <MenuItem value="Admin">Admin</MenuItem>
        <MenuItem value="User">User</MenuItem>
      </TextField>
      <Button type="submit" className='button' variant="contained">Add User</Button>
    </Box>

    </div>
    
  );
}