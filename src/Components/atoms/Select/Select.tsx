import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Select from 'react-select';

function CustomSelect({
  ...otherProps
}) {
  return (
    <Select {...otherProps} />
  );
}

export default CustomSelect;
