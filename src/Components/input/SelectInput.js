import React from 'react';
import Select from 'react-select';
import { useTheme } from 'styled-components';
import { Label } from '../Typography';
import CreatableSelect from 'react-select/creatable';

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
          menu: (styles, state) => ({
            ...styles,
            // backgroundColor: theme.white,
            color: '#555',
          }),
          multiValue: styles => ({
            ...styles,
            backgroundColor: theme.primary,
          }),
          multiValueLabel: styles => ({ ...styles, color: '#fff' }),
          multiValueRemove: styles => ({ ...styles, color: '#fff' }),
          singleValue: styles => ({ ...styles, color: theme.dark }),
        }}
        {...props}
      />
    </>
  );
}

export function CreatableSelectInput({ options, label, ...props }) {
  const theme = useTheme();
  return (
    <>
      {label ? <Label className='ml-2' text={label} /> : null}
      <CreatableSelect
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
          menu: (styles, state) => ({
            ...styles,
            // backgroundColor: theme.white,
            color: '#555',
          }),
          multiValue: styles => ({
            ...styles,
            backgroundColor: theme.primary,
          }),
          multiValueLabel: styles => ({ ...styles, color: '#fff' }),
          multiValueRemove: styles => ({ ...styles, color: '#fff' }),
          singleValue: styles => ({ ...styles, color: theme.dark }),
        }}
        {...props}
      />
    </>
  );
}
