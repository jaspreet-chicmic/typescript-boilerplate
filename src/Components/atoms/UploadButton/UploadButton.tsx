import React from 'react';
import { retrunButtonClass } from '../Button/Button';

function UploadButton({
  children, size, handleFileChange, ...otherProps
}) {
  const sizeClass = retrunButtonClass(size);
  return (
    <label htmlFor="file-upload" className={`btn ${sizeClass} btn-primary rounded-50`} {...otherProps}>
      <input type="file" className="d-none" id="file-upload" onChange={(e) => handleFileChange(e.target.files)} />
      Custom Upload
    </label>
  );
}

export default UploadButton;
