import styled from "styled-components";
import { CloseIcon } from "../Icon";
import { useDialogContext } from "./DialogContext";

export const DialogCloseButton = () => {
  const { close } = useDialogContext();

  if (!close) {
    return null;
  }

  return (
    <DialogCloseButtonBase onClick={close} className="closeButton">
      <CloseIcon />
    </DialogCloseButtonBase>
  );
};

const DialogCloseButtonBase = styled.button`
  appearance: none;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 16px;
  top: 16px;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  font-size: 1.2rem;
`;
