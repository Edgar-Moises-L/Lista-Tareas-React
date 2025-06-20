import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function FloatingActionButtonExtendedSize() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab variant="extended" size="medium" color="primary">
        <AddIcon sx={{ mr: 1 }} />
        Agregar tarea
      </Fab>

    </Box>
  );
}
