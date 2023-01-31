import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRef } from 'react';

export const NumberInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { colorId } = useParams();

  const handleOnChange = () => {
    if (ref === null || ref.current === null) return;
    const colorId = parseInt(ref.current.value);

    colorId > 0 ? navigate(`/color/${colorId}`) : navigate(`/colors/1`);
  };

  return <input ref={ref} type="number" min={0} onChange={handleOnChange} value={colorId} />;
};
