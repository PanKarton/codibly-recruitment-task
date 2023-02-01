import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRef } from 'react';
import TextField from '@mui/material/TextField';

export const NumberInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { colorId } = useParams();

  const handleOnChange = () => {
    if (ref === null || ref.current === null) return;
    const colorId = parseInt(ref.current.value);
    colorId > 0 ? navigate(`/color/${colorId}`) : navigate(`/colors/1`);
  };

  return (
    <TextField
      label="Color id"
      variant="outlined"
      inputRef={ref}
      inputProps={{ min: 0 }}
      type="number"
      onChange={handleOnChange}
      value={colorId}
      style={{ maxWidth: '15rem' }}
    />
  );
};
