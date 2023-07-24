import React from 'react';
import { useDrop } from 'react-dnd';
import { NativeTypes } from 'react-dnd-html5-backend';
import UploadButton from 'Components/atoms/UploadButton';
import './fileupload.scss';

export default function FileUpload({
  children, handleFileDrop, btnText, multiple = false,
}) {
  let opacity = 1;
  // eslint-disable-next-line no-unused-vars
  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: [NativeTypes.FILE],
      drop(item) {
        handleFileDrop(item.files);
      },
      // canDrop(item) {
      //   console.log('canDrop', item.files, item.items);
      //   return true;
      // },
      // hover(item) {
      //   console.log('hover', item.files, item.items);
      // },
      collect: (monitor) => {
        const item = monitor.getItem();
        if (item) {
          // eslint-disable-next-line no-console
          console.log('collect', item.files, item.items);
        }
        opacity = monitor.isOver() ? 0.5 : 1;
        return {
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
        };
      },
    }),
    [],
  );
  return (
    <div
      ref={drop}
      style={{
        opacity,
      }}
      className="upload-container"
    >
      {children}
      <UploadButton type="button" multiple={multiple} handleFileChange={handleFileDrop}>
        {btnText}
      </UploadButton>
    </div>
  );
}
