import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ModalDelete({ open, handleAgreeDelete, handleCloseCancel }) {
  return (
    <Dialog
      open={open}
      onClose={handleCloseCancel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Eliminar producto"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Estas seguro de que quieres eliminar este producto?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseCancel}>Cancelar</Button>
        <Button onClick={handleAgreeDelete} autoFocus>
          Eliminar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
