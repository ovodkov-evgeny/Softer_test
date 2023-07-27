import React from "react";

const FileInput = ({ onChange }) => {
  return (
    <div>
      <input type="file" multiple onChange={(e) => onChange(e.target.files)} />
    </div>
  );
};

export default FileInput;
