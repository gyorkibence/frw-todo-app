import React from 'react';

import { Button } from '@mui/material';

import { TodoForm, TodoItem, Title } from 'components';
import { useTodo } from 'hooks';

const TodoApp = () => {
  const { showTodos, disableUndo, onSubmit, onChange, onComplete, onEdit, onUndo, todos, title } = useTodo();
  return (
    <div className="container mx-auto px-2">
      <Title title="FRW - Todo application" className="w-full text-center py-3" />
      <TodoForm onSubmit={onSubmit} onChange={onChange} value={title} />
      {showTodos && (
        <>
          <Title title="My todos" />
          {todos.map((item) => (
            <TodoItem key={item.id} item={item} onComplete={() => onComplete(item)} onEdit={(title) => onEdit(item, title)} />
          ))}
        </>
      )}
      <Button variant="outlined" disabled={disableUndo} onClick={onUndo}>
        Undo changes
      </Button>
    </div>
  );
};

export default TodoApp;
