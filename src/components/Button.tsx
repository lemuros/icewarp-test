import styled from "styled-components";
import { useBoolean } from "../utils/useBoolean";
import { ReactNode } from "react";
import { DialogProps } from "./dialog/Dialog";

export type ButtonProps = {
  $active?: boolean;
};

export const Button = styled.button<ButtonProps>`
  appearance: none;

  border-radius: 4px;
  border: 1px solid;
  padding: 8px 16px;

  color: ${(props) =>
    props.$active ? "var(--color-gray-1)" : "var(--color-primary)"};
  border-color: var(--color-primary);
  background: ${(props) =>
    props.$active ? "var(--color-primary)" : "transparent"};
  cursor: pointer;

  & svg {
    width: 16px;
    height: 16px;
  }
`;

export type ButtonWithDialogProps = {
  label: string;
  children: (dialogProps: DialogProps) => ReactNode;
};

export const ButtonWithDialog = (props: ButtonWithDialogProps) => {
  const dialogState = useBoolean();

  return (
    <>
      <Button onClick={dialogState.setTrue}>{props.label}</Button>
      {props.children({
        isOpen: dialogState.value,
        close: dialogState.setFalse,
      })}
    </>
  );
};
