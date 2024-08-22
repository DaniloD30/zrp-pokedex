import type { InputHTMLAttributes } from 'react';

type InputNativeProps = InputHTMLAttributes<HTMLInputElement>;

export type TextFieldProps = {
  testId?: string;
  label?: string;
  error?: string;
  mask?: string | string[];
  currency?: boolean;
  startAdornment?: JSX.Element;
  endAdornment?: JSX.Element;
  type?: InputNativeProps['type'];
  name?: InputNativeProps['name'];
  value?: InputNativeProps['value'];
  defaultValue?: InputNativeProps['defaultValue'];
  id?: InputNativeProps['id'];
  disabled?: InputNativeProps['disabled'];
  placeholder?: InputNativeProps['placeholder'];
  min?: InputNativeProps['min'];
  max?: InputNativeProps['max'];
  minLength?: InputNativeProps['minLength'];
  maxLength?: InputNativeProps['maxLength'];
  autoComplete?: InputNativeProps['autoComplete'];
  readOnly?: InputNativeProps['readOnly'];
  required?: InputNativeProps['required'];
  onChange?: InputNativeProps['onChange'];
  onChangeCapture?: InputNativeProps['onChangeCapture'];
  onBlur?: InputNativeProps['onBlur'];
  onFocus?: InputNativeProps['onFocus'];
  onKeyDown?: InputNativeProps['onKeyDown'];
  onKeyUp?: InputNativeProps['onKeyUp'];
};
