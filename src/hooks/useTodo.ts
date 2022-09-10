import { FormEvent, useMemo, useState } from 'react';

import { ActionCreators } from 'redux-undo';

import { add, complete, editName, Todo } from 'reducers/todo';
import { RootState, useAppSelector, useAppDispatch } from 'store';

const useTodo = () => {
  const dispatch = useAppDispatch();
  const { present, past } = useAppSelector((state: RootState) => state.todo);
  const [title, setTitle] = useState('');
  const showTodos: boolean = useMemo(() => !!present.todos.length, [present.todos]);
  const disableUndo: boolean = useMemo(() => !past.length, [past]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (title) {
      dispatch(add(title));
      setTitle('');
    }
  };

  const onChange = (value: string) => {
    setTitle(value);
  };

  const onEdit = (item: Todo, value: string) => {
    dispatch(editName({ todo: item, title: value }));
  };

  const onComplete = (item: Todo) => {
    dispatch(complete(item));
  };

  const onUndo = () => {
    dispatch(ActionCreators.undo());
  };

  return {
    showTodos,
    disableUndo,
    onSubmit,
    onChange,
    onComplete,
    onEdit,
    onUndo,
    todos: present.todos,
    title,
  };
};

export default useTodo;
