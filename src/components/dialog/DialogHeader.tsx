import { PropsWithChildren } from "react";
import { Flex } from "../layout/Flex";
import { useDialogContext } from "./DialogContext";
import styled from "styled-components";
import { DialogCloseButton } from "./DialogCloseButton";

export type DialogHeaderProps = PropsWithChildren;

export const DialogHeader = (props: DialogHeaderProps) => {
  useDialogContext();

  return (
    <DialogHeaderBase direction="row" alignItems="center" gap={8}>
      {props.children}
      <DialogCloseButton />
    </DialogHeaderBase>
  );
};

const DialogHeaderBase = styled(Flex)`
  display: flex;
  padding: 0 24px;
  margin: 0 0 16px 0;
  & svg {
    font-size: 1.2rem;
  }
`;
