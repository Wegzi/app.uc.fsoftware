import React from 'react';
import Select from 'react-select';
import { useTheme } from 'styled-components';
import { Label } from '../Typography';

export default function SelectInput({ options, label, ...props }) {
  const theme = useTheme();
  return (
    <>
      {label ? <Label className='ml-2' text={label} /> : null}
      <Select
        options={options}
        styles={{
          control: provided => ({
            ...provided,
            backgroundColor: theme.input.background,
            color: theme.input.color,
            borderRadius: theme.rounded,
            border: 'none',
            height: '39px',
          }),
        }}
        {...props}
      />
    </>
  );
}
