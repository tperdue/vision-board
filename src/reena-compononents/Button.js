import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SaveBoardButton from '../tim-components/ui/buttons/save-board';
import ClearBoardButton from '../tim-components/ui/buttons/clear-board';
import '../CSS/Button.css'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    color: "#3c4245",
    borderColor: "#f6f078",
    backgroundColor: "#f6f078"
  },
  input: {
    display: 'none',
  },
}));



const buttonContainerStyles = makeStyles(theme => ({

  root: {
    backgroundColor: "#3c4245",
    display: "flex",
    justifyContent: "center",
    margin: "0 auto",
    textAlign: 'center',

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
<<<<<<< HEAD
    <div className={buttonCss.root}>


      <ButtonGroup
        variant="contained"
        color="secondary"
        aria-label="full-width contained primary button group"
      >
        <Button onClick={props.downloadClick} className={classes.button}>
          Download to Image
=======
    <div style={buttonContainerStyles}>
            <Button onClick={props.downloadClick} className={classes.button} variant="outlined"
              color="primary">
              Download
    >>>>>>> test-merge-stying-Reena
                    </Button>

            <SaveBoardButton />
            <ClearBoardButton />


          </div>
          );
}