import React from 'react';
import { Box, CssBaseline } from '@material-ui/core';
import { Biblioteca } from 'features/biblioteca';
import { useStyles } from "./App.style";

function App() {
  const style = useStyles();
  return (
    <Box className={style.App}>
      <CssBaseline />
      <Biblioteca />
    </Box>
  );
}

export default App;
