import { forwardRef, useCallback } from "react";

import type { TextFieldProps } from "./types";

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => {
    const {
      id,
      testId,
      value,
      placeholder,
      startAdornment,
      max,
      name,
      maxLength,
      type = "text",
      onChange,
    } = props;

    const handleOnChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e);
      },
      [onChange]
    );

    return (
      <div>
        <div className="flex rounded-lg border px-2.5 bg-white">
          {startAdornment && (
            <div className="flex items-center">{startAdornment}</div>
          )}

          <div className="flex-1">
            <input
              ref={ref}
              data-testid={testId}
              type={type}
              name={name}
              id={id}
              value={value}
              placeholder={placeholder}
              max={max}
              maxLength={maxLength}
              onChange={handleOnChange}
              className={
                "h-[38px] w-full border-0 py-2 text-sm leading-6 text-gray-900 outline-none placeholder:text-gray-200"
              }
            />
          </div>
        </div>
      </div>
    );
  }
);
