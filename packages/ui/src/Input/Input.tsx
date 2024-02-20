import type { ChangeEvent, FocusEvent } from "react";
import { forwardRef, useState } from "react";
import type { InputProps } from "./Input.types";
import * as Styled from "./Input.styles";
import { Button } from "../Button";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ showLength = false, submitText, value = "", maxLength, ...props }, ref) => {
    const [textLength, setTextLength] = useState(`${value}`.length);
    const [isFocus, setFocus] = useState(false);

    const handleCheckLength = (e: ChangeEvent<HTMLInputElement>) => {
      const newTextLength = e.target.value.length;
      setTextLength(newTextLength);
      if (props.onChange) props.onChange(e);
    };

    const handleInputFocus = (e: FocusEvent<HTMLInputElement>) => {
      setFocus(true);
      if (props.onFocus) props.onFocus(e);
    };

    const handleInputBlur = (e: FocusEvent<HTMLInputElement>) => {
      setFocus(false);
      if (props.onBlur) props.onBlur(e);
    };

    return (
      <Styled.Container>
        <Styled.Wrapper disabled={props.disabled} isFocus={isFocus}>
          <Styled.Input
            ref={ref}
            maxLength={maxLength}
            {...props}
            onChange={handleCheckLength}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          {showLength && (
            <Styled.LengthText>
              {textLength} / {maxLength}
            </Styled.LengthText>
          )}
        </Styled.Wrapper>
        {submitText && (
          <Button variant="black" w="64px" size="medium">
            {submitText}
          </Button>
        )}
      </Styled.Container>
    );
  },
);
