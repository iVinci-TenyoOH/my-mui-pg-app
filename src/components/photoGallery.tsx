import { Box, Grid, Paper } from '@mui/material';

import { photos } from '../data/photo';

const Component: React.FC = () => {
  return (
    <Box sx={{ width: '70%', margin: '20px auto' }}>
      <Grid container spacing={2}>
        {photos.map((photo, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Paper
              component="img"
              src={photo}
              sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            ></Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Component;
