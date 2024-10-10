import styled from "styled-components";
import {
  ButtonGroupVariant,
  DialogButtonGroupContextProvider,
} from "./DialogButtonGroupContext";
import { PropsWithChildren } from "react";
import { useDialogContext } from "./DialogContext";

export type DialogButtonGroupProps = {
  variant?: ButtonGroupVariant;
} & PropsWithChildren;

export const DialogButtonGroup = (props: DialogButtonGroupProps) => {
  const { close } = useDialogContext();
  const { variant = "generic" } = props;

  return (
    <DialogButtonGroupContextProvider variant={variant}>
      {variant === "generic" && (
        <GenericButtonGroupBase>{props.children}</GenericButtonGroupBase>
      )}
      {variant === "header" && (
        <HeaderButtonGroupBase $haveCloseButton={!!close}>
          {props.children}
        </HeaderButtonGroupBase>
      )}
    </DialogButtonGroupContextProvider>
  );
};

export const GenericButtonGroupBase = styled.div`
  &:has(button:nth-child(2)) button {
    &:not(:first-of-type):not(:last-of-type) {
      border-radius: 0;
    }
    &:not(:first-of-type) {
      margin-left: -1px;
    }
    &:first-of-type {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    &:last-of-type {
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
    }
  }
`;

export const HeaderButtonGroupBase = styled.span<{ $haveCloseButton: boolean }>`
  display: flex;
  position: absolute;
  top: 16px;
  right: ${(props) => (props.$haveCloseButton ? "40px" : "16px")};
  & button {
    border: 0;
    padding: 4px;
    color: var(--color-gray-5);
  }
`;
