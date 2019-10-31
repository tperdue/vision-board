import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SaveBoardButton from '../tim-components/ui/buttons/save-board';
import '../CSS/Button.css'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));


const buttonContainerStyles = {
  textAlign: 'center',
  width: "50vw",
  margin: "0 auto"
}

export default function ContainedButtons(props) {
  const classes = useStyles();

  return (
    <div style={buttonContainerStyles}>


      <ButtonGroup
        variant="contained"
        color="secondary"
        aria-label="full-width contained primary button group"
      >
        <Button onClick={props.downloadClick} className={classes.button}>
          Download to Image
                    </Button>

        <SaveBoardButton />
        <Button onClick={props.saveClick} className={classes.button}>Clear Board</Button>

      </ButtonGroup>
    </div>
  );
}