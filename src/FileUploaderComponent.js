import React, { useState } from "react";
import FileInput from "./FileInput";
import FileUploader from "./FileUploader";

const FileUploaderComponent = ({ token }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (files) => {
    setSelectedFiles(Array.from(files));
  };

  return (
    <div>
      <h2>File Uploader</h2>
      <FileInput onChange={handleFileChange} />
      {selectedFiles.length > 0 && (
        <FileUploader files={selectedFiles} token={token} />
      )}
    </div>
  );
};

export default FileUploaderComponent;
