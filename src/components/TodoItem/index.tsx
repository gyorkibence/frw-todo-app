import React, { FC } from 'react';

import { TextField, Checkbox } from '@mui/material';

import Props from './types';

const TodoItem: FC<Props> = ({ item, onEdit, onComplete }) => (
  <div className="flex items-center mb-4">
    <TextField value={item.title} onChange={(e) => onEdit(e.target.value)} />
    <Checkbox checked={item.completed} onChange={onComplete} />
  </div>
);

export default TodoItem;
