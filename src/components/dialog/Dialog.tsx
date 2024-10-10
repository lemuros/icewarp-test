import ReactDOM from "react-dom";
import { DialogContextProvider } from "./DialogContext";
import { PropsWithChildren, useEffect, useMemo } from "react";
import styled from "styled-components";

const BODY_OPEN_CLASSNAME = "dialog-open";

export type DialogProps = PropsWithChildren & {
  isOpen: boolean;
  close?: () => void;
  size?: "sm" | "md" | "lg";
  disableEscHandler?: boolean;
};

export const Dialog = ({
  isOpen,
  close,
  children,
  size,
  disableEscHandler,
}: DialogProps) => {
  const contextValue = useMemo(() => ({ isOpen, close }), [isOpen, close]);

  // Add/remove class BODY_OPEN_CLASSNAME to body
  // This class removes scrolling from body
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(BODY_OPEN_CLASSNAME);
    } else {
      document.body.classList.remove(BODY_OPEN_CLASSNAME);
    }
  }, [isOpen]);

  // Close dialog when user presses Escape key
  useEffect(() => {
    if (close && !disableEscHandler) {
      const handler = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          close();
        }
      };

      document.addEventListener("keydown", handler);

      return () => document.removeEventListener("keydown", handler);
    }
  }, [close, disableEscHandler]);

  // Translate size parameter to width (number of pixels)
  const dialogWidth = useMemo(() => {
    if (size === "lg") {
      return 800;
    }
    if (size === "md") {
      return 500;
    }
    return 300;
  }, [size]);

  // Prepare content that will be rendered in portal
  const content = (
    <DialogContextProvider value={contextValue}>
      <OuterDialogWrapper $isOpen={isOpen} onClick={close}>
        {isOpen && (
          <InnerDialogWrapper
            onClick={(e) => e.stopPropagation()}
            width={dialogWidth}
          >
            {children}
          </InnerDialogWrapper>
        )}
      </OuterDialogWrapper>
    </DialogContextProvider>
  );

  return ReactDOM.createPortal(content, document.body);
};

const OuterDialogWrapper = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  background: var(--color-backdrop-1);
  backdrop-filter: blur(2px);
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;

  opacity: ${(props) => (props.$isOpen ? "1" : "0")};
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
  transition: all 0.3s ease;
`;

const InnerDialogWrapper = styled.div<{ width: number }>`
  display: flex;
  flex-direction: column;
  position: relative;
  background: white;
  border-radius: 8px;
  width: ${(props) => props.width}px;
  max-width: 100vw;
  max-height: calc(100vh - 32px);
  box-shadow: 0 0 16px 2px var(--color-backdrop-2);
  transition: all 0.2s ease;
  & > div:first-of-type {
    margin-top: 16px;
  }
  & > :last-of-type {
    margin-bottom: 16px;
  }
`;
