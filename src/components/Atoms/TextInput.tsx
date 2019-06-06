import React from 'react';
import TextField from '@material-ui/core/TextField';

interface IProps {
  name: string;
  type?: 'password' | 'email' | 'text';
  autoFocus: boolean;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<IProps> = props => {
  return (
    <TextField
      required={true}
      name={props.name}
      type={props.type || 'text'}
      autoFocus={props.autoFocus}
      label={props.label}
      placeholder={props.placeholder}
      fullWidth={true}
      margin="normal"
      variant="outlined"
      InputLabelProps={{
        shrink: true,
      }}
      onChange={props.onChange}
      value={props.value}
    />
  );
};

export default TextInput;
