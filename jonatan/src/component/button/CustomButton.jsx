import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import theme from 'theme';

const styles = makeStyles((th) => ({
  button: {
    background: th.palette.colors.blue1,
  },
}));

const CustomButton = () => {
  const classes = styles();

  return (
    <Button className={classes.button}>
      <Typography style={{ color: theme.palette.colors.blue1 }}> hola </Typography>
    </Button>
  );
};
export default CustomButton;
