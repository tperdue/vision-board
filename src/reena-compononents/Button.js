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


const buttonContainerStyles = {
  textAlign: 'center',
  width: "50vw",
  margin: "0 auto",
  backgroundColor: "#3c4245",
  display: "flex",
  justifyContent: "center"

}







export default function ContainedButtons(props) {
  const classes = useStyles();

  return (
    <div style={buttonContainerStyles}>
        <Button onClick={props.downloadClick} className={classes.button} variant="outlined"
        color="primary">
          Download
                    </Button>

        <SaveBoardButton />
        <ClearBoardButton />


    </div>
  );
}