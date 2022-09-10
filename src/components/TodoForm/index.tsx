import React, { FC } from 'react';

import { TextField, Button } from '@mui/material';

import Props from './types';

const TodoForm: FC<Props> = ({ onSubmit, onChange, value }) => (
  <form onSubmit={onSubmit} className="flex items-center mb-4">
    <TextField id="outlined-basic" label="Todo name" variant="outlined" onChange={(e) => onChange(e.target.value)} size="small" value={value} />
    <Button variant="contained" className="!ml-4" type="submit">
      Add new todo
    </Button>
  </form>
);

export default TodoForm;
