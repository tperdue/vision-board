import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import { updateAlertDialog } from '../../../redux-store/actions/alert-dialogs'

const ActionSuccessDialog = ({ open, title, message }) => {




    const handleDialogClose = () => {
        updateAlertDialog({
            alertKey: 'actionSuccessful',
            open: false,
            pending: false,
            title: '',
            message: ''
        })
    }

    return (
        <div>

            <Dialog
                open={open}
                onClose={handleDialogClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>

                    <Button onClick={handleDialogClose} color="primary" autoFocus>
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

const mapStateToProps = (state) => {
    const { alertDialogs } = state;
    const { actionSuccessfulDialogInfo } = alertDialogs.actionSuccessful;
    return { actionSuccessfulDialogInfo }
}

const mapDispatchToProps = {
    updateAlertDialog
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionSuccessDialog);