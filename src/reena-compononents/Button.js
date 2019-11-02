import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SaveBoardButton from '../tim-components/ui/buttons/save-board';
import ClearBoardButton from '../tim-components/ui/buttons/clear-board';
import '../CSS/Button.css'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));


const buttonContainerStyles = makeStyles(theme => ({

  root: {
    display: "flex",
    justifyContent: "center",
    margin: "0 auto",
    width: "80vw",
    [theme.breakpoints.up('md')]: {
      width: "50vw"
    }
  }


}));

export default function ContainedButtons(props) {
  const classes = useStyles();
  const buttonCss = buttonContainerStyles();

  return (
    <div className={buttonCss.root}>


      <ButtonGroup
        variant="contained"
        color="secondary"
        aria-label="full-width contained primary button group"
      >
        <Button onClick={props.downloadClick} className={classes.button}>
          Download to Image
                    </Button>

        <SaveBoardButton />
        <ClearBoardButton />


      </ButtonGroup>
    </div>
  );
}