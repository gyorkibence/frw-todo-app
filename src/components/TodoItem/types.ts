import { Todo } from 'reducers/todo';

export default interface Props {
  item: Todo;
  onEdit: (title: string) => void;
  onComplete: () => void;
}
