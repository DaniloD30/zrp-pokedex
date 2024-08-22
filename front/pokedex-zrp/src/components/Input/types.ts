import type { InputHTMLAttributes } from 'react';

type InputNativeProps = InputHTMLAttributes<HTMLInputElement>;

export type TextFieldProps = {
  testId?: string;
  startAdornment?: JSX.Element;
  type?: InputNativeProps['type'];
  value?: InputNativeProps['value'];
  name?: InputNativeProps['name'];
  id?: InputNativeProps['id'];
  placeholder?: InputNativeProps['placeholder'];
  max?: InputNativeProps['max'];
  maxLength?: InputNativeProps['maxLength'];
  onChange?: InputNativeProps['onChange'];
};
