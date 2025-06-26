import { Grid, Paper, Typography } from '@mui/material';

const stats = [
  { label: 'Total Users', value: 120 },
  { label: 'Sales', value: '$5,000' },
  { label: 'Orders', value: 87 },
];

export default function Dashboard() {
  return (
    <div className='dash-container'>
      
      {stats.map((stat, i) => (
        <Grid item xs={12} sm={4} key={i} >
          <Paper className='dash-item'  >
            <Typography variant="h6">{stat.label}</Typography>
            <Typography variant="h4">{stat.value}</Typography>
          </Paper>
        </Grid>
      ))}
   

     </div>
    
  );
}