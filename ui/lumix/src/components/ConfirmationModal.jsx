// Dependencies -> Material UI, React (Install here: https://mui.com/material-ui/getting-started/installation/)
// Description: Confirmation modal component

/*
This component can be called anywhere in the app. It will display a modal with a title, text, and two buttons.
You need to pass 7 props to the component:
- open: boolean, whether the modal is open or not
- title: string, title of the modal
- text: string, text of the modal
- okButtonText: string, text of the OK button
- cancelButtonText: string, text of the cancel button
- handleOkClick: function, what to do when the OK button is clicked
- handleCancelClick: function, what to do when the cancel button is clicked
*/

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function ConfirmationModal({
  open,
  title,
  text,
  okButtonText,
  cancelButtonText,
  handleOkClick,
  handleCancelClick,
}) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleCancelClick}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelClick} autoFocus>
            {cancelButtonText}
          </Button>
          <Button onClick={handleOkClick}>{okButtonText}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
