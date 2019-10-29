import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import '../CSS/Button.css'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function ContainedButtons(props) {
  const classes = useStyles();

  return (
    <div style={{ textAlign: "center" }}>


      <ButtonGroup
        variant="contained"
        color="secondary"
        aria-label="full-width contained primary button group"
      >
        <Button onClick={props.downloadClick} className={classes.button}>
          Download to Image
                    </Button>

        <Button onClick={props.saveClick} className={classes.button}>Save Board</Button>

      </ButtonGroup>
    </div>
  );
}