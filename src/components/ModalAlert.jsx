import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { messagesAlert } from '../utils/constants';

export default function ModalAlert({
  alertType,
  alertCustomMessage,
  closeAlert,
  statusModalAlert }) {

  return (
    <Dialog
      open={statusModalAlert}
      onClose={closeAlert}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {messagesAlert[alertType]?.title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {messagesAlert[alertType].description + alertCustomMessage}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeAlert} autoFocus>
          Entendido
        </Button>
      </DialogActions>
    </Dialog>
  );
}
