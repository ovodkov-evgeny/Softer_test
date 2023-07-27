import React, { useState } from "react";

const FileUploader = ({ files, token }) => {
  const [uploadStatus, setUploadStatus] = useState("");

  const uploadFilesToYandexDisk = async () => {
    setUploadStatus("Uploading...");

    const url = "https://cloud-api.yandex.net/v1/disk/resources/upload";
    const headers = {
      Authorization: `OAuth ${token}`,
    };

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await fetch(url, {
          method: "POST",
          headers,
          body: formData,
        });

        if (response.ok) {
          setUploadStatus(`Uploaded ${i + 1} out of ${files.length} files.`);
        } else {
          console.error(`Failed to upload ${file.name}`);
        }
      } catch (error) {
        console.error(`Error uploading ${file.name}:`, error);
      }
    }
  };

  return (
    <div>
      <button onClick={uploadFilesToYandexDisk}>Upload Files</button>
      <p>{uploadStatus}</p>
    </div>
  );
};

export default FileUploader;
