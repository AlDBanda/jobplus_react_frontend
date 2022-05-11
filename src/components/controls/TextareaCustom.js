import React from 'react';
import { TextareaAutosize } from '@material-ui/core';

export default function TextareaCustom(props) {

  const { placeholder, rows } = props;
  return (
    <TextareaAutosize
      rows={rows || 7}
      placeholder={placeholder}
    />
  )
}