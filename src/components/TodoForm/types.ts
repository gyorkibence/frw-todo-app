import { FormEvent } from 'react';

export default interface Props {
  onSubmit: (e: FormEvent) => void;
  onChange: (value: string) => void;
  value: string;
}
