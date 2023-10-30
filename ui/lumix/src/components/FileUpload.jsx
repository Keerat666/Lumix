/**
 * UploadFile component allows users to upload files and track the upload progress.
 * @module UploadFile
 * @param {Object} props - The component props.
 * @param {function} props.setFileUrl - A function to set the URL of the uploaded file.
 * @param {string} props.filename - The name of the file to be uploaded.
 * @param {function} props.setFilename - A function to set the name of the file to be uploaded.
 * @return {JSX.Element} - A JSX element representing the UploadFile component.
 */
// Dependencies -> Material UI, React (Install here: https://mui.com/material-ui/getting-started/installation/)
// Description: Upload file component

/*

*/

import Typography from "@mui/material/Typography";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ProgressChecker from "./ProgressChecker";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";

export default function UploadFile({ setFileUrl, filename, setFilename }) {
  const [file, setFile] = useState();
  const [displayFile, setDisplayFile] = useState(false);
  const [progress, setProgress] = useState(() => (disabled ? 100 : 0));

  const handleUpload = async () => {
    setDisplayFile(false);
    // do your api call here
    // make sure to send setProgress and update it while uploading file to your api
    // after uploading, setFileUrl to the url of the uploaded file
  };

  const handleCancel = () => {
    setDisplayFile(false);
    setFile(null);
    setFilename("");
  };

  const handleAddFile = (e) => {
    setProgress(0);
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
    setDisplayFile(true);
  };

  const resetFile = (e) => {
    e.target.value = null;
  };

  return (
    <>
      <Stack sx={{ mt: 4 }} spacing={2} direction="row">
        <Button
          component="label"
          variant="contained"
          sx={{ mt: 3, maxWidth: 200 }}
          startIcon={<CloudUploadIcon />}
          disabled={displayFile}
        >
          Add Image
          <input
            style={{ display: "none" }}
            type="file"
            onChange={handleAddFile}
            onClick={resetFile}
          />
        </Button>
        <Button
          sx={{ mt: 3, ml: 2, maxWidth: 200 }}
          color="success"
          onClick={handleUpload}
          disabled={!displayFile}
        >
          Upload
        </Button>
        <Button
          sx={{ mt: 3, ml: 2, maxWidth: 200 }}
          color="error"
          onClick={handleCancel}
          disabled={!displayFile}
        >
          Cancel
        </Button>
      </Stack>
      {displayFile && <Typography color="red">{filename}</Typography>}
      {progress == 100 && <Typography color="blue">{filename}</Typography>}
      {progress < 100 && progress > 0 && (
        <ProgressChecker progress={progress} />
      )}
    </>
  );
}
