import React, { useState } from 'react';
import TextInput from '../Atoms/TextInput';
import { Button } from '@material-ui/core';

interface IProps {
  url: string;
}

const LoginForm: React.FC<IProps> = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  return (
    <form action={props.url} method="POST">
      <TextInput
        name="email"
        type="email"
        autoFocus={true}
        label="label"
        placeholder="placeholder"
        onChange={changeEmail}
        value={email}
      />
      <TextInput
        name="password"
        type="password"
        label="label"
        placeholder="placeholder"
        onChange={changePassword}
        value={password}
      />
      <Button fullWidth={true} variant="contained" color="primary" type="submit">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
